import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	typescript: {
		check: false,
	},
	addons: [
		'@storybook/addon-coverage',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
		'@storybook/addon-interactions',
		'@storybook/addon-styling',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	core: {
		builder: "@storybook/builder-vite",
	},
	docs: {
		autodocs: 'tag',
	},
	features: {
		"storyStoreV7": false,
	}
};
export default config;
