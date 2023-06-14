import { ButtonThemes } from './enums';

export interface IUnityBody {
	module: string;
	fn: string;
	data: string;
}

export interface IButtonProps {
	title?: string;
	onClick?: (value?: string) => void;
	showLeftIcon?: boolean;
	showRightIcon?: boolean;
	leftIcon?: any;
	rightIcon?: any;
	customTitleClass?: string;
	customBtnClass?: string;
	customLeftIconClass?: string;
	customRightIconClass?: string;
	theme: ButtonThemes;
	isLoading?: boolean;
	customWidth?: number | string;
	customHeight?: number | string;
}

export type InputProps = JSX.IntrinsicElements['input'];

export type TextInputValidationHandle = {
	getValue: () => string;
	isValid: (showError?: boolean) => boolean;
	focus: () => void;
	getId: () => string;
};

export interface ITextBoxProps {
	customContainerClass?: string;
	customInputClass?: string;
	label?: string;
	helpText?: string;
	customHelpTextClass?: string;
	value?: string;
	onChange: (value: string) => void;
	placeholder?: string;
	onFocus?: () => void;
	onBlur?: () => void;
	id: string;
	customLabelClass?: string;
	customErrorTextClass?: string;
	disabled?: boolean;
	validations?: any;
	showPasswordToggleIcon?: boolean;
	showErrorOnChange?: boolean;
	validateOnBlur?: boolean;
	customAddonClass?: string;
	showRightIcon?: boolean;
	rightIcon?: JSX.Element | null;
	inputType: 'password' | 'text';
	onAddonClick?: (value?: string) => void;
	customHeight?: number | string;
	autoFocus?: boolean;
	customPasswordIconClass?: string;
}
