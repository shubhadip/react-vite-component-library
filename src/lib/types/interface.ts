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
