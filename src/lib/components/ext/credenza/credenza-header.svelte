<script lang="ts">
	import { useCredenza } from './context.svelte.js';
	import type { CredenzaHeaderProps } from './types.js';

	let { children, ...restProps }: CredenzaHeaderProps = $props();

	const context = useCredenza();
	const Credenza = context.component;
</script>

<Credenza.Header {...restProps}>
	{@render children?.()}
</Credenza.Header>
