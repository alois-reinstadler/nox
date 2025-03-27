import Settings from '@lucide/svelte/icons/settings-2';
import Building from '@lucide/svelte/icons/building-2';
import Clock from '@lucide/svelte/icons/clock';
import Users from '@lucide/svelte/icons/users-round';
import Receipt from '@lucide/svelte/icons/receipt-text';
// import BookOpen from '@lucide/svelte/icons/book-open';
// import Bot from '@lucide/svelte/icons/bot';

import type { SidebarNavItem, NavItem, SidebarNavGroup } from '$lib/types';

export type { SidebarNavItem, NavItem, SidebarNavGroup };

export const employeeNavMain: SidebarNavItem[] = [
	{
		title: 'Zeiterfassung',
		href: '#',
		icon: Clock,
		items: [
			{
				title: 'Übersicht',
				href: '/zeiterfassung/zeiterfassung'
			},
			{
				title: 'Ausschreibungen',
				href: '/app/vertrieb/ausschreibungen' // leistungsverzeichnis (.onlv)
			},
			{
				title: 'Angebote',
				href: '/app/vertrieb/angebote'
			},
			{
				title: 'Rechnungen',
				href: '/app/vertrieb/rechnungen'
			},
			{
				title: 'Marketing',
				href: '/app/vertrieb/marketing'
			}
		]
	}

	// {
	// 	title: 'Einstellungen',
	// 	icon: Settings,
	// 	items: [
	// 		{
	// 			title: 'Profil',
	// 			href: '/app/einstellungen#profil'
	// 		},
	// 		{
	// 			title: 'Abrechnung',
	// 			href: '/app/einstellungen#abrechnung'
	// 		},
	// 		{
	// 			title: 'Benachrichtigungen',
	// 			href: '/app/einstellungen#benachrichtigungen'
	// 		},
	// 		{
	// 			title: 'Layout und Design',
	// 			href: '/app/einstellungen#layout-und-design'
	// 		}
	// 	]
	// }
];

export const adminNav: SidebarNavItem[] = [
	{
		title: 'Vertrieb',
		href: '#',
		icon: Receipt,
		items: [
			{
				title: 'Übersicht',
				href: '/app/vertrieb'
			},
			{
				title: 'Ausschreibungen',
				href: '/app/vertrieb/ausschreibungen' // leistungsverzeichnis (.onlv)
			},
			{
				title: 'Angebote',
				href: '/app/vertrieb/angebote'
			},
			{
				title: 'Rechnungen',
				href: '/app/vertrieb/rechnungen'
			},
			{
				title: 'Marketing',
				href: '/app/vertrieb/marketing'
			}
		]
	},
	{
		title: 'Personal',
		href: '#',
		icon: Users,
		items: [
			{
				title: 'Übersicht',
				href: '/app/personal'
			},
			{
				title: 'Lohn und Gehalt',
				href: '/app/personal/lohn-und-gehalt'
			},
			{
				title: 'Urlaub und Abwesenheit',
				href: '/app/personal/urlaub-und-abwesenheit'
			},
			{
				title: 'Leistungsbewertung',
				href: '/app/personal/leistungsbewertung'
			}
		]
	},
	{
		title: 'Stammdaten',
		icon: Building,
		items: [
			{
				title: 'Organisation',
				href: '/app/stammdaten/organisation'
			},
			{
				title: 'Personal',
				href: '/app/stammdaten/personal'
			},
			{
				title: 'Kontakte',
				href: '/app/stammdaten/kontakte' // kunden (customers), lieferanten (suppliers), mitarbeiter (employees), sonstige (other)
			},
			{
				title: 'Produkte & Services',
				href: '/app/stammdaten/produkte'
			}
		]
	},
	{
		title: 'Einstellungen',
		icon: Settings,
		items: [
			{
				title: 'Profil',
				href: '/app/einstellungen/profil'
			},
			{
				title: 'Abrechnung',
				href: '/app/einstellungen/abrechnung'
			},
			{
				title: 'Benachrichtigungen',
				href: '/app/einstellungen/benachrichtigungen'
			},
			{
				title: 'Layout und Design',
				href: '/app/einstellungen/layout-und-design'
			}
		]
	}
];

// export const navMain: SidebarNavItem[] = [
// 	{
// 		title: 'Vertrieb',
// 		href: '#',
// 		icon: Truck,
// 		items: [
// 			{
// 				title: 'Übersicht',
// 				href: '/app/sales'
// 			},
// 			{
// 				title: 'Ausschreibungen',
// 				href: '/app/sales/lvs' // leistungsverzeichnis (.onlv)
// 			},
// 			{
// 				title: 'Angebote',
// 				href: '/app/sales/quotes'
// 			},
// 			{
// 				title: 'Rechnungen',
// 				href: '/app/sales/invoices'
// 			},
// 			{
// 				title: 'Marketing',
// 				href: '/app/sales/marketing'
// 			}
// 		]
// 	},

// 	{
// 		title: 'Personal',
// 		href: '#',
// 		icon: Users,
// 		items: [
// 			{
// 				title: 'Übersicht',
// 				href: '/app/hr'
// 			},
// 			{
// 				title: 'Lohn und Gehalt',
// 				href: '/app/hr/payroll'
// 			},
// 			{
// 				title: 'Urlaub und Abwesenheit',
// 				href: '/app/hr/absence'
// 			},
// 			{
// 				title: 'Leistungsbewertung',
// 				href: '/app/hr/performance-review'
// 			}
// 		]
// 	},

