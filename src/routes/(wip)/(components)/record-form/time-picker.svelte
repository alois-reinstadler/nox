<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import type { ComponentProps, Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		value?: string | undefined;
		type: 'hours' | 'minutes';
	};

	let { value = $bindable(), type, children, ...restProps }: Props = $props();

	const hours = Array.from({ length: 12 }, (_, i) => i + 1);
	const minutes = [15, 30, 45];

	const items = type === 'hours' ? hours : minutes;
</script>

<Select.Root bind:value type="single" {...restProps}>
	<Select.Trigger>
		{@render children?.()}
	</Select.Trigger>
	<Select.Content>
		{#each items as item (item)}
			<Select.Item value={item.toString()} label={item.toString()}>{item}</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
