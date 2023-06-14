import { validationHandler } from '../shared/validations';
import { useState, forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import styles from './styles.module.css';
import { ITextBoxProps, InputProps, TextInputValidationHandle } from '../types/interface';
import { TailessArrow, Eye } from '../svgicons';

type PasswordType = 'password' | 'text';

export const AppTextBox = forwardRef<InputProps | TextInputValidationHandle, ITextBoxProps>(
	(props: ITextBoxProps, ref: any): JSX.Element => {
		const [error, setError] = useState<string | null>(null);
		const [value, setValue] = useState<string>(props.value || '');
		const [type, setType] = useState<PasswordType>(props.inputType || 'text');
		const inputRef = useRef<HTMLInputElement | null>(null);

		useEffect(() => {
			setValue(props.value || '');
			return () => {
				setValue('');
			};
		}, [props.value]);

		useImperativeHandle(ref, () => {
			return {
				focus(): void {
					(inputRef?.current as any).focus();
				},
				isValid(isShowError?: boolean): boolean {
					if (isShowError) {
						const validationObj = validationHandler(value, props.validations);
						if (!validationObj.isValid) {
							setError(validationObj.message);
						}
					}
					return !!(value && !error);
				},
				getValue(): string | null | undefined {
					return value;
				},
				getId(): string {
					return props.id;
				},
			};
		});

		const handleChange = (inputValue: string): void => {
			if (props.showErrorOnChange) {
				const validationObj = validationHandler(inputValue, props.validations);
				if (!validationObj.isValid) {
					setError(validationObj.message);
				} else {
					setError(null);
				}
			}
			setValue(inputValue);
			if (props.onChange) {
				props.onChange(inputValue);
			}
		};

		const handleFocus = (): void => {
			if (error) {
				setError(null);
			}
			if (props.onFocus) {
				props.onFocus();
			}
		};

		const handleBlur = (): void => {
			if (props.validateOnBlur) {
				const validationObj = validationHandler(value, props.validations);
				if (!validationObj.isValid) {
					setError(validationObj.message);
				}
			}
			if (props.onBlur) {
				props.onBlur();
			}
		};

		const togglePasswordType = (): void => {
			if (type === 'password') {
				setType('text');
			} else {
				setType('password');
			}
		};

		const handleAddonClick = (): void => {
			if (props.onAddonClick) {
				props.onAddonClick(value);
			}
		};
		const StyleClass = error ? styles.critical : '';
		const RightAddon = props.rightIcon || <TailessArrow />;
		const heightValue = props.customHeight || '64px';

		return (
			<div
				className={[StyleClass, styles.containerClass, props.customContainerClass, 'relative'].join(
					' '
				)}
			>
				{props.label ? (
					<label
						className={[styles.labelClass, props.customLabelClass].join('')}
						htmlFor={props.id}
					>
						{props.label}
					</label>
				) : null}
				<input
					ref={inputRef}
					id={props.id}
					type={type === 'password' ? 'password' : 'text'}
					value={value}
					onChange={(e): void => handleChange(e.target.value)}
					className={[styles.inputClass, props.customInputClass].join(' ')}
					placeholder={props.placeholder}
					onFocus={handleFocus}
					onBlur={handleBlur}
					disabled={props.disabled}
					style={{ height: heightValue }}
					autoFocus={props.autoFocus}
					autoComplete="off"
				/>
				{props.showPasswordToggleIcon ? (
					<span
						className={[
							'absolute top-10 right-6 cursor-pointer',
							props.customPasswordIconClass,
						].join(' ')}
						onClick={togglePasswordType}
					>
						<Eye color={'#4A6D9C'} />
					</span>
				) : null}
				{props.showRightIcon ? (
					<div
						onClick={handleAddonClick}
						className={[
							'absolute top-0 right-6 cursor-pointer -mt-2 w-5 h-5',
							props.customAddonClass,
						].join(' ')}
					>
						{RightAddon}
					</div>
				) : null}
				{props.helpText ? (
					<span className={[styles.helpTextClass, props.customHelpTextClass].join(' ')}>
						{props.helpText}
					</span>
				) : null}
				{error ? (
					<div className={[styles.errorTextClass, props.customErrorTextClass].join(' ')}>
						{error}
					</div>
				) : null}
			</div>
		);
	}
);
