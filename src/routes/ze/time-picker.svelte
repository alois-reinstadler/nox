<script lang="ts">
	import ClockIcon from '@lucide/svelte/icons/clock';
	import { DateFormatter, type DateValue, getLocalTimeZone, today } from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';

	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	const currentDay = today(getLocalTimeZone());
	const df = new DateFormatter('de-AT', {
		dateStyle: 'long'
	});

	const hours = Array.from({ length: 24 }, (_, i) => i + 1);
	const minutes = Array.from({ length: 12 }, (_, i) => (i + 1) * 5);

	let value: DateValue | undefined = $state(currentDay);
	const valueString = $derived(value ? df.format(value.toDate(getLocalTimeZone())) : '');

	const items = [
		{ label: 'Heute', value: currentDay },
		{ label: 'Gestern', value: currentDay.subtract({ days: 1 }) }
	];

	const inputLabel = $derived(value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date');
</script>

<Popover.Root>
	<Popover.Trigger
		class={cn(
			buttonVariants({
				variant: 'outline',
				class: 'justify-start text-left font-normal'
			}),
			!value && 'text-muted-foreground'
		)}
	>
		{inputLabel}
		<ClockIcon class="ml-auto size-4" />
	</Popover.Trigger>
	<Popover.Content class="flex w-auto flex-col space-y-2 overflow-hidden p-2">
		<div class="flex h-40 gap-2">
			<div>
				<p class="text-muted-foreground px-2 py-1 text-center text-sm">Stunde</p>
				<ScrollArea class="mr-1 flex h-full flex-col" type="always">
					{#each hours as hour}
						<Button variant="ghost" size="icon" class="block h-9 w-9">{hour}</Button>
					{/each}
				</ScrollArea>
			</div>
			<div>
				<p class="text-muted-foreground px-2 py-1 text-center text-sm">Minute</p>
				<ScrollArea class="mr-1 flex h-full flex-col" type="always">
					{#each minutes as minute}
						<Button variant="ghost" size="icon" class="block h-9 w-9">{minute}</Button>
					{/each}
				</ScrollArea>
			</div>
		</div></Popover.Content
	>
</Popover.Root>
