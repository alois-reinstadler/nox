<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		showRadialGradient = true,
		class: className,
		children,
		...restProps
	}: AuroraBackgroundProps = $props();

	type AuroraBackgroundProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		showRadialGradient?: boolean;
	};

	let auroraClasses = cn([
		'pointer-events-none absolute -inset-[10px]',
		'opacity-50 blur-[10px] invert filter will-change-transform',
		'[background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%]',
		'after:absolute after:inset-0 after:mix-blend-difference after:animate-aurora',
		'after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed]',
		'after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]',
		'[--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]',
		showRadialGradient &&
			'[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]'
	]);
</script>

<div
	bind:this={ref}
	class={cn('justify-cente relative flex h-[100vh] flex-col items-center', className)}
	{...restProps}
>
	<div class="absolute inset-0 -z-10 overflow-hidden">
		<div class={auroraClasses}></div>
	</div>

	<div
		class="bg-background absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,transparent_0%,var(--background)_100%)]"
	></div>
	<div class="absolute inset-0">
		<div class="from-background/0 to-background/100 absolute inset-0 bg-gradient-to-b" />
	</div>
	{@render children?.()}
</div>
