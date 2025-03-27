<script lang="ts">
	import { cn, type ClassValue, type Icon } from '$lib/utils';

	import { ClipboardCopy, File, FileSignature, Table, Waves, Box, Boxes } from '@lucide/svelte';
	import { employees } from './data';

	let isSkeleton = true;

	type GridItemProps = {
		title: string;
		description: string;
		icon: Icon;
		class?: ClassValue;
	};

	const items: GridItemProps[] = [
		{
			title: 'The Dawn of Innovation',
			description: 'Explore the birth of groundbreaking ideas and inventions.',
			icon: ClipboardCopy
		},
		{
			title: 'The Digital Revolution',
			description: 'Dive into the transformative power of technology.',
			icon: File
		},
		{
			title: 'The Art of Design',
			description: 'Discover the beauty of thoughtful and functional design.',
			icon: FileSignature
		},
		{
			title: 'The Power of Communication',
			description: 'Understand the impact of effective communication in our lives.',
			icon: Table
		},
		{
			title: 'The Pursuit of Knowledge',
			description: 'Join the quest for understanding and enlightenment.',
			icon: Waves
		}
	];
</script>

<section class="container-app mx-auto flex flex-col gap-4">
	<div class="flex flex-col gap-2">
		<h2 class="text-3xl leading-tight font-bold tracking-tight">Personal Übersicht</h2>
		<p class="text-muted-foreground">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
		</p>
	</div>

	<ul class="grid w-full grid-cols-1 gap-4">
		{#each employees as employee}
			<li>
				{employee.firstName}
				{employee.lastName}
			</li>
		{/each}
	</ul>

	<ul class="grid w-full grid-cols-1 gap-4 md:-mx-4 md:auto-rows-[18rem] md:grid-cols-3">
		{#each items as { title, description, icon }, i (i)}
			{@render BentoGridItem({
				icon,
				title,
				description,
				class: (i === 3 || i === 6) && 'md:col-span-2'
			})}
		{/each}
	</ul>
</section>

{#snippet BentoGridItem({ title, description, icon, class: className }: GridItemProps)}
	<li
		class={cn(
			'group/bento shadow-input row-span-1 flex flex-col justify-between gap-4 rounded-xl border border-transparent bg-white p-4 transition duration-200 hover:shadow-lg dark:border-white/[0.2] dark:bg-black dark:shadow-none',
			className
		)}
	>
		<div
			class="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"
		></div>
		<div class="transition duration-200 group-hover/bento:translate-x-2">
			<svelte:component this={icon} />
			<div class="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
				{title}
			</div>
			<div class="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
				{description}
			</div>
		</div>
	</li>
{/snippet}
