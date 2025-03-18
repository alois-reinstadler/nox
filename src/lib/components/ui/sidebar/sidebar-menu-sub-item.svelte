<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import type { WithElementRef } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		child,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLLIElement>> & {
		child?: Snippet<[{ props: HTMLAttributes<HTMLLIElement> }]>;
	} = $props();

	const attrs = $derived({
		class: cn('hover:text-foreground transition-colors', className),
		'data-sidebar': 'menu-sub-item', // add data-sidebar attribute to the element
		...restProps
	});
</script>

{#if child}
	{@render child({ props: attrs })}
{:else}
	<li bind:this={ref} data-sidebar="menu-sub-item" {...restProps}>
		{@render children?.()}
	</li>
{/if}
