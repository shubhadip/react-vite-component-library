import { expect } from '@storybook/jest';
import { AppButton } from '../lib';
import { ButtonThemes } from '../types/enums';
import { userEvent, waitFor, within } from '@storybook/testing-library';

const defaultProps = {
	customHeight: '75px',
	customWidth: '250px',
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'AppButton',
	component: AppButton,
	argTypes: {
		theme: {
			options: ButtonThemes,
			control: { type: 'select' },
		},
		title: 'Button',
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any): JSX.Element => <AppButton {...args} />;

export const Primary: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	theme: ButtonThemes.primary,
	title: 'Button',
	customTitleClass: 'text-white',
	...defaultProps,
};

export const Critical: any = Template.bind({});
Critical.args = {
	theme: ButtonThemes.critical,
	title: 'Critical Button',
	customBtnClass: 'rounded-lg active:bg-violet-600',
	customTitleClass: 'text-black font-bold',
	...defaultProps,
};

export const Disabled: any = Template.bind({});
Disabled.args = {
	theme: 'disable',
	title: 'Disabled Button',
	customButtonClass: 'bg-sky-400',
	...defaultProps,
};

export const Link: any = Template.bind({});
Link.args = {
	theme: 'link',
	title: 'Link Button',
	...defaultProps,
};

export const WithIcon: any = Template.bind({});
WithIcon.args = {
	theme: ButtonThemes.primary,
	title: 'Link Button',
	...defaultProps,
	customButtonClass: 'relative',
	customTitleClass: 'text-white',
	customLeftIconClass: 'absolute left-4',
	customRightIconClass: 'absolute right-4',
	showLeftIcon: true,
	showRightIcon: true,
	leftIcon: <span className="text-white">A</span>,
	rightIcon: <span className="text-white">A</span>,
};

/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Clicked: any = Template.bind({});
Clicked.args = {
	title: 'With Click Interaction',
	customWidth: '400px',
	customTitleClass: 'font-bold text-white',
};

Clicked.play = async ({
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
};
