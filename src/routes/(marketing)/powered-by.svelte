<script lang="ts">
	import ProgressiveBlur from '$lib/components/ext/progressive-blur/progressive-blur.svelte';
	import Marquee from '$lib/components/ext/marquee/marquee.svelte';
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
				<div class="flex">
					<img
						class="mx-auto h-5 w-fit dark:invert"
						src="https://html.tailus.io/blocks/customers/nvidia.svg"
						alt="Nvidia Logo"
						height="20"
						width="auto"
					/>
				</div>
				<div class="flex">
					<img
						class="mx-auto h-4 w-fit dark:invert"
						src="https://html.tailus.io/blocks/customers/column.svg"
						alt="Column Logo"
						height="16"
						width="auto"
					/>
				</div>
				<div class="flex">
					<img
						class="mx-auto h-4 w-fit dark:invert"
						src="https://html.tailus.io/blocks/customers/github.svg"
						alt="GitHub Logo"
						height="16"
						width="auto"
					/>
				</div>
				<div class="flex">
					<img
						class="mx-auto h-5 w-fit dark:invert"
						src="https://html.tailus.io/blocks/customers/nike.svg"
						alt="Nike Logo"
						height="20"
						width="auto"
					/>
				</div>
				<div class="flex">
					<img
						class="mx-auto h-5 w-fit dark:invert"
						src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
						alt="Lemon Squeezy Logo"
						height="20"
						width="auto"
					/>
				</div>
				<div class="flex">
					<img
						class="mx-auto h-4 w-fit dark:invert"
						src="https://html.tailus.io/blocks/customers/laravel.svg"
						alt="Laravel Logo"
						height="16"
						width="auto"
					/>
				</div>
				<div class="flex">
					<img
						class="mx-auto h-7 w-fit dark:invert"
						src="https://html.tailus.io/blocks/customers/lilly.svg"
						alt="Lilly Logo"
						height="28"
						width="auto"
					/>
				</div>
				<div class="flex">
					<img
						class="mx-auto h-6 w-fit dark:invert"
						src="https://html.tailus.io/blocks/customers/openai.svg"
						alt="OpenAI Logo"
						height="24"
						width="auto"
					/>
				</div>
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
