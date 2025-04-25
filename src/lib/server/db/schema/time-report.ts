import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { user } from './user';

export const timeReport = sqliteTable('time_report', {
	id: text('id').primaryKey(),

	userId: text('user_id')
		.notNull()
		.references(() => user.id),

	date: text('date').notNull(),

	endTime: integer('end_time', { mode: 'timestamp' }).notNull(),
	startTime: integer('start_time', { mode: 'timestamp' }).notNull(),
	pauseDuration: integer('pause_duration').notNull()
});

export type TimeReport = typeof timeReport.$inferSelect;
