<script lang="ts">
	import ZeForm from './ze-form.svelte';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();
</script>

<ZeForm {data} />
