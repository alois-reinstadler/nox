<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	import AppHeader from './app-header.svelte';
	import AppFooter from './app-footer.svelte';
	import AppSidebar from './sidebar.svelte';

	let { children } = $props();
</script>

<Sidebar.Provider class="ui-app">
	<AppSidebar />
	<Sidebar.Inset>
		<AppHeader />

		<ScrollArea
			orientation="vertical"
			data-sidebar="content"
			scrollbarYClasses="hover:bg-muted/30"
			scrollbarXClasses="hover:bg-muted/30"
			class="flex flex-1 shrink-0 flex-col overflow-hidden transition-[width,height] ease-in-out"
		>
			{@render children()}
		</ScrollArea>
	</Sidebar.Inset>
</Sidebar.Provider>
