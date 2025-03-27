import type { ColumnDef } from '@tanstack/table-core';
import type { Employee } from './schema';

export const columns: ColumnDef<Employee>[] = [
	{
		accessorKey: 'firstName',
		header: 'Vorname'
	},
	{
		accessorKey: 'lastName',
		header: 'Nachname'
	},
	{
		accessorKey: 'workHours',
		header: 'Arbeitsstunden'
	},
	{
		accessorKey: 'workDays',
		header: 'Arbeitstage'
	},
	{
		accessorKey: 'tags',
		header: 'Tags'
	}
];
