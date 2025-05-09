<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	const areas = [
		{
			value: 'team',
			label: 'Team'
		},
		{
			value: 'billing',
			label: 'Billing'
		},
		{
			value: 'account',
			label: 'Account'
		},
		{
			value: 'deployments',
			label: 'Deployments'
		},
		{
			value: 'support',
			label: 'Support'
		}
	];

	const securityLevels = [
		{
			value: '1',
			label: 'Severity 1 (Highest)'
		},
		{
			value: '2',
			label: 'Severity 2'
		},
		{
			value: '3',
			label: 'Severity 3'
		},
		{
			value: '4',
			label: 'Severity 4 (Lowest)'
		}
	];

	let areaValue = $state(areas[1].value);
	let securityValue = $state(securityLevels[1].value);

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<Card.Root class={cn('max-w-sm', className)} bind:ref>
	<Card.Header>
		<Card.Title>Report an issue</Card.Title>
		<Card.Description>What area are you having problems with?</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-6">
		<div class="grid grid-cols-2 gap-4">
			<div class="grid gap-2">
				<Label for="area">Area</Label>
				<Select.Root type="single" bind:value={areaValue}>
					<Select.Trigger id="area">Select</Select.Trigger>
					<Select.Content>
						{#each areas as area}
							<Select.Item value={area.value} label={area.label}>{area.label}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
			<div class="grid gap-2">
				<Label for="security-level">Security Level</Label>
				<Select.Root type="single" bind:value={securityValue}>
					<Select.Trigger id="security-level" class="line-clamp-1 flex w-[160px] truncate">
						Select level
					</Select.Trigger>
					<Select.Content>
						{#each securityLevels as level}
							<Select.Item value={level.value} label={level.label}>{level.label}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
		</div>
		<div class="grid gap-2">
			<Label for="subject">Subject</Label>
			<Input id="subject" placeholder="I need help with..." />
		</div>
		<div class="grid gap-2">
			<Label for="description">Description</Label>
			<Textarea
				id="description"
				placeholder="Please include all information relevant to your issue."
			/>
		</div>
	</Card.Content>
	<Card.Footer class="justify-between space-x-2">
		<Button variant="ghost">Cancel</Button>
		<Button>Submit</Button>
	</Card.Footer>
</Card.Root>
