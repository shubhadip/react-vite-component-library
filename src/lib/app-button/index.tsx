import { IButtonProps } from '../../types/interface';
import styles from './styles.module.css';

const ThemeMap = {
	primary: styles.primary,
	critical: styles.critical,
	link: styles.link,
	disable: styles.disable,
};

export const AppButton = (props: IButtonProps): JSX.Element => {
	const handleClick = (): void => {
		if (props.onClick) {
			props.onClick();
		}
	};

	const StyleClass = ThemeMap[props.theme] || ThemeMap.primary;

	const RenderTitle = ({
		title,
		customTitleClass,
	}: {
		title?: string;
		customTitleClass?: string;
	}): JSX.Element | null => {
		return props.title ? (
			<p className={[styles.title, customTitleClass].join(' ')}>{title}</p>
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
				<RenderTitle title={props.title} customTitleClass={props.customTitleClass} />
			)}
			{props.showRightIcon ? (
				<span className={[styles.righticonClass, props.customRightIconClass].join(' ')}>
					{props.rightIcon}
				</span>
			) : null}
		</div>
	);
};
