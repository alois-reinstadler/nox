<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import CircleHelp from '@lucide/svelte/icons/circle-help';

	import { scrollY } from 'svelte/reactivity/window';
	import { cn } from '$lib/utils';
	import AuroraBackground from '$lib/components/ext/aurora/aurora.svelte';

	import * as Marketing from '$lib/components/marketing';

	let isScrolled = $derived(scrollY.current !== undefined && scrollY.current > 50);

	let { children } = $props();
</script>

<!-- <div class="absolute inset-0">
	<div class="from-background/0 to-background/100 absolute inset-0 bg-gradient-to-b" />
</div> -->

<!-- <div
	class="bg-background absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,--red-500_100%)]"
></div> -->

<div class="flex min-h-dvh w-full flex-col">
	<Marketing.Header />

	{@render children()}

	<Marketing.Footer />

	<div class="md:border-t">
		<footer class="container py-4">
			<div class="text-muted-foreground flex items-center justify-between gap-4 text-sm md:py-2">
				<p>
					&copy; 2025 <a
						href="https://alrein.dev"
						class="hover:text-primary underline underline-offset-4">alrein.dev</a
					>
				</p>
			</div>
		</footer>
	</div>
</div>

<!-- 
	spengler produkte / partner
	- prefa
	- triflex
	- eisenkies
	- würth
	- bauder
	- 
-->
