// import { fade, type TransitionConfig } from 'svelte/transition';

// export type Animation<Options = unknown> = (
// 	node: HTMLElement,
// 	options: Options
// ) => TransitionConfig;

// export class UseAnimation<T extends Animation> {
// 	public ref = $state<HTMLElement | null>(null);
// 	public animation = $state<TransitionConfig | null>(null);

// 	public options = $state<AutoAnimateOptions | AutoAnimationPlugin | undefined>(undefined);
// 	public controller = $derived(this.ref ? autoAnimate(this.ref, this.options) : null);

// 	public transition: TransitionConfig;
// 	public in: TransitionConfig;
// 	public out: TransitionConfig;

// 	constructor(options?: AutoAnimateOptions | AutoAnimationPlugin) {
// 		this.options = options;

// 		$effect(() => {
// 			if (!this.controller) return;
// 			return this.controller.destroy;
// 		});
// 	}
// }
