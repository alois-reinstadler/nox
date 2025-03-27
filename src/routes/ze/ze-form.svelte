<script lang="ts">
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';

	import * as Form from '$lib/components/ui/form/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Input } from '$lib/components/ui/input/index.js';

	import * as Card from '$lib/components/ui/card/index.js';
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	import { superForm, type SuperValidated, type Infer } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { formSchema, type FormSchema } from './schema';
	import { type EmployeeId, employees } from './data';
	import { Button } from '$lib/components/ui/button';

	import DataTable from './data-table.svelte';
	import DatePicker from './date-picker.svelte';
	import TimePicker from './time-picker.svelte';

	let { data }: { data: { form: SuperValidated<Infer<FormSchema>> } } = $props();

	const form = superForm(data.form, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;

	$effect(() => {
		if ($formData.hours > 24) $formData.hours = 24;
		else if ($formData.hours < 0) $formData.hours = 0;
	});

	let entries = $state<DateEntry[]>([]);

	type DateEntry = {
		date: string;
		employeeEntries: EmployeeEntry[];
	};

	type EmployeeEntry = {
		employeeId: EmployeeId;
		startTime: string;
		endTime: string;
		breakDuration: number;
	};

	let reporterId = $state<EmployeeId | null>('alois.reinstadler');

	function formatDate(date: string) {
		return new Intl.DateTimeFormat('de-DE', { dateStyle: 'full' }).format(new Date(date));
	}

	const hours = Array.from({ length: 12 }, (_, i) => i + 1);
	const minutes = [15, 30, 45];

	function formatPlural(value: number, singular: string, plural: string) {
		const suffix = value > 1 ? plural : singular;
		return `${value} ${suffix}`;
	}
</script>

<div class="flex w-full flex-wrap gap-8">
	<form method="POST" class="flex flex-col gap-4" use:enhance>
		<TimePicker />
		<div class="flex flex-col gap-4">
			<Form.Field {form} name="date" class="flex flex-col">
				<div class="flex flex-col gap-2.5">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Date</Form.Label>
							<DatePicker />
						{/snippet}
					</Form.Control>
				</div>
				<Form.Description>This is your public display name.</Form.Description>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="employeeId">
				<div class="flex flex-col gap-2.5">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Employee</Form.Label>
							<Select.Root {...props} type="single" bind:value={$formData.employeeId}>
								<Select.Trigger>
									<span class="pr-1">
										{#if $formData.employeeId}
											{@const selected = employees.find((e) => e.id === $formData.employeeId)}
											{selected?.firstName}
											{selected?.lastName}
										{:else}
											Mitarbeiter
										{/if}
									</span>
								</Select.Trigger>
								<Select.Content class="font-mono">
									{#each employees as employee (employee.id)}
										<Select.Item value={employee.id} label={employee.firstName}
											>{employee.firstName} {employee.lastName}</Select.Item
										>
									{/each}
								</Select.Content>
							</Select.Root>
						{/snippet}
					</Form.Control>
				</div>
				<Form.Description>This is your public display name.</Form.Description>
				<Form.FieldErrors />
			</Form.Field>
		</div>
		<div class="flex gap-4">
			<Form.Field {form} name="hours">
				<Form.Control>
					{#snippet children({ props })}
						<div class="flex flex-col gap-2.5">
							<Form.Label>Stunden</Form.Label>
							<Input
								{...props}
								bind:value={$formData.hours}
								type="number"
								min={0}
								max={24}
								oninput={(e) => {
									const value = parseInt((e.target as HTMLInputElement).value);

									if (value > 24) (e.target as HTMLInputElement).value = '24';
									else if (value < 0) (e.target as HTMLInputElement).value = '0';
								}}
							/>
							<!-- <Select.Root {...props} type="single" bind:value={$formData.employeeId}>
								<Select.Trigger>
									<span class="pr-1">
										{#if $formData.employeeId}
											{@const selected = employees.find((e) => e.id === $formData.employeeId)}
											{selected?.firstName}
											{selected?.lastName}
										{:else}
											Stunden
										{/if}
									</span>
								</Select.Trigger>
								<Select.Content class="font-mono">
									{#each hours as hour (hour)}
										<Select.Item
											value={hour.toString()}
											label={formatPlural(hour, 'Stunde', 'Stunden')}>{hour}</Select.Item
										>
									{/each}
								</Select.Content>
							</Select.Root> -->
						</div>
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="minutes">
				<Form.Control>
					{#snippet children({ props })}
						<div class="flex flex-col gap-2.5">
							<Form.Label>Minuten</Form.Label>
							<!-- <Input {...props} bind:value={$formData.minutes} type="number" /> -->
							<Select.Root {...props} type="single" bind:value={$formData.employeeId}>
								<Select.Trigger>
									<span class="pr-1">
										{#if $formData.employeeId}
											{@const selected = employees.find((e) => e.id === $formData.employeeId)}
											{selected?.firstName}
											{selected?.lastName}
										{:else}
											Minuten
										{/if}
									</span>
								</Select.Trigger>
								<Select.Content class="font-mono">
									{#each minutes as minute, i (minute)}
										<Select.Item
											value={minute.toString()}
											label={formatPlural(minute, 'Minute', 'Minuten')}>{minute}</Select.Item
										>
									{/each}
								</Select.Content>
							</Select.Root>
						</div>
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="breakDuration">
				<Form.Control>
					{#snippet children({ props })}
						<div class="flex flex-col gap-2.5">
							<Form.Label>Pause</Form.Label>
							<!-- <Input {...props} bind:value={$formData.breakDuration} type="number" /> -->
							<Select.Root {...props} type="single" bind:value={$formData.employeeId}>
								<Select.Trigger>
									<span class="pr-1">
										{#if $formData.employeeId}
											{@const selected = employees.find((e) => e.id === $formData.employeeId)}
											{selected?.firstName}
											{selected?.lastName}
										{:else}
											Minuten
										{/if}
									</span>
								</Select.Trigger>
								<Select.Content class="font-mono">
									{#each minutes as minute (minute)}
										<Select.Item
											value={minute.toString()}
											label={formatPlural(minute, 'Minute', 'Minuten')}>{minute}</Select.Item
										>
									{/each}
								</Select.Content>
							</Select.Root>
						</div>
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<Form.Button>Submit</Form.Button>
	</form>

	<Card.Root class="flex grow items-center justify-center">
		{#if entries.length > 0}
			<Card.Header>
				<Card.Title>Card Title</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Header>
			<Card.Content>
				<Accordion.Root type="single" class="w-full sm:max-w-[70%]">
					{#each entries as entry, i (entry.date)}
						<Accordion.Item value={entry.date}>
							<Accordion.Trigger>{formatDate(entry.date)}</Accordion.Trigger>
							<Accordion.Content>
								{#each entry.employeeEntries as employeeEntry}
									<p>{employeeEntry.employeeId}</p>
								{/each}
							</Accordion.Content>
						</Accordion.Item>
					{/each}
				</Accordion.Root>
			</Card.Content>
			<Card.Footer>
				<p>Card Footer</p>
			</Card.Footer>
		{:else}
			<!-- <DataTable {data} {columns} /> -->
			<Card.Content>
				<div class="flex flex-col gap-2 text-center">
					<h2 class="text-2xl font-bold tracking-tight">No data to display</h2>
					<p class="text-gray-500 dark:text-gray-400">
						It looks like there's no data available yet. Try adding some new items.
					</p>
				</div>
			</Card.Content>
		{/if}
	</Card.Root>
</div>
