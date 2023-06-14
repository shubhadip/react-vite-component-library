export const TailessArrow = ({
	customStroke,
	customClass,
}: {
	customStroke?: string;
	customClass?: string;
}): JSX.Element => {
	const stroke = customStroke || 'black';
	return (
		<svg
			width="16"
			height="10"
			viewBox="0 0 16 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={customClass}
		>
			<path
				d="M15 1.5L8 8.5L1 1.5"
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Eye = ({ color }: { color?: string }): JSX.Element => {
	const customColor = color || '#597DF2';
	return (
		<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="0.5" y="0.5" width="27" height="27" rx="9.5" fill="#F7F9FF" />
			<path
				d="M16.3866 14C16.3866 15.32 15.3199 16.3867 13.9999 16.3867C12.6799 16.3867 11.6133 15.32 11.6133 14C11.6133 12.68 12.6799 11.6133 13.9999 11.6133C15.3199 11.6133 16.3866 12.68 16.3866 14Z"
				stroke={customColor}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.9999 19.5133C16.3532 19.5133 18.5466 18.1267 20.0732 15.7267C20.6732 14.7867 20.6732 13.2067 20.0732 12.2667C18.5466 9.86666 16.3532 8.48 13.9999 8.48C11.6466 8.48 9.45323 9.86666 7.92656 12.2667C7.32656 13.2067 7.32656 14.7867 7.92656 15.7267C9.45323 18.1267 11.6466 19.5133 13.9999 19.5133Z"
				stroke={customColor}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			{/* <rect x="0.5" y="0.5" width="27" height="27" rx="9.5" stroke={customColor} /> */}
		</svg>
	);
};
