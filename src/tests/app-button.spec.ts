import { test, expect } from '@playwright/test';

test('Primary Button Test Case', async ({ page }) => {
	await page.goto('http://localhost:6006/iframe.html?args=&id=stories-app-button--primary&viewMode=story');
	const titleLocator = page.locator("[class*='_title_']");
	expect(await titleLocator.textContent()).toBe('Button');
});
