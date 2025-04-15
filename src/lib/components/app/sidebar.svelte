<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	import AppSwitch from './sidebar-app-switch.svelte';
	import SidebarNav from './sidebar-nav.svelte';
	import SidebarNavUser from './sidebar-nav-user.svelte';

	import type { ComponentProps } from 'svelte';

	let {
		ref = $bindable(null),
		collapsible = 'icon',
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root
	bind:ref
	{collapsible}
	{...restProps}
	class="bg-sidebar/95 supports-[backdrop-filter]:bg-sidebar/60 z-10 backdrop-blur"
>
	<Sidebar.Header>
		<AppSwitch />
	</Sidebar.Header>
	<Sidebar.Content>
		<SidebarNav />
	</Sidebar.Content>
	<Sidebar.Footer>
		<SidebarNavUser />
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
