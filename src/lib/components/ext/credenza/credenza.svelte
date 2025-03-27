<script lang="ts">
	import { setCredenza, type CredenzaStateProps } from './context.svelte.js';

	import type { WithElementRef, DialogRootProps } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		open = $bindable(false),
		onOpenChange = () => {},
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & DialogRootProps = $props();

	const context = setCredenza({
		open: () => open,
		setOpen: (value: boolean) => {
			open = value;
			onOpenChange(value);
		}
	});

	const Credenza = context.component;
</script>

<Credenza.Root {...restProps}>
	{@render children?.()}
</Credenza.Root>
