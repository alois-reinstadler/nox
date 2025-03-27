<script lang="ts">
	import { useCredenza } from './context.svelte.js';
	import type { CredenzaContentProps } from './types.js';

	let { children, ...restProps }: CredenzaContentProps = $props();

	const context = useCredenza();
	const Credenza = context.component;
</script>

<Credenza.Content {...restProps}>
	{@render children?.()}
</Credenza.Content>
