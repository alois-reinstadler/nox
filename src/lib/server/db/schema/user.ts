import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: text('id').primaryKey(),

	username: text('username').notNull().unique(),
	password: text('password').notNull(),

	firstName: text('first_name'),
	lastName: text('last_name'),

	avatar: text('avatar'),
	email: text('email').unique(),

	updatedAt: integer('updated_at', { mode: 'timestamp' }),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
});

export type User = typeof user.$inferSelect;
