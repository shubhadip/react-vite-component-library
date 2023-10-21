import { expect } from '@storybook/jest';
import { AppButton, ButtonThemes } from '../lib';
import type { Meta, StoryObj } from '@storybook/react';
import { waitFor, within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof AppButton> = {
	component: AppButton,
};

export default meta;
type Story = StoryObj<typeof AppButton>;

const defaultProps = {
	customHeight: '75px',
	customWidth: '250px',
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any): JSX.Element => <AppButton {...args} />;

export const Primary: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	theme: ButtonThemes.primary,
	title: 'Button',
	customTitleClass: 'text-primary-5',
	...defaultProps,
};

/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Clicked: Story = {
	args: {
		title: 'With Click Interaction',
		customWidth: '420px',
		customTitleClass: 'font-bold text-white',
		theme: ButtonThemes.primary,
	},
	play: async ({
		args,
		canvasElement,
		step,
	}: {
		args: any;
		canvasElement: any;
		step: any;
	}): Promise<void> => {
		// Starts querying the component from its root element
		const canvas = within(canvasElement);

		await step('on button click', async () => {
			await userEvent.click(canvas.getByRole('button'));
		});

		await waitFor(() => expect(args.onClick).toHaveBeenCalled());
	},
};
