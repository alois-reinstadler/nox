import { z } from 'zod';

export const employeeSchema = z.object({
	id: z.string(),

	firstName: z.string(),
	lastName: z.string(),

	// work hours
	workHours: z.number(),
	workDays: z.number(),

	// tags
	tags: z.array(z.string()).optional()
});

export const timeSpanSchema = z.object({
	id: z.string().optional(),

	date: z.string(),
	employeeId: z.string(),

	startTime: z.string(),
	endTime: z.string(),
	type: z.enum(['arbeit', 'pause', 'krank', 'urlaub', 'fortbildung'])
});

export const timeRecordSchema = z.object({
	// combined primary key
	employeeId: z.string(),
	date: z.string(),

	// timespans
	workTime: z.array(timeSpanSchema),
	breakTime: z.array(timeSpanSchema)
});

export type Employee = z.infer<typeof employeeSchema>;
export type TimeSpan = z.infer<typeof timeSpanSchema>;
export type TimeRecord = z.infer<typeof timeRecordSchema>;
