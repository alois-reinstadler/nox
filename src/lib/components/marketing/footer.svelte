<script lang="ts">
	import FooterNewsletter from './footer-newsletter.svelte';

	const tagline = 'Components made easy.';

	const copyright = '© 2024 Shadcnblocks.com. All rights reserved.';
	const bottomLinks = [
		{ text: 'Terms and Conditions', url: '#' },
		{ text: 'Privacy Policy', url: '#' }
	];

	const menuItems = [
		{
			title: 'Product',
			links: [
				{ text: 'Overview', url: '#' },
				{ text: 'Pricing', url: '#' },
				{ text: 'Marketplace', url: '#' },
				{ text: 'Features', url: '#' },
				{ text: 'Integrations', url: '#' },
				{ text: 'Pricing', url: '#' }
			]
		},
		{
			title: 'Company',
			links: [
				{ text: 'About', url: '#' },
				{ text: 'Team', url: '#' },
				{ text: 'Blog', url: '#' },
				{ text: 'Careers', url: '#' },
				{ text: 'Contact', url: '#' },
				{ text: 'Privacy', url: '#' }
			]
		},
		{
			title: 'Resources',
			links: [
				{ text: 'Help', url: '#' },
				{ text: 'Sales', url: '#' },
				{ text: 'Advertise', url: '#' }
			]
		},
		{
			title: 'Social',
			links: [
				{ text: 'Twitter', url: '#' },
				{ text: 'Instagram', url: '#' },
				{ text: 'LinkedIn', url: '#' }
			]
		}
	];
</script>

<FooterNewsletter />
<FooterNewsletter />

<footer class="w-full py-32 md:border-t">
	<div class="container grid grid-cols-2 gap-8 px-6 lg:grid-cols-6">
		<div class="col-span-2 mb-8 lg:mb-0">
			<div class="flex items-center lg:justify-start">
				<a href="/" class="font-display text-2xl font-black">
					<span class="text-yellow-300">NOX</span>
					<span>DEV</span>
				</a>
			</div>
			<p class="mt-4 font-bold">{tagline}</p>
		</div>
		{#each menuItems as item}
			<div>
				<h3 class="mb-4 font-bold">{item.title}</h3>
				<ul class="text-muted-foreground space-y-4">
					{#each item.links as link}
						<li class="hover:text-primary font-medium">
							<a href={link.url}>{link.text}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
	<div
		class="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center"
	>
		<p>{copyright}</p>
		<ul class="flex gap-4">
			{#each bottomLinks as link}
				<li class="hover:text-primary underline">
					<a href={link.url}>{link.text}</a>
				</li>
			{/each}
		</ul>
	</div>
</footer>
