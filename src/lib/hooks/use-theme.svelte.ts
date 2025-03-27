import { defaultTheme, type Theme } from '$lib/config/theme';
import { browser } from '$app/environment';

export type UseThemeOptions = {
	ref?: HTMLElement | null;
	theme?: Theme;
};

export class UseTheme {
	public ref = $state<HTMLElement | null | undefined>();
	public current = $state<Theme>(defaultTheme);

	#element = $derived(this.ref ?? (browser ? document.body : null));

	constructor(options?: UseThemeOptions) {
		this.ref = options?.ref;
		this.current = options?.theme ?? defaultTheme;

		$effect(() => {
			if (!this.#element) return;

			this.#element.classList.add(`theme-${this.current.name}`);
			this.#element.style.setProperty('--radius', `${this.current.radius}rem`);

			return () => {
				if (!this.#element) return;
				this.#element.classList.remove(`theme-${this.current.name}`);
			};
		});
	}
}
