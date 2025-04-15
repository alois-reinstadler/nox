<script lang="ts" module>
	import { createRawSnippet } from 'svelte';
	import { renderSnippet } from '$lib/components/ui/data-table/index.js';

	import type { ColumnDef } from '@tanstack/table-core';

	export const employees = [
		{
			id: 'mert.celik',
			firstName: 'Mert',
			lastName: 'Celik',
			workHours: 40,
			workDays: 5,
			tags: ['Spengler', 'Abdichter']
		},
		{
			id: 'goekhan.dueger',
			firstName: 'Gökhan',
			lastName: 'Düger',
			workHours: 40,
			workDays: 5,
			tags: ['Spengler']
		},
		{
			id: 'erdinc.uencuecue',
			firstName: 'Erdinc',
			lastName: 'Üncücü',
			workHours: 40,
			workDays: 5,
			tags: ['Spengler', 'Abdichter', 'Lehrling']
		},
		{
			id: 'batuhan.kilic',
			firstName: 'Batuhan',
			lastName: 'Kilic',
			workHours: 40,
			workDays: 5,
			tags: ['Spengler', 'Abdichter', 'Lehrling']
		},
		{
			id: 'batuhan.karapence',
			firstName: 'Batuhan',
			lastName: 'Karapence',
			workHours: 40,
			workDays: 5,
			tags: ['Spengler']
		},
		{
			id: 'bilal.kilic',
			firstName: 'Bilal',
			lastName: 'Kilic',
			workHours: 40,
			workDays: 5,
			tags: ['Spengler', 'Abdichter']
		},
		{
			id: 'mathias.wolf',
			firstName: 'Mathias',
			lastName: 'Wolf',
			workHours: 40,
			workDays: 5,
			tags: ['Abdichter']
		},
		{
			id: 'marc.koell',
			firstName: 'Marc',
			lastName: 'Köll',
			workHours: 40,
			workDays: 5,
			tags: ['Abdichter']
		},
		{
			id: 'tiyara.beiler',
			firstName: 'Tiyara',
			lastName: 'Beiler',
			workHours: 40,
			workDays: 5,
			tags: ['Spengler', 'Abdichter', 'Lehrling']
		},
		{
			id: 'oliver.ferkant',
			firstName: 'Oliver',
			lastName: 'Ferkant',
			workHours: 40,
			workDays: 5,
			tags: ['Abdichter']
		},
		{
			id: 'alois.reinstadler',
			firstName: 'Alois',
			lastName: 'Reinstadler',
			workHours: 20,
			workDays: 4,
			tags: ['Büro']
		}
	] as const;

	export type EmployeeId = (typeof employees)[number]['id'];
	export type EmployeeTag = (typeof employees)[number]['tags'][number];

	export type ReportEntry = {
		employeeId: EmployeeId;
		date: string;

		workStart: string;
		workEnd: string;

		breakDuration: number;
	};

	export type ReportEntryList = Record<string, ReportEntry[]>;

	export const columns: ColumnDef<ReportEntry>[] = [
		{
			accessorKey: 'amount',
			header: () => {
				const amountHeaderSnippet = createRawSnippet(() => ({
					render: () => `<div class="text-right">Amount</div>`
				}));
				return renderSnippet(amountHeaderSnippet, '');
			},
			cell: ({ row }) => {
				const formatter = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD'
				});

				const amountCellSnippet = createRawSnippet<[string]>((getAmount) => {
					const amount = getAmount();
					return {
						render: () => `<div class="text-right font-medium">${amount}</div>`
					};
				});

				return renderSnippet(
					amountCellSnippet,
					formatter.format(parseFloat(row.getValue('amount')))
				);
			}
		}
	];
</script>

