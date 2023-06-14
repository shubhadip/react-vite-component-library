import { ButtonThemes, AppDialogVariant } from './types/enums';
import { IUnityBody, IButtonProps, ITextBoxProps, TextInputValidationHandle, InputProps } from './types/interface';


export = ReactViteComponentLibrary;
export as namespace ReactViteComponentLibrary;

declare namespace ReactViteComponentLibrary {
	export const AppButton: (props: IButtonProps) => JSX.Element;
	export const AppTextBox: (props: ITextBoxProps) => JSX.Element;
	export const Eye: () => JSX.Element;
	export const TailessArrow: () => JSX.Element;

	export {
		ButtonThemes,
		AppDialogVariant,
		IUnityBody,
		IButtonProps,
		ITextBoxProps,
		TextInputValidationHandle,
		InputProps
	}
}
