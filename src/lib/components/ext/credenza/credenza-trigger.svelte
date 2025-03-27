<script lang="ts">
	import { useCredenza } from './context.svelte.js';
	import type { CredenzaTriggerProps } from './types.js';

	let { children, ...restProps }: CredenzaTriggerProps = $props();

	const context = useCredenza();
	const Credenza = context.component;
</script>

<Credenza.Trigger {...restProps}>
	{@render children?.()}
</Credenza.Trigger>
