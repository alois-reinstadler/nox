<script lang="ts">
	import { useCredenza } from './context.svelte.js';
	import type { CredenzaCloseProps } from './types.js';

	let { children, ...restProps }: CredenzaCloseProps = $props();

	const context = useCredenza();
	const Credenza = context.component;
</script>

<Credenza.Close {...restProps}>
	{@render children?.()}
</Credenza.Close>
