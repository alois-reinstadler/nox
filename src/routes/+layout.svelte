<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';

	import { ModeWatcher } from 'mode-watcher';
	import { UseTheme } from '$lib/hooks/use-theme.svelte';

	let { children } = $props();

	const theme = new UseTheme();
</script>

<ModeWatcher defaultMode="dark" />

<div class="sm:hidden"></div>

{@render children()}
