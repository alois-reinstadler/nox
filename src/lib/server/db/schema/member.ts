import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { user } from './user';
import { organization } from './organization';

export const member = sqliteTable('member', {
	id: text('id').primaryKey(),

	userId: text('user_id')
		.notNull()
		.references(() => user.id),

	organizationId: text('organization_id')
		.notNull()
		.references(() => organization.id),

	role: text('role', { enum: ['owner', 'admin', 'member'] }).notNull(),
	tags: text('tags')
});

export type Member = typeof member.$inferSelect;
