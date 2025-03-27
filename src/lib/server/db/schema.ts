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

export const session = sqliteTable('session', {
	id: text('id').primaryKey(),

	userId: text('user_id')
		.notNull()
		.references(() => user.id),

	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export const organization = sqliteTable('organization', {
	id: text('id').primaryKey(),
	ownerId: text('owner_id')
		.notNull()
		.references(() => user.id),

	name: text('name').notNull(),
	email: text('email').unique(),
	phone: text('phone'),

	logo: text('logo'),
	website: text('website'),

	/** 2 characters ISO code */
	country: text('country'),
	/** State, province, or region level */
	administrativeArea: text('administrative_area'),
	/** County or district */
	subAdministrativeArea: text('sub_administrative_area'),
	/** Town or city */
	locality: text('locality'),
	/** Post town, mainly for the United Kingdom */
	dependentLocality: text('dependent_locality'),
	/** Warning: some countries have characters in it, not only numbers */
	postalCode: text('postal_code'),
	/** Thoroughfare, street address */
	street: text('street'),
	/** Street number, apartment. It might also contain letters */
	premise: text('premise'),
	/** Floor, etc */
	subPremise: text('sub_premise')
});

export const member = sqliteTable('member', {
	id: text('id').primaryKey(),

	userId: text('user_id')
		.notNull()
		.references(() => user.id),

	organizationId: text('organization_id')
		.notNull()
		.references(() => organization.id),

	role: text('role', { enum: ['admin', 'member'] }).notNull(),
	tags: text('tags', { mode: 'json' }).$type<string[]>()
});

export type User = typeof user.$inferSelect;
export type Session = typeof session.$inferSelect;

export type Organization = typeof organization.$inferSelect;
export type Member = typeof member.$inferSelect;
