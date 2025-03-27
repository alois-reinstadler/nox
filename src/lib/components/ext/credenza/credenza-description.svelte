<script lang="ts">
	import { useCredenza } from './context.svelte.js';
	import type { CredenzaDescriptionProps } from './types.js';

	let { children, ...restProps }: CredenzaDescriptionProps = $props();

	const context = useCredenza();
	const Credenza = context.component;
</script>

<Credenza.Description {...restProps}>
	{@render children?.()}
</Credenza.Description>
