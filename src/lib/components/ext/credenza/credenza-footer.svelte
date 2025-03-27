<script lang="ts">
	import { useCredenza } from './context.svelte.js';
	import type { CredenzaFooterProps } from './types.js';

	let { children, ...restProps }: CredenzaFooterProps = $props();

	const context = useCredenza();
	const Credenza = context.component;
</script>

<Credenza.Footer {...restProps}>
	{@render children?.()}
</Credenza.Footer>
