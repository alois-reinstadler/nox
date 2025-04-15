<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import CircleHelp from '@lucide/svelte/icons/circle-help';
</script>

<header class="fixed top-0 z-50 w-full">
	<div class="container">
		<div class="flex items-center justify-between gap-4">
			<a href="/" class="font-display text-2xl font-black md:py-1">
				<span class="text-yellow-300">NOX</span>
				<span>DEV</span>
			</a>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline' })}
					>Help <CircleHelp class="h-4 w-4" /></DropdownMenu.Trigger
				>
				<DropdownMenu.Content class="min-w-48" align="end" preventScroll={false}>
					<DropdownMenu.Item class="pr-6">Verify Email</DropdownMenu.Item>
					<DropdownMenu.Item class="pr-6">Reset Password</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
