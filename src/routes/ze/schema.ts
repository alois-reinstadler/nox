import { z } from 'zod';

export const employeeEntrySchema = z.object({
	date: z.date(),
	employeeId: z.string(),

	startTime: z.string().time().default('07:00'),
	endTime: z.string().time().default('16:00'),
	breakDuration: z.number().int().positive().default(30)
});

export const addEntrySchema = z.object({
	reporterId: z.string(),

	date: z.date(),
	employees: z.array(z.string())
});

export const formSchema = z.object({
	reporterId: z.string(),
	employeeId: z.string(),

	date: z.string(),

	hours: z.number().int().min(0).max(24),
	minutes: z.number().int().min(0).max(59),
	breakDuration: z.number().int().min(0).max(60)
});

// type DateEntry = {
// 	date: string;
// 	employeeEntries: EmployeeEntry[];
// };

// type EmployeeEntry = {
// 	employeeId: EmployeeId;
// 	startTime: string;
// 	endTime: string;
// 	breakDuration: number;
// };

export type FormSchema = typeof formSchema;
