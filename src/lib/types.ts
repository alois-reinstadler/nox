import { type Icon as IconType } from 'lucide-svelte';

type WithoutKeys<T, K extends keyof T> = {
	[P in Exclude<keyof T, K>]: T[P];
};

export type Icon = typeof IconType;

export type Metadata = {
	title: string;
	description: string;
	openGraph: {
		title: string;
		description: string;
		type: 'article';
		url: string;
		images: [
			{
				url: string;
				width: number;
				height: number;
				alt: string;
			}
		];
	};
	twitter: {
		card: 'summary_large_image';
		title: string;
		description: string;
		images: string[];
		creator: string;
	};
};

export type NavItem = {
	title: string;
	href?: string;
	icon?: Icon;

	// decreased opacity
	disabled?: boolean;

	// open in new tab and add arrow-up-right icon
	external?: boolean;

	// pill label like "new"
	label?: string;

	// show active state
	isActive?: boolean;
};

export type SidebarNavItem = (WithoutKeys<NavItem, 'href'> & Record<'items', NavItem[]>) | NavItem;

export type SidebarNavGroup = {
	title: string;
	items: SidebarNavItem[];
};
