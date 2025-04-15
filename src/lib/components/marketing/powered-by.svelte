<script lang="ts">
	import ProgressiveBlur from '$lib/components/ext/progressive-blur/progressive-blur.svelte';
	import Marquee from '$lib/components/ext/marquee/marquee.svelte';

	const partners = [
		{
			name: 'NVIDIA',
			logo: 'https://html.tailus.io/blocks/customers/nvidia.svg',
			height: '20'
		},
		{
			name: 'Column',
			logo: 'https://html.tailus.io/blocks/customers/column.svg',
			height: '16'
		},
		{
			name: 'GitHub',
			logo: 'https://html.tailus.io/blocks/customers/github.svg',
			height: '16'
		},
		{
			name: 'Nike',
			logo: 'https://html.tailus.io/blocks/customers/nike.svg',
			height: '20'
		},
		{
			name: 'Lemon Squeezy',
			logo: 'https://html.tailus.io/blocks/customers/lemonsqueezy.svg',
			height: '20'
		},
		{
			name: 'Laravel',
			logo: 'https://html.tailus.io/blocks/customers/laravel.svg',
			height: '16'
		},
		{
			name: 'Lilly',
			logo: 'https://html.tailus.io/blocks/customers/lilly.svg',
			height: '28'
		},
		{
			name: 'OpenAI',
			logo: 'https://html.tailus.io/blocks/customers/openai.svg',
			height: '32'
		}
	];
</script>

<div class="group bg-background relative w-full">
	<div class="flex flex-col items-center md:flex-row">
		<div class="md:max-w-44 md:border-r md:pr-6">
			<p class="text-end text-sm font-medium whitespace-nowrap">Powered by</p>
			<p class="text-end text-sm font-medium whitespace-nowrap">the best.</p>
		</div>
		<!-- Checkout Logo Cloud Three  -->
		<!-- I have provided progresive blur snippet code & Marquee code -->
		<div class="relative py-6 md:w-[calc(100%-11rem)]">
			<Marquee>
				{#each partners as partner}
					<div class="flex max-h-24">
						<img
							class="mx-auto w-fit dark:invert"
							src={partner.logo}
							alt="{partner.name} Logo"
							height={partner.height}
						/>
					</div>
				{/each}
			</Marquee>

			<div class="from-background absolute inset-y-0 left-0 w-20 bg-linear-to-r"></div>
			<div class="from-background absolute inset-y-0 right-0 w-20 bg-linear-to-l"></div>
			<ProgressiveBlur
				class="pointer-events-none absolute top-0 left-0 z-50 h-full w-20"
				direction="left"
				blurIntensity={1}
			/>
			<ProgressiveBlur
				class="pointer-events-none absolute top-0 right-0 z-50 h-full w-20"
				direction="right"
				blurIntensity={1}
			/>
		</div>
	</div>
</div>
