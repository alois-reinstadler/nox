<script lang="ts">
	import { page } from '$app/state';
	import { siteConfig } from '$lib/config/site.js';

	let { title = siteConfig.name }: { title?: string } = $props();

	const pageTitle = $derived(
		page.data?.title ? `${page.data.title} - ${siteConfig.name}` : siteConfig.name
	);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={siteConfig.description} />
	<meta name="keywords" content={siteConfig.keywords} />
	<meta name="author" content="alrein" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={siteConfig.url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={siteConfig.description} />
	<meta name="twitter:image" content="https://shadcn-svelte.com/og.png" />
	<meta name="twitter:image:alt" content={siteConfig.name} />
	<meta name="twitter:creator" content="huntabyte" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={siteConfig.url + page.url.pathname} />
	<meta property="og:image" content="https://shadcn-svelte.com/og.png" />
	<meta property="og:image:alt" content={siteConfig.name} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:site_name" content={siteConfig.name} />
	<meta property="og:locale" content="EN_US" />
	<link rel="shortcut icon" href="/favicon-16x16.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>
