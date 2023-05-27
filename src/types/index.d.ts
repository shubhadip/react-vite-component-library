import { ButtonThemes, AppDialogVariant } from './enums';
import { IUnityBody, IButtonProps } from './interface';

export = ReactViteComponentLibrary;
export as namespace ReactViteComponentLibrary;

declare namespace ReactViteComponentLibrary {
	export const AppButton: (props: IButtonProps) => JSX.Element;
	export {
		ButtonThemes,
		AppDialogVariant,
		IUnityBody,
		IButtonProps
	}
}
