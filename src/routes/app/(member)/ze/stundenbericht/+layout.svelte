<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	import Background from '$lib/components/backgorund.svelte';

	let { children } = $props();
</script>

<div class="relative flex min-h-dvh w-full flex-col">
	<div class="container mx-auto flex flex-col justify-between gap-2 px-4 py-4 md:px-8 md:py-6">
		<h2 class="text-2xl font-bold tracking-tight">Welcome back!</h2>
		<p class="text-muted-foreground">Here's a list of your tasks for this month!</p>
	</div>

	<main
		class="container mx-auto flex w-full grow flex-col justify-between gap-4 px-4 py-4 md:px-8 md:py-6"
	>
		{@render children()}
	</main>

	<footer class="container mx-auto px-4 py-4 text-center text-sm md:px-8">
		<span class="text-muted-foreground">© 2025</span>
		<a href="https://alrein.dev" class="text-muted-foreground hover:text-foreground"
			>Alois Reinstadler</a
		>
	</footer>
</div>
