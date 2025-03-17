import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: text('id').primaryKey(),

	email: text('email').notNull().unique(),
	password: text('password').notNull(),

	firstName: text('first_name'),
	lastName: text('last_name'),
	avatar: text('avatar'),

	updatedAt: integer('updated_at', { mode: 'timestamp' }),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
});

export const session = sqliteTable('session', {
	id: text('id').primaryKey(),

	userId: text('user_id')
		.notNull()
		.references(() => user.id),

	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
