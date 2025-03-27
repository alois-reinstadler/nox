import { MediaQuery } from 'svelte/reactivity';

/**
 * Variant	Media query
 * max-sm	@media (width < 40rem) { ... }
 * max-md	@media (width < 48rem) { ... }
 * max-lg	@media (width < 64rem) { ... }
 * max-xl	@media (width < 80rem) { ... }
 * max-2xl	@media (width < 96rem) { ... }
 */

type Breakpoint = keyof typeof TAILWIND_BREAKPOINTS;

const TAILWIND_BREAKPOINTS = {
	sm: 40,
	md: 48,
	lg: 64,
	xl: 80,
	'2xl': 96
};

export class UseBreakpoint extends MediaQuery {
	constructor(breakpoint: Breakpoint) {
		if (!TAILWIND_BREAKPOINTS[breakpoint]) throw new Error(`Invalid breakpoint: ${breakpoint}`);
		super(`max-width: ${TAILWIND_BREAKPOINTS[breakpoint]}rem`);
	}
}
