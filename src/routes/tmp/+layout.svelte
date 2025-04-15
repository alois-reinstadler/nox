<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import CircleHelp from '@lucide/svelte/icons/circle-help';

	import { scrollY } from 'svelte/reactivity/window';
	import { cn } from '$lib/utils';
	import AuroraBackground from '$lib/components/ext/aurora/aurora.svelte';

	let isScrolled = $derived(scrollY.current !== undefined && scrollY.current > 50);

	let { children } = $props();
</script>

<!-- <div class="absolute inset-0">
	<div class="from-background/0 to-background/100 absolute inset-0 bg-gradient-to-b" />
</div> -->

<!-- <div
	class="bg-background absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,--red-500_100%)]"
></div> -->

<div class="z flex min-h-dvh w-full flex-col">
	<div class="fixed top-0 z-50 w-full" class:border-none={isScrolled}>
		<header
			class={cn(
				'border-border/40 container rounded-3xl px-8 py-4 transition-all',
				isScrolled && 'bg-background/60 translate-y-4 border backdrop-blur'
			)}
		>
			<div class="flex items-center justify-between gap-4">
				<h1 class="font-display text-2xl font-black md:py-1">
					<span class="text-yellow-300">NOX</span>
					<span>DEV</span>
				</h1>

				<DropdownMenu.Root>
					<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline' })}
						>Help <CircleHelp class="h-4 w-4" /></DropdownMenu.Trigger
					>
					<DropdownMenu.Content class="min-w-48" align="end">
						<DropdownMenu.Item class="pr-6">Verify Email</DropdownMenu.Item>
						<DropdownMenu.Item class="pr-6">Reset Password</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</header>
	</div>

	{@render children()}

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
