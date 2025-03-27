export const employees = [
	{
		id: 'mert.celik',
		firstName: 'Mert',
		lastName: 'Celik',
		workHours: 40,
		workDays: 5,
		tags: ['Spengler', 'Abdichter']
	},
	{
		id: 'goekhan.dueger',
		firstName: 'Gökhan',
		lastName: 'Düger',
		workHours: 40,
		workDays: 5,
		tags: ['Spengler']
	},
	{
		id: 'erdinc.uencuecue',
		firstName: 'Erdinc',
		lastName: 'Üncücü',
		workHours: 40,
		workDays: 5,
		tags: ['Spengler', 'Abdichter', 'Lehrling']
	},
	{
		id: 'batuhan.kilic',
		firstName: 'Batuhan',
		lastName: 'Kilic',
		workHours: 40,
		workDays: 5,
		tags: ['Spengler', 'Abdichter', 'Lehrling']
	},
	{
		id: 'batuhan.karapence',
		firstName: 'Batuhan',
		lastName: 'Karapence',
		workHours: 40,
		workDays: 5,
		tags: ['Spengler']
	},
	{
		id: 'bilal.kilic',
		firstName: 'Bilal',
		lastName: 'Kilic',
		workHours: 40,
		workDays: 5,
		tags: ['Spengler', 'Abdichter']
	},
	{
		id: 'mathias.wolf',
		firstName: 'Mathias',
		lastName: 'Wolf',
		workHours: 40,
		workDays: 5,
		tags: ['Abdichter']
	},
	{
		id: 'marc.koell',
		firstName: 'Marc',
		lastName: 'Köll',
		workHours: 40,
		workDays: 5,
		tags: ['Abdichter']
	},
	{
		id: 'tiyara.beiler',
		firstName: 'Tiyara',
		lastName: 'Beiler',
		workHours: 40,
		workDays: 5,
		tags: ['Spengler', 'Abdichter', 'Lehrling']
	},
	{
		id: 'oliver.ferkant',
		firstName: 'Oliver',
		lastName: 'Ferkant',
		workHours: 40,
		workDays: 5,
		tags: ['Abdichter']
	},
	{
		id: 'alois.reinstadler',
		firstName: 'Alois',
		lastName: 'Reinstadler',
		workHours: 20,
		workDays: 4,
		tags: ['Büro']
	}
] as const;

export type EmployeeId = (typeof employees)[number]['id'];
export type EmployeeTag = (typeof employees)[number]['tags'][number];
