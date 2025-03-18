import {
	default as autoAnimate,
	type AutoAnimateOptions,
	type AutoAnimationPlugin,
	type AnimationController
} from '@formkit/auto-animate';

export class AutoAnimateRef {
	public ref = $state<HTMLElement | null>(null);
	public options = $state<AutoAnimateOptions | AutoAnimationPlugin | undefined>(undefined);
	public controller = $derived(this.ref ? autoAnimate(this.ref, this.options) : null);

	constructor(ref: HTMLElement, options?: AutoAnimateOptions | AutoAnimationPlugin) {
		this.ref = ref;
		this.options = options;

		$effect(() => {
			if (!this.controller) return;
			return this.controller.destroy;
		});
	}
}

export { autoAnimate, type AutoAnimateOptions, type AutoAnimationPlugin, type AnimationController };
