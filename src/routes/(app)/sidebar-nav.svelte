<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	import { AutoAnimate } from '$lib/hooks/auto-animate.svelte';
	import { cn } from '$lib/utils.js';

	import { navMain } from '$lib/config/navigation';

	const items = navMain;
</script>

<Sidebar.Group>
	<Sidebar.GroupLabel>Platform</Sidebar.GroupLabel>
	<Sidebar.Menu>
		{#each items as mainItem (mainItem.title)}
			<Collapsible.Root open={mainItem.isActive} class="group/collapsible">
				{#snippet child({ props }: any)}
					<Sidebar.MenuItem {...props}>
						<Collapsible.Trigger>
							{#snippet child({ props }: any)}
								<Sidebar.MenuButton {...props}>
									{#snippet tooltipContent()}
										{mainItem.title}
									{/snippet}
									{#if mainItem.icon}
										<mainItem.icon />
									{/if}
									<span>{mainItem.title}</span>
									<ChevronRight
										class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
									/>
								</Sidebar.MenuButton>
							{/snippet}
						</Collapsible.Trigger>
						<Collapsible.Content forceMount>
							{#snippet child({ props, open }: any)}
								{#if 'items' in mainItem}
									{@const itemAnimation = new AutoAnimate()}
									<Sidebar.MenuSub
										{...props}
										bind:ref={itemAnimation.ref}
										class={cn(
											props.class!,
											'relative isolate opacity-0 transition-all',
											open && 'opacity-100'
										)}
									>
										{#if open}
											{#each mainItem.items as subItem, i (subItem.title)}
												<Sidebar.MenuSubItem>
													<Sidebar.MenuSubButton class="group">
														{#snippet child({ props })}
															<a
																{...props}
																href={subItem.href}
																class={cn(
																	props.class!,
																	'text-muted-foreground group-data-[active=true]:text-current hover:text-current'
																)}
															>
																<span>{subItem.title}</span>
															</a>
														{/snippet}
													</Sidebar.MenuSubButton>
												</Sidebar.MenuSubItem>
											{/each}
										{/if}
									</Sidebar.MenuSub>
								{/if}
							{/snippet}
						</Collapsible.Content>
					</Sidebar.MenuItem>
				{/snippet}
			</Collapsible.Root>
		{/each}
	</Sidebar.Menu>
</Sidebar.Group>
