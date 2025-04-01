<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import Background from '$lib/components/backgorund.svelte';

	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import CircleHelp from '@lucide/svelte/icons/circle-help';
	import { page } from '$app/state';

	const dropdownTriggerClass = buttonVariants({ variant: 'outline' });

	let authCTA = $derived.by(() => {
		switch (page.url.pathname) {
			case '/login':
				return {
					phrase: "Don't have an account?",
					label: 'Register',
					href: '/register'
				};
			case '/logout':
				return {
					phrase: 'Forgot something?',
					label: 'Login',
					href: '/login'
				};
			case '/register':
				return {
					phrase: 'Already have an account?',
					label: 'Login',
					href: '/login'
				};
			default:
				return null;
		}
	});

	let { children } = $props();
</script>

<Background />

<div class="ui-marketing flex h-dvh w-full flex-col py-4 md:py-0">
	<div class="md:border-b">
		<header class="container">
			<div class="flex items-center justify-between gap-4">
				<h1 class="font-display text-3xl font-black md:py-1">
					<span class="text-yellow-300">NOX</span>
					<span>DEV</span>
				</h1>

				<DropdownMenu.Root>
					<DropdownMenu.Trigger class={dropdownTriggerClass}
						>Help <CircleHelp class="h-4 w-4" /></DropdownMenu.Trigger
					>
					<DropdownMenu.Content class="min-w-48" align="end">
						{#if authCTA}
							<DropdownMenu.Item>
								<a class="w-full" href={authCTA.href}>
									{authCTA.label}
								</a>
							</DropdownMenu.Item>
							<DropdownMenu.Separator />
						{/if}
						<DropdownMenu.Item class="pr-6">Verify Email</DropdownMenu.Item>
						<DropdownMenu.Item class="pr-6">Reset Password</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</header>
	</div>
	<div class="relative container mx-auto flex flex-1 flex-col items-center justify-center">
		{@render children()}
	</div>
	<div class="md:border-t">
		<footer class="container">
			<div class="text-muted-foreground flex items-center justify-between gap-4 text-sm md:py-2">
				<p>
					&copy; 2025 <a
						href="https://alrein.dev"
						class="hover:text-primary underline underline-offset-4">alrein.dev</a
					>
				</p>

				{#if authCTA}
					<p>
						{authCTA.phrase}
						<a href={authCTA.href} class="hover:text-primary underline underline-offset-4">
							{authCTA.label}
						</a>
					</p>
				{/if}
			</div>
		</footer>
	</div>
</div>
