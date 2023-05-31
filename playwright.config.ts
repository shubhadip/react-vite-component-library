// @ts-check

import { defineConfig, devices } from "@playwright/test";
import * as dotenv from 'dotenv'

const devValues = {
	url: 'http://localhost:6006',
	expectTimeout: 30000,
	webServer: {
		command: 'next dev',
		port: 6006,
		reuseExistingServer: true,
	},
};

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

dotenv.config()

const getBaseUrl = () => {
	return process.env.NODE_ENV === 'development' ? devValues.url : 'https://dev.inspiritvr.com';
};

const getExpectTimeout = () => {
	return process.env.NODE_ENV === 'development' ? devValues.expectTimeout : 5000;
};

// const getWebserver = () => {
//   return process.env.NODE_ENV === 'development' ? devValues.webServer : undefined;
// };

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
	testDir: './src/tests',
	/* Maximum time one test can run for. */
	timeout: 120 * 1000,
	expect: {
		/**
		 * Maximum time expect() should wait for the condition to be met.
		 * For example in `await expect(locator).toHaveText();`
		 */
		timeout: getExpectTimeout(),
	},
	maxFailures: process.env.CI ? 1 : 0,
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: process.env.CI ? 'list' : 'html',
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		headless: process.env.CI ? true : false,
		Permissions: ['clipboard-write', 'clipboard-read', 'geolocation'],
		screenshot: 'only-on-failure',
		/* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
		actionTimeout: 0,
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: getBaseUrl(),
		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'retain-on-failure',
		video: 'retain-on-failure',
		launchOptions: {
			slowMo: 500,
		},
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		// {
		//   name: 'firefox',
		//   use: { ...devices['Desktop Firefox'] },
		// },

		// {
		//   name: 'webkit',
		//   use: { ...devices['Desktop Safari'] },
		// },

		/* Test against mobile viewports. */
		// {
		//   name: 'Mobile Chrome',
		//   use: { ...devices['Pixel 5'] },
		// },
		// {
		//   name: 'Mobile Safari',
		//   use: { ...devices['iPhone 12'] },
		// },

		/* Test against branded browsers. */
		// {
		//   name: 'Microsoft Edge',
		//   use: { channel: 'msedge' },
		// },
		// {
		//   name: 'Google Chrome',
		//   use: { channel: 'chrome' },
		// },
	],

	/* Folder for test artifacts such as screenshots, videos, traces, etc. */
	// outputDir: 'test-results/',

	/* Run your local dev server before starting the tests */
	// webServer: getWebserver(),
});
