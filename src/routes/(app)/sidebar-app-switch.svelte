<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
	import Plus from '@lucide/svelte/icons/plus';

	import AudioWaveform from '@lucide/svelte/icons/audio-waveform';
	import GalleryVerticalEnd from '@lucide/svelte/icons/gallery-vertical-end';

	import type { Icon } from '$lib/types';

	const apps = [
		{
			name: 'ERP',
			logo: AudioWaveform,
			plan: 'pro'
		},
		{
			name: 'Mail',
			logo: GalleryVerticalEnd,
			plan: 'pro'
		}
	] satisfies App[];

	type App = {
		name: string;
		logo: Icon;
		plan: 'pro' | 'free';
	};

	const sidebar = useSidebar();

	let activeApp = $state(apps[0]);
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton
						{...props}
						size="lg"
						class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					>
						<div
							class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
						>
							<activeApp.logo class="size-4" />
						</div>
						<div class="grid flex-1 text-left text-sm leading-tight">
							<span class="truncate font-semibold">
								{activeApp.name}
							</span>
							<span class="truncate text-xs">{activeApp.plan}</span>
						</div>
						<ChevronsUpDown class="ml-auto" />
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				class="w-[--bits-dropdown-menu-anchor-width] min-w-56 rounded-lg"
				align="start"
				side={sidebar.isMobile ? 'bottom' : 'right'}
				sideOffset={4}
			>
				<DropdownMenu.Label class="text-muted-foreground text-xs">Apps</DropdownMenu.Label>
				{#each apps as app, index (app.name)}
					<DropdownMenu.Item onSelect={() => (activeApp = app)} class="gap-2 p-2">
						<div class="flex size-6 items-center justify-center rounded-sm border">
							<app.logo class="size-4 shrink-0" />
						</div>
						{app.name}
						<DropdownMenu.Shortcut>⌘{index + 1}</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
				{/each}
				<DropdownMenu.Separator />
				<DropdownMenu.Item class="gap-2 p-2">
					<div class="bg-background flex size-6 items-center justify-center rounded-md border">
						<Plus class="size-4" />
					</div>
					<div class="text-muted-foreground font-medium">Add team</div>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>
