<script lang="ts">
	import { Button } from '$components/ui/button';
	import WorkInProgress from '$lib/components/pages/work-in-progress.svelte';
</script>

<div class="flex flex-col gap-8">
	<div class="flex w-full flex-col gap-4 lg:flex-row">
		<Button class="p-32">Einstempeln</Button>
		<Button class="p-32" disabled variant="destructive">Ausstempeln</Button>
	</div>
	<Button class="px-32" variant="outline">Sitzung ansehen</Button>
</div>

<!-- <WorkInProgress /> -->
