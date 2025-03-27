<script lang="ts">
	import App from './app.svelte';
	let { children } = $props();
</script>

<App>
	{@render children()}
</App>
