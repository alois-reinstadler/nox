<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Button } from '$lib/components/ui/button';

	import { page } from '$app/state';
	import { Breadcrumbs } from 'svelte-breadcrumbs';

	import Home from '$lib/animated-icons/home.svelte';
</script>

<header
	class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-in-out group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
>
	<div class="container flex items-center gap-2">
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
						{#each crumbs as c, i (c.url)}
							<Breadcrumb.Separator />
							<Breadcrumb.Item>
								<Breadcrumb.Link href={c.url}>{c.title}</Breadcrumb.Link>
							</Breadcrumb.Item>
						{/each}
					</Breadcrumb.List>
				</Breadcrumb.Root>
			{/snippet}
		</Breadcrumbs>
	</div>
</header>
