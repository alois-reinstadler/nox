import Settings from 'lucide-svelte/icons/settings-2';
import Building from 'lucide-svelte/icons/building-2';
import Truck from 'lucide-svelte/icons/truck';
import Users from 'lucide-svelte/icons/users-round';
// import BookOpen from 'lucide-svelte/icons/book-open';
// import Bot from 'lucide-svelte/icons/bot';

import type { SidebarNavItem, NavItem, SidebarNavGroup } from '$lib/types';

export type { SidebarNavItem, NavItem, SidebarNavGroup };

export const navMain: SidebarNavItem[] = [
	{
		title: 'Vertrieb',
		href: '#',
		icon: Truck,
		items: [
			{
				title: 'Übersicht',
				href: '/sales'
			},
			{
				title: 'Leistungsverzeichnisse',
				href: '/sales/lvs' // leistungsverzeichnis (.onlv)
			},
			{
				title: 'Angebote',
				href: '/sales/quotes'
			},
			{
				title: 'Rechnungen',
				href: '/sales/invoices'
			},
			{
				title: 'Marketing',
				href: '/sales/marketing'
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
				href: '/hr'
			},
			{
				title: 'Lohn und Gehalt',
				href: '/hr/payroll'
			},
			{
				title: 'Urlaub und Abwesenheit',
				href: '/hr/absence'
			},
			{
				title: 'Leistungsbewertung',
				href: '/hr/performance-review'
			}
		]
	},

	{
		title: 'Stammdaten',
		icon: Building,
		items: [
			{
				title: 'Organisation',
				href: '/organization'
			},
			{
				title: 'Personal',
				href: '/organization/employees'
			},
			{
				title: 'Kontakte',
				href: '/organization/contacts' // kunden (customers), lieferanten (suppliers), mitarbeiter (employees), sonstige (other)
			},
			{
				title: 'Produkte & Services',
				href: '/organization/products'
			}
		]
	},
	{
		title: 'Einstellungen',
		icon: Settings,
		items: [
			{
				title: 'Profil',
				href: '/settings#profile'
			},
			{
				title: 'Abrechnung',
				href: '/settings#billing'
			},
			{
				title: 'Benachrichtigungen',
				href: '/settings#notifications'
			},
			{
				title: 'Layout und Design',
				href: '/settings#layout-and-design'
			}
		]
	}
];

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
// 				href: '/sales'
// 			},
// 			{
// 				title: 'Leistungsverzeichnisse',
// 				href: '/sales/lvs' // leistungsverzeichnis (.onlv)
// 			},
// 			{
// 				title: 'Angebote',
// 				href: '/sales/quotes'
// 			},
// 			{
// 				title: 'Rechnungen',
// 				href: '/sales/invoices'
// 			},
// 			{
// 				title: 'Marketing',
// 				href: '/sales/marketing'
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
// 				href: '/hr'
// 			},
// 			{
// 				title: 'Lohn und Gehalt',
// 				href: '/hr/payroll'
// 			},
// 			{
// 				title: 'Urlaub und Abwesenheit',
// 				href: '/hr/absence'
// 			},
// 			{
// 				title: 'Leistungsbewertung',
// 				href: '/hr/performance-review'
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
// 				href: '/organization'
// 			},
// 			{
// 				title: 'Personal',
// 				href: '/organization/employees'
// 			},
// 			{
// 				title: 'Kontakte',
// 				href: '/organization/contacts' // kunden (customers), lieferanten (suppliers), mitarbeiter (employees), sonstige (other)
// 			},
// 			{
// 				title: 'Produkte & Services',
// 				href: '/organization/products'
// 			}
// 		]
// 	},
// 	{
// 		title: 'Einstellungen',
// 		icon: Settings2,
// 		items: [
// 			{
// 				title: 'Profil',
// 				href: '/settings#profile'
// 			},
// 			{
// 				title: 'Abrechnung',
// 				href: '/settings#billing'
// 			},
// 			{
// 				title: 'Benachrichtigungen',
// 				href: '/settings#notifications'
// 			},
// 			{
// 				title: 'Layout und Design',
// 				href: '/settings#layout-and-design'
// 			}
// 		]
// 	}
// ];
