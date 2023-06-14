import { AppTextBox } from '../lib';

const defaultProps = {
	inputType: 'text',
};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'AppTextBox',
	component: AppTextBox,
	argTypes: {
		...defaultProps,
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any): JSX.Element => <AppTextBox {...args} />;

export const Plain: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Plain.args = {
	placeholder: 'enter your name',
	value: 'Default',
	label: 'Name',
	id: 'default',
	...defaultProps,
};

export const WithValidations: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithValidations.args = {
	placeholder: 'blur to validate',
	value: '',
	id: 'withvalidations',
	validations: [
		{
			name: 'required',
			message: 'name is required',
		},
	],
	validateOnBlur: true,
	...defaultProps,
	label: 'With Validations',
};

export const PasswordField: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PasswordField.args = {
	placeholder: 'password type textbox',
	value: '',
	id: 'password',
	validations: [
		{
			name: 'required',
			message: 'password is required',
		},
	],
	validateOnBlur: true,
	inputType: 'password',
	label: 'password',
	showPasswordToggleIcon: true,
};
