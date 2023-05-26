import { ButtonThemes } from './../../shared/enums';
import styles from './styles.module.css';

interface IProps {
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

const ThemeMap = {
	primary: styles.primary,
	critical: styles.critical,
	link: styles.link,
	disable: styles.disable,
};

export const AppButton = (props: IProps): JSX.Element => {
	const handleClick = (): void => {
		if (props.onClick) {
			props.onClick();
		}
	};

	const StyleClass = ThemeMap[props.theme] || ThemeMap.primary;

	const RenderTitle = ({ title }: { title?: string }): JSX.Element | null => {
		return props.title ? (
			<p className={[styles.title, props.customTitleClass].join(' ')}>{title}</p>
		) : null;
	};

	const widthValue = props.customWidth || '110px';
	const heightValue = props.customHeight || '48px';

	return (
		<div
			onClick={props.isLoading ? undefined : handleClick}
			className={[StyleClass, styles.btnClass, props.customBtnClass].join(' ')}
			style={{ width: widthValue, height: heightValue }}
			role="button"
		>
			{props.showLeftIcon ? (
				<span className={[styles.lefticonClass, props.customLeftIconClass].join(' ')}>
					{props.leftIcon}
				</span>
			) : null}
			{props.isLoading ? (
				<span className="text-base w-full text-center text-white">{`Loading ...`}</span>
			) : (
				<RenderTitle title={props.title} />
			)}
			{props.showRightIcon ? (
				<span className={[styles.righticonClass, props.customRightIconClass].join(' ')}>
					{props.rightIcon}
				</span>
			) : null}
		</div>
	);
};
