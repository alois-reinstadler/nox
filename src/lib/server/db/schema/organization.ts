import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { user } from '../schema';

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

	createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
});

export type Organization = typeof organization.$inferSelect;

// Location
// /** 2 characters ISO code */
// country: text('country'),
// /** State, province, or region level */
// administrativeArea: text('administrative_area'),
// /** County or district */
// subAdministrativeArea: text('sub_administrative_area'),
// /** Town or city */
// locality: text('locality'),
// /** Post town, mainly for the United Kingdom */
// dependentLocality: text('dependent_locality'),
// /** Warning: some countries have characters in it, not only numbers */
// postalCode: text('postal_code'),
// /** Thoroughfare, street address */
// street: text('street'),
// /** Street number, apartment. It might also contain letters */
// premise: text('premise'),
// /** Floor, etc */
// subPremise: text('sub_premise')
