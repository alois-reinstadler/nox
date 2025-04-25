<script lang="ts">
	import ProgressiveBlur from '$lib/components/ext/progressive-blur/progressive-blur.svelte';
	import Marquee from '$lib/components/ext/marquee/marquee.svelte';

	import slamaLogo from '$lib/img/partners/slama.png';
	import veluxLogo from '$lib/img/partners/velux.png';
	import absLogo from '$lib/img/partners/abs.png';
	import bauderLogo from '$lib/img/partners/bauder.png';
	import eisenkiesLogo from '$lib/img/partners/eisenkies-2.png';
	import prefaLogo from '$lib/img/partners/prefa.png';
	import wuerthLogo from '$lib/img/partners/wuerth.png';

	const partners = [
		{
			name: 'Slama',
			logo: slamaLogo,
			height: '24'
		},
		{
			name: 'Velux',
			logo: veluxLogo,
			height: '24'
		},
		{
			name: 'ABS',
			logo: absLogo,
			height: '24'
		},
		{
			name: 'Bauder',
			logo: bauderLogo,
			height: '24'
		},
		{
			name: 'Eisenkies',
			logo: eisenkiesLogo,
			height: '24'
		},
		{
			name: 'Prefa',
			logo: prefaLogo,
			height: '24'
		},
		{
			name: 'Würth',
			logo: wuerthLogo,
			height: '24'
		}
	];
</script>

<div class="group bg-background relative w-full">
	<div class="flex flex-col-reverse items-center md:flex-row">
		<div class="md:max-w-44 md:border-r md:pr-6">
			<p class="py-4 text-end text-sm font-medium whitespace-nowrap md:py-0">
				Powered by <br class="hidden md:block" />
				the best.
			</p>
		</div>
		<!-- Checkout Logo Cloud Three  -->
		<!-- I have provided progresive blur snippet code & Marquee code -->
		<div class="relative py-6 md:w-[calc(100%-11rem)]">
			<Marquee>
				{#each partners as partner}
					<div class="flex dark:invert">
						<img class="mx-auto max-h-6" src={partner.logo} alt="{partner.name} Logo" />
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
