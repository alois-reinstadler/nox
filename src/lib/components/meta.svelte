<script lang="ts" module>
	export type MetaProps = Partial<{
		title: string;
		description: string;
		url: string;
		image: string;
		keywords: string | string[];
	}>;

	function parseKeywords(keywords?: string | string[]) {
		if (Array.isArray(keywords)) {
			if (keywords.length > 0) return keywords.join(',');
			return;
		}

		return keywords;
	}
</script>

<script lang="ts">
	let { title, description, url, image, keywords }: MetaProps = $props();
	let keywordsValue = parseKeywords(keywords);
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
		<meta name="title" content={title} />
		<meta property="og:title" content={title} />
		<meta property="twitter:title" content={title} />
	{/if}

	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
		<meta property="twitter:description" content={description} />
	{/if}

	{#if url}
		<meta property="og:url" content={url} />
		<meta property="twitter:url" content={url} />
	{/if}

	{#if image}
		<meta property="og:image" content={image} />
		<meta property="twitter:image" content={image} />
	{/if}

	{#if keywordsValue}
		<meta name="keywords" content={keywordsValue} />
	{/if}

	<meta property="og:type" content="website" />
	<meta property="twitter:card" content="summary_large_image" />
</svelte:head>
