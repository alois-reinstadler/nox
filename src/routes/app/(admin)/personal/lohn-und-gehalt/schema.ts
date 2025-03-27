import { z } from 'zod';

// Enum definitions

// Abrechnungszeitraum (Payroll Period)
export const ZeitraumEnum = z.enum([
	'Jährlich', // 0
	'Halbjährlich', // 1
	'Vierteljährlich', // 2
	'Monatlich', // 3
	'Wöchentlich', // 4
	'Täglich', // 5
	'Stündlich' // 6
]);

// Bundesland (Federal State)
export const BundeslandEnum = z.enum([
	'Burgenland', // 0
	'Kärnten', // 1
	'Niederösterreich', // 2
	'Oberösterreich', // 3
	'Salzburg', // 4
	'Steiermark', // 5
	'Tirol', // 6
	'Vorarlberg', // 7
	'Wien' // 8
]);

// Sozialversicherungsgruppe (Social Insurance Group)
export const SVGruppeEnum = z.enum([
	'Angestellter', // 0
	'Arbeiter', // 1
	'Lehrling' // 2
]);

// Pendlertag (Commuter Days per Month)
export const PendlertagEnum = z.enum([
	'ab 11 Tage', // 0
	'ab 8 Tage', // 1
	'ab 4 Tage', // 2
	'ab 1 Tag' // 3
]);

// "faboplus" schema
export const FaboplusSchema = z.object({
	kindbis18: z.number().int().nonnegative(),
	kindab18: z.number().int().nonnegative(),
	teilung: z.boolean()
});

// "pendlerinfo" schema
export const PendlerinfoSchema = z.object({
	km: z.number().int().nonnegative(),
	pendlertagid: PendlertagEnum.optional(),
	oeffiunzumutbar: z.boolean().optional()
});

// Request schema
export const BruttoNettoRequestSchema = z.object({
	jahr: z.number().int().min(2011).max(2023),
	monat: z.number().int().min(1).max(12).optional(),
	bundesland: BundeslandEnum,
	zeitraum: ZeitraumEnum,
	bezug: z.number(),
	isnetto: z.boolean(),
	svgruppe: SVGruppeEnum,
	mvk: z.boolean(),
	avab: z.boolean(),
	kinderanzahl: z.number().int().nonnegative().optional(),
	freibetrag: z.number().nonnegative(),
	sachbezug: z.number().nonnegative(),
	pendlerinfo: PendlerinfoSchema,
	faboplus: FaboplusSchema
});

// Sub Teil schema
export const SubTeilSchema = z.object({
	brutto: z.number(),
	sv: z.number(),
	lst: z.number(),
	netto: z.number(),
	db: z.number(),
	dz: z.number(),
	kost: z.number(),
	svdg: z.number(),
	mvk: z.number(),
	dgabg: z.number(),
	gesamt: z.number()
});

// Response schema
export const BruttoNettoResponseSchema = z.object({
	normal: SubTeilSchema,
	szbezug13: SubTeilSchema,
	szbezug14: SubTeilSchema,
	jahrsum: SubTeilSchema
});
