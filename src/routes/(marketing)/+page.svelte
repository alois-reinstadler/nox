<script lang="ts">
	import PoweredBy from './powered-by.svelte';

	import WorkInProgress from '$lib/components/pages/work-in-progress.svelte';
	import { Button } from '$lib/components/ui/button';

	import * as Card from '$lib/components/ui/card/index.js';
	import CardDecorator from './card-decorator.svelte';

	import Sparkles from '@lucide/svelte/icons/sparkles';
	import ReportIssue from '$lib/components/report-issue.svelte';
	const contactFields = [
		{
			label: 'Anfragen',
			email: 'info@nox-spenglerei.at',
			phone: '+43 123 456 789'
		},
		{
			label: 'Büro',
			email: 'office@nox-spenglerei.at'
		}
	] satisfies ContactField[];

	type ContactField = {
		label: string;
		email: string;
		phone?: string;
	};
</script>

<section class="flex h-dvh w-full flex-col overflow-hidden">
	<div class="relative flex flex-1 flex-col items-center justify-center">
		<div
			class="rounded-9xl md:rounded-t-9xl absolute inset-0 isolate -z-10 container h-full w-full overflow-hidden rounded-t-none rounded-b border md:mt-20"
		>
			<video autoplay loop class="-z-10 h-full w-full object-cover">
				<source src="/hero.mp4?hls" type="video/mp4" />
			</video>
		</div>
		<div class="absolute inset-0 -z-10">
			<div class="from-background/0 to-background/100 absolute inset-0 bg-gradient-to-b to-98%" />
		</div>
		<div class="mx-auto max-w-5xl px-6">
			<div class="sm:mx-auto lg:mt-0 lg:mr-auto">
				<h1 class="max-w-2xl text-5xl font-medium text-balance md:text-6xl">
					Build and Ship 10x faster with NS
				</h1>
				<p class="mt-8 max-w-2xl text-lg text-pretty">
					Tailwindcss highly customizable components for building modern websites and applications
					that look and feel the way you mean it.
				</p>

				<div class="mt-12 flex items-center gap-2">
					<div
						class="bg-foreground/10 border p-0.5"
						style="border-radius: calc(var(--radius) + 4px + 0.125rem);"
					>
						<Button size="lg" class="rounded-xl px-5 text-base">
							<a href="#a">
								<span class="text-nowrap">Start Building</span>
							</a>
						</Button>
					</div>
					<Button size="lg" variant="ghost" class="h-10.5 rounded-xl px-5 text-base">
						<a href="#a">
							<span class="text-nowrap">Request a demo</span>
						</a>
					</Button>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<PoweredBy />
	</div>
</section>

<section class="py-16 md:py-32">
	<div class="@container mx-auto max-w-5xl px-6">
		<div class="text-center">
			<h2 class="text-4xl font-semibold text-balance lg:text-5xl">Built to cover your needs</h2>
			<p class="mt-4">
				Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.
			</p>
		</div>
		<div
			class="mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16 @min-4xl:max-w-full @min-4xl:grid-cols-3"
		>
			{#each [{ header: 'Powered By AI', content: 'Elements to functionality, you have complete control to create a unique experience.' }, { header: 'Powered By AI', content: 'Elements to functionality, you have complete control to create a unique experience.' }, { header: 'Powered By AI', content: 'Elements to functionality, you have complete control to create a unique experience.' }] as $card}
				{@render card($card.header, $card.content)}
			{/each}
		</div>
	</div>
</section>

<section class="py-16 md:py-32">
	<div class="@container mx-auto max-w-5xl px-6">
		<div class="text-center">
			<h2 class="text-4xl font-semibold text-balance lg:text-5xl">Built to cover your needs</h2>
			<p class="mt-4">
				Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.
			</p>
		</div>
		<div class="mt-12 flex w-full flex-col gap-x-6 gap-y-6 md:flex-row">
			<div class="flex-1">
				<div class="rounded-4xl border p-6 px-8">
					<h2 class="text-lg font-semibold">Collaborate</h2>
					<a
						href="mailto:hello@tailus.io"
						class="text-lg text-blue-600 hover:underline dark:text-blue-400"
					>
						hello@tailus.io
					</a>
					<p class="mt-3 text-sm">+243 000 000 000</p>
				</div>
			</div>
			<div class="flex-1">
				<div class="rounded-4xl border p-6 px-8">
					<h3 class="text-lg font-semibold">Press</h3>
					<a
						href="mailto:press@tailus.io"
						class="text-lg text-blue-600 hover:underline dark:text-blue-400"
					>
						press@tailus.io
					</a>
					<p class="mt-3 text-sm">+243 000 000 000</p>
				</div>
			</div>
		</div>
		<div class="mt-4">
			<div class="rounded-4xl border p-6 px-8">
				<ReportIssue class="w-full max-w-full" />
			</div>
		</div>
	</div>
</section>

{#snippet card(header: string, content: string)}
	<Card.Root class="bg-background">
		<Card.Header class="pb-3">
			<CardDecorator>
				<Sparkles class="size-6 rounded-full" aria-hidden />
			</CardDecorator>

			<h3 class="mt-6 font-medium">{header}</h3>
		</Card.Header>

		<Card.Content>
			<p class="mt-3 text-sm">{content}</p>
		</Card.Content>
	</Card.Root>
{/snippet}

<WorkInProgress />
<WorkInProgress />
<WorkInProgress />
<WorkInProgress />
<WorkInProgress />
<WorkInProgress />
<WorkInProgress />
<WorkInProgress />
<WorkInProgress />
