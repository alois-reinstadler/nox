<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	let { children } = $props();
</script>

<div class="flex min-h-dvh w-full flex-col">
	<div class="border-b">
		<header class="container mx-auto flex justify-between gap-4 px-4 py-4 md:px-8 md:py-6">
			<h1 class="font-display text-4xl font-black">
				<span class="text-yellow-300">NOX</span>
				<span>ZE</span>
			</h1>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props }: any)}
						<Avatar.Root {...props} class="rounded-md">
							<!-- <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" /> -->
							<Avatar.Fallback>AR</Avatar.Fallback>
						</Avatar.Root>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="mr-4 md:mr-8">
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Profile</DropdownMenu.Item>
					<DropdownMenu.Item>Billing</DropdownMenu.Item>
					<DropdownMenu.Item>Team</DropdownMenu.Item>
					<DropdownMenu.Item>Subscription</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</header>
	</div>

	<div class="container mx-auto flex flex-col justify-between gap-2 px-4 py-4 md:px-8 md:py-6">
		<h2 class="text-2xl font-bold tracking-tight">Welcome back!</h2>
		<p class="text-muted-foreground">Here's a list of your tasks for this month!</p>
	</div>

	<main
		class="container mx-auto flex w-full grow flex-col justify-between gap-4 px-4 py-4 md:px-8 md:py-6"
	>
		{@render children()}
	</main>

	<footer class="border-t">
		<p class="container mx-auto px-4 py-4 text-center text-sm md:px-8 md:py-6">
			<span class="text-muted-foreground">© 2025</span>
			<a href="https://alrein.dev" class="text-muted-foreground hover:text-foreground"
				>Alois Reinstadler</a
			>
		</p>
	</footer>
</div>
