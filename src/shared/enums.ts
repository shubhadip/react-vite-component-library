export enum ButtonThemes {
	primary = 'primary',
	critical = 'critical',
	link = 'link',
	disable = 'disable',
}

export enum AppDialogVariant {
	/**
	 * Center aligned on mobile and desktop.
	 * Width: 100% till max-width.
	 * Height: depends on content.
	 */
	CENTER = 'center',

	/**
	 * Occupies full screen on mobile and desktop.
	 * Width: 100% always.
	 * Height: 100% always.
	 */
	FULLSCREEN = 'fullscreen',

	/**
	 * Bottom aligned on mobile.
	 * Width: 100%.
	 * Height: depends on content till max-height.
	 */
	// MOBILE_BOTTOM_AUTO = 'mobile-bottom-auto',

	/**
	 * Bottom aligned on mobile.
	 * Width: 100%.
	 * Height: Max-height as per design always.
	 */
	// MOBILE_BOTTOM_MAX = 'mobile-bottom-max',

	/**
	 * Right aligned on desktop.
	 * Width: Fixed width as per design.
	 * Height: 100%.
	 */
	DESKTOP_RIGHT = 'desktop-right',
}