// 	{
// 		title: 'Stammdaten',
// 		icon: Building,
// 		items: [
// 			{
// 				title: 'Organisation',
// 				href: '/app/organization'
// 			},
// 			{
// 				title: 'Personal',
// 				href: '/app/organization/employees'
// 			},
// 			{
// 				title: 'Kontakte',
// 				href: '/app/organization/contacts' // kunden (customers), lieferanten (suppliers), mitarbeiter (employees), sonstige (other)
// 			},
// 			{
// 				title: 'Produkte & Services',
// 				href: '/app/organization/products'
// 			}
// 		]
// 	},
// 	{
// 		title: 'Einstellungen',
// 		icon: Settings,
// 		items: [
// 			{
// 				title: 'Profil',
// 				href: '/app/settings#profile'
// 			},
// 			{
// 				title: 'Abrechnung',
// 				href: '/app/settings#billing'
// 			},
// 			{
// 				title: 'Benachrichtigungen',
// 				href: '/app/settings#notifications'
// 			},
// 			{
// 				title: 'Layout und Design',
// 				href: '/app/settings#layout-and-design'
// 			}
// 		]
// 	}
// ];

// export const navMain: SidebarNavItem[] = [
// 	{
// 		title: 'Finanzen',
// 		href: '#',
// 		icon: Bot,
// 		items: [
// 			{
// 				title: 'Rechnungswesen',
// 				href: '#'
// 			},
// 			{
// 				title: 'Fakturierung',
// 				href: '#'
// 			},
// 			{
// 				title: 'Budgetplanung',
// 				href: '#'
// 			},
// 			{
// 				title: 'Kassenbuch',
// 				href: '#'
// 			}
// 		]
// 	},
// 	{
// 		title: 'Vertrieb',
// 		href: '#',
// 		icon: BookOpen,
// 		items: [
// 			{
// 				title: 'Übersicht',
// 				href: '/app/sales'
// 			},
// 			{
// 				title: 'Leistungsverzeichnisse',
// 				href: '/app/sales/lvs' // leistungsverzeichnis (.onlv)
// 			},
// 			{
// 				title: 'Angebote',
// 				href: '/app/sales/quotes'
// 			},
// 			{
// 				title: 'Rechnungen',
// 				href: '/app/sales/invoices'
// 			},
// 			{
// 				title: 'Marketing',
// 				href: '/app/sales/marketing'
// 			}
// 		]
// 	},
// 	{
// 		title: 'Einkauf',
// 		href: '#',
// 		icon: Settings2,
// 		items: [
// 			{
// 				title: 'Lieferanten',
// 				href: '#'
// 			},
// 			{
// 				title: 'Bestellwesen',
// 				href: '#'
// 			},
// 			{
// 				title: 'Wareneingang',
// 				href: '#'
// 			}
// 		]
// 	},
// 	{
// 		title: 'Personal',
// 		href: '#',
// 		icon: Settings2,
// 		items: [
// 			{
// 				title: 'Übersicht',
// 				href: '/app/hr'
// 			},
// 			{
// 				title: 'Lohn und Gehalt',
// 				href: '/app/hr/payroll'
// 			},
// 			{
// 				title: 'Urlaub und Abwesenheit',
// 				href: '/app/hr/absence'
// 			},
// 			{
// 				title: 'Leistungsbewertung',
// 				href: '/app/hr/performance-review'
// 			}
// 		]
// 	},
// 	{
// 		title: 'Projektmanagement',
// 		href: '#',
// 		icon: Settings2,
// 		items: [
// 			{
// 				title: 'Projektverwaltung',
// 				href: '#'
// 			},
// 			{
// 				title: 'Ressourcenmanagement',
// 				href: '#'
// 			},
// 			{
// 				title: 'Zeiterfassung',
// 				href: '#'
// 			}
// 		]
// 	},
// 	{
// 		title: 'Lagerverwaltung',
// 		href: '#',
// 		icon: Settings2,
// 		items: [
// 			{
// 				title: 'Lagerorte',
// 				href: '#'
// 			},
// 			{
// 				title: 'Bestandsverwaltung',
// 				href: '#'
// 			},
// 			{
// 				title: 'Lagerbewegungen',
// 				href: '#'
// 			},
// 			{
// 				title: 'Inventur',
// 				href: '#'
// 			}
// 		]
// 	},
// 	{
// 		title: 'Stammdaten',
// 		icon: Settings2,
// 		items: [
// 			{
// 				title: 'Organisation',
// 				href: '/app/organization'
// 			},
// 			{
// 				title: 'Personal',
// 				href: '/app/organization/employees'
// 			},
// 			{
// 				title: 'Kontakte',
// 				href: '/app/organization/contacts' // kunden (customers), lieferanten (suppliers), mitarbeiter (employees), sonstige (other)
// 			},
// 			{
// 				title: 'Produkte & Services',
// 				href: '/app/organization/products'
// 			}
// 		]
// 	},
// 	{
// 		title: 'Einstellungen',
// 		icon: Settings2,
// 		items: [
// 			{
// 				title: 'Profil',
// 				href: '/app/settings#profile'
// 			},
// 			{
// 				title: 'Abrechnung',
// 				href: '/app/settings#billing'
// 			},
// 			{
// 				title: 'Benachrichtigungen',
// 				href: '/app/settings#notifications'
// 			},
// 			{
// 				title: 'Layout und Design',
// 				href: '/app/settings#layout-and-design'
// 			}
// 		]
// 	}
// ];
