import { expect } from '@storybook/jest';
import { AppTextBox } from '../lib/app-textbox';
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';

const meta: Meta<typeof AppTextBox> = {
	component: AppTextBox,
};

export default meta;
type Story = StoryObj<typeof AppTextBox>;

const defaultProps = {
	inputType: 'text',
};

const Template = (args: any): JSX.Element => <AppTextBox {...args} />;

export const Plain: any = Template.bind({});
Plain.args = {
	placeholder: 'enter your name',
	value: 'Default',
	label: 'Name',
	id: 'default',
	...defaultProps,
};

export const OnInput: Story = {
	args: {
		value: '',
		label: 'text-box',
		id: 'text-box',
	},
	play: async ({ args, canvasElement }): Promise<void> => {
		const canvas = within(canvasElement);

		const TextInput = canvas.getByLabelText('text-box', {
			selector: 'input',
		});

		await userEvent.type(TextInput, 'i am text element', {
			delay: 100,
		});
		await waitFor(() => expect(args.onChange).toHaveBeenCalled());
	},
};

export const OnBlurError: Story = {
	args: {
		value: '',
		label: 'blur-box',
		id: 'blur-box',
		autoFocus: true,
		validateOnBlur: true,
		validations: [
			{
				name: 'required',
				message: 'value is required',
			},
		],
	},
	play: async ({ args, canvasElement }): Promise<void> => {
		const canvas = within(canvasElement);

		const Input = canvas.getByLabelText('blur-box', {
			selector: 'input',
		});

		await waitFor(() => Input.blur());
		await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
		await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
		await waitFor(() => expect(canvas.getByText('value is required')).toBeTruthy(), {
			timeout: 300,
		});
	},
};
