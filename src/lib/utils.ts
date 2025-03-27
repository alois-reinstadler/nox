import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { Theme } from './config/theme';

export const noop = () => {};
export const isBrowser = typeof document !== 'undefined';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function setTheme(config: Theme) {
	if (!isBrowser) return noop;

	document.body.classList.add(`theme-${config.name}`);
	document.body.style.setProperty('--radius', `${config.radius}rem`);

	return () => {
		document.body.classList.remove(`theme-${config.name}`);
	};
}

export { default as autoAnimate } from '@formkit/auto-animate';
export * from '$lib/types';
