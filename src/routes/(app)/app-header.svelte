<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Button } from '$lib/components/ui/button';

	import { page } from '$app/state';
	import { Breadcrumbs } from 'svelte-breadcrumbs';

	import { resetMode, setMode } from 'mode-watcher';

	import Home from '$lib/animated-icons/home.svelte';
	import Sun from '$lib/animated-icons/sun.svelte';
	import Moon from 'lucide-svelte/icons/moon';

	import { AutoAnimate } from '$lib/hooks/auto-animate.svelte';
	import { fly } from 'svelte/transition';
</script>

<header
	class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-in-out group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
>
<<<<<<< HEAD
	<div class="container flex w-full items-center justify-between">
		<div class="container flex items-center gap-2">
=======
	<div class="container flex items-center justify-between gap-2">
		<div class="flex items-center gap-2">
>>>>>>> 729d76fbaa0dd26e28476d22349b26e5223b499f
			<Sidebar.Trigger class="-ml-1" />
			<Separator orientation="vertical" class="mx-1 h-4" />

			<Breadcrumbs url={page.url} routeId={page.route.id} pageData={page.data} skipRoutesWithNoPage>
				{#snippet children({ crumbs })}
					<Breadcrumb.Root>
						<Breadcrumb.List class="relative">
							<Breadcrumb.Item class="hidden md:block">
								<Breadcrumb.Link class="h-7 w-7" href="/">
									{#snippet child({ props }: Record<'props', Record<string, any>>)}
										<Button variant="ghost" size="icon" href="/" {...props}>
											<Home />
											<span class="sr-only">Home</span>
										</Button>
									{/snippet}
								</Breadcrumb.Link>
							</Breadcrumb.Item>
<<<<<<< HEAD
							{#each crumbs as c, i (c.url)}
								<Breadcrumb.Separator />
								<Breadcrumb.Item>
									<Breadcrumb.Link href={c.url}>{c.title}</Breadcrumb.Link>
								</Breadcrumb.Item>
=======
							{#each crumbs as c, i (c.title)}
								<div
									class="flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5"
									transition:fly={{ y: 10, duration: 150 }}
								>
									<Breadcrumb.Separator />
									<Breadcrumb.Item>
										<Breadcrumb.Link href={c.url}>{c.title}</Breadcrumb.Link>
									</Breadcrumb.Item>
								</div>
>>>>>>> 729d76fbaa0dd26e28476d22349b26e5223b499f
							{/each}
						</Breadcrumb.List>
					</Breadcrumb.Root>
				{/snippet}
			</Breadcrumbs>
		</div>
<<<<<<< HEAD
=======

		<div class="flex items-center gap-2">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					class={buttonVariants({ variant: 'ghost', size: 'icon', class: 'h-7 w-7' })}
				>
					<Sun
						classes="flex items-center justify-center rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon class="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
					<span class="sr-only">Toggle theme</span>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Item onclick={() => setMode('light')}>Light</DropdownMenu.Item>
					<DropdownMenu.Item onclick={() => setMode('dark')}>Dark</DropdownMenu.Item>
					<DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
>>>>>>> 729d76fbaa0dd26e28476d22349b26e5223b499f
	</div>
</header>
