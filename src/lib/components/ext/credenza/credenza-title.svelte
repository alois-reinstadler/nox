<script lang="ts">
	import { useCredenza } from './context.svelte.js';
	import type { DialogTitleProps } from 'bits-ui';

	let { children, ...restProps }: DialogTitleProps = $props();

	const context = useCredenza();
	const Credenza = context.component;
</script>

<Credenza.Title {...restProps}>
	{@render children?.()}
</Credenza.Title>
