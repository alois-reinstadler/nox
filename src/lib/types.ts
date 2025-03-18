import { type Icon as IconType } from 'lucide-svelte';
import type { Action } from 'svelte/action';

export type WithUse<P> = P & {
	use?: Action;
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
	disabled?: boolean;
	external?: boolean;
	icon?: Icon;
	label?: string;
	isActive?: boolean;
};

export type SidebarNavItem = NavItem & {
	items: NavItem[];
};

export type SidebarNavGroup = {
	title: string;
	items: SidebarNavItem[];
};