<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Button } from '$components/ui/button';

	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	import DatePicker from './date-picker.svelte';

	import { DateFormatter, type DateValue, getLocalTimeZone, today } from '@internationalized/date';

	const currentDay = today(getLocalTimeZone());
	const df = new DateFormatter('de-AT', {
		dateStyle: 'long'
	});

	let workingHours = $state();
	let workingMinutes = $state();
	let breakDuration = $state();

	let selectedDate = $state<DateValue>();
	let selectedEmployee = $state<EmployeeId>();

	let reportBy = $state<EmployeeId>('alois.reinstadler');
	let reportEntries = $state<ReportEntry[]>([]);

	let reportEntryList = $derived.by(() => {
		let list: ReportEntryList = {};

		for (const entry of reportEntries) {
			list[entry.date] = [...(list[entry.date] || []), entry];
		}

		return Object.entries(list);
	});

	type LimitOptions = Record<'min' | 'max', number>;

	function limitHandler({ min, max }: LimitOptions) {
		return (e: Event) => {
			if (!e.target) return;

			const target = e.target as HTMLInputElement;
			const value = parseFloat(target.value);

			if (value > max) target.value = max.toString() + 'min';
			else if (value < min) target.value = min.toString() + 'min';
		};
	}

	function formatDate(date: string) {
		return df.format(new Date(date));
	}

	function addReportEntry() {
		console.log(selectedDate, selectedEmployee);

		if (!selectedDate || !selectedEmployee) return;

		reportEntries.push(
			structuredClone({
				employeeId: selectedEmployee,
				date: selectedDate.toString(),
				workStart: '',
				workEnd: '',
				breakDuration: 0
			})
		);
	}
</script>

<div class="flex w-full gap-8">
	<div class="flex flex-col gap-8">
		<DatePicker bind:value={selectedDate} />

		<div class="flex gap-4">
			<div class="flex w-full flex-col gap-2">
				<Label>Mitarbeiter</Label>
				<Select.Root type="single" bind:value={selectedEmployee}>
					<Select.Trigger>
						<span class="pr-1">
							{#if selectedEmployee}
								{@const selected = employees.find((e) => e.id === selectedEmployee)}
								{selected?.firstName}
								{selected?.lastName}
							{:else}
								Mitarbeiter auswählen
							{/if}
						</span>
					</Select.Trigger>
					<Select.Content>
						{#each employees as employee (employee.id)}
							<Select.Item value={employee.id} label={employee.firstName}
								>{employee.firstName} {employee.lastName}</Select.Item
							>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
		</div>
		<div class="flex gap-4">
			<div class="flex flex-1 flex-col gap-2">
				<Label>Stunden</Label>
				<Input
					bind:value={workingHours}
					placeholder="std"
					type="number"
					min={0}
					max={24}
					oninput={limitHandler({ min: 0, max: 24 })}
				/>
			</div>
			<div class="flex flex-1 flex-col gap-2">
				<Label>Minuten</Label>
				<Input
					bind:value={workingMinutes}
					placeholder="min"
					type="number"
					min={0}
					max={59}
					oninput={limitHandler({ min: 0, max: 59 })}
				/>
			</div>
			<div class="flex flex-1 flex-col gap-2">
				<Label>Pause</Label>
				<Input
					bind:value={breakDuration}
					placeholder="min"
					type="number"
					min={0}
					max={24}
					oninput={limitHandler({ min: 0, max: 24 })}
				/>
			</div>
		</div>
		<Button onclick={addReportEntry}>Speichern</Button>
	</div>
	<Card.Root class="surface-glass surface-blur flex flex-1 items-center justify-start">
		{#if reportEntries.length > 0}
			<Card.Content class="w-full">
				<Accordion.Root type="multiple" class="w-full sm:max-w-[70%]">
					{#each reportEntryList as [date, entries], i (date)}
						<Accordion.Item class="border-b" value={formatDate(date)}>
							<Accordion.Trigger>{formatDate(date)}</Accordion.Trigger>
							<Accordion.Content>
								{#each entries as entry (formatDate(date) + entry.employeeId)}
									<p>{entry.employeeId}</p>
								{/each}
							</Accordion.Content>
						</Accordion.Item>
					{/each}
				</Accordion.Root>
			</Card.Content>
		{:else}
			<!-- <DataTable {data} {columns} /> -->
			<Card.Content class="w-full">
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
