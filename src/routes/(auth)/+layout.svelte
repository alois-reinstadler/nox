<script lang="ts">
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import Authentication from '$lib/img/authentication.avif';

	import type { Snippet } from 'svelte';

	const isMobile = new IsMobile();
	let { children }: Record<'children', Snippet> = $props();
</script>

<div class="background-overlay absolute inset-0 -z-50 h-full w-full"></div>

<div
	class="dark relative container grid h-dvh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<div
		class="relative hidden h-full flex-col items-center justify-center overflow-hidden p-10 lg:flex dark:border-r"
	>
		<header class="relative z-20 flex items-center text-lg font-medium">NOX</header>
		{#if !isMobile.current}
			<img
				src={Authentication}
				alt="Authentication"
				class="absolute inset-0 min-h-full min-w-full"
				loading="lazy"
			/>
			<div
				class="absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-b from-black/0 to-black to-60% opacity-90"
			></div>
		{/if}
		<div class="relative z-20 mt-auto">
			<blockquote class="space-y-2">
				<p class="text-lg">
					&ldquo;This library has saved me countless hours of work and helped me deliver stunning
					designs to my clients faster than ever before. Highly recommended!&rdquo;
				</p>
				<footer class="text-muted-foreground text-sm">Sofia Davis</footer>
			</blockquote>
		</div>
	</div>
	<div class="lg:p-8">
		{@render children()}
	</div>
</div>

<!-- <div
	class="bg-background absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,var(--sidebar-primary),rgba(255,255,255,0))]"
></div> -->
