<script lang="ts">
	import { DateFormatter, type DateValue, getLocalTimeZone, today } from '@internationalized/date';

	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';

	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils.js';

	import CalendarIcon from '@lucide/svelte/icons/calendar';

	const currentDay = today(getLocalTimeZone());
	const df = new DateFormatter('de-AT', {
		dateStyle: 'long'
	});

	let {
		value = $bindable(),
		parsedValue = $bindable()
	}: {
		value?: DateValue;
		parsedValue?: string;
	} = $props();

	const items = [
		{ label: 'Heute', value: currentDay },
		{ label: 'Gestern', value: currentDay.subtract({ days: 1 }) }
	];

	$effect(() => {
		if (value) {
			parsedValue = df.format(value.toDate(getLocalTimeZone()));
		}
	});

	const inputLabel = $derived(value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date');
</script>

<Popover.Root>
	<Popover.Trigger
		class={cn(
			buttonVariants({
				variant: 'outline',
				class: 'justify-start text-left font-normal'
			})
		)}
	>
		{inputLabel}
		<CalendarIcon class="ml-auto size-4" />
	</Popover.Trigger>
	<Popover.Content class="flex w-auto flex-col space-y-2 p-2">
		<div class="">
			<Calendar type="single" bind:value />
		</div>
		<div class="flex flex-wrap gap-2">
			{#each items as item (item.value)}
				<Button
					variant="outline"
					class="flex-1"
					onclick={() => {
						value = item.value;
					}}>{item.label}</Button
				>
			{/each}
		</div>
	</Popover.Content>
</Popover.Root>
