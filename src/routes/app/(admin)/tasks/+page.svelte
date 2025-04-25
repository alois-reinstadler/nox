<script lang="ts">
	import { Button, buttonVariants } from '$components/ui/button';
	import { Separator } from '$components/ui/separator';

	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';

	import Plus from '$lib/animated-icons/plus.svelte';

	const tasks = $state<Task[]>([]);

	type Task = {
		title: string;
		description?: string;
	};

	function submitTask() {}
</script>

<section class="container mx-auto flex flex-col gap-4">
	<div class="flex justify-between">
		<div class="flex flex-col gap-2">
			<h2 class="text-3xl leading-tight font-bold tracking-tight">Deine Aufgaben</h2>
			<p class="text-muted-foreground">Add or remove tasks to better organize your efforts</p>
		</div>

		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}
				><Plus /><span>Create Task</span></Dialog.Trigger
			>
			<Dialog.Content class="sm:max-w-[425px]">
				<Dialog.Header>
					<Dialog.Title>Create Task</Dialog.Title>
					<Dialog.Description>
						Make changes to your profile here. Click save when you're done.
					</Dialog.Description>
				</Dialog.Header>
				<div class="grid gap-4 py-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="title" class="text-right">Title</Label>
						<Input id="title" class="col-span-3" />
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="username" class="text-right">Username</Label>
						<Input id="username" value="@peduarte" class="col-span-3" />
					</div>
				</div>
				<Dialog.Footer>
					<Button type="submit" onsubmit={submitTask}>Save changes</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</div>

	<ul class="flex items-center justify-center">
		{#if tasks.length}
			{#each tasks as task (task.title)}
				<li class="flex w-full gap-2">
					<span>{task.title}</span>
					<Separator orientation="vertical" />
					<span class="text-muted-foreground">{task.description}</span>
				</li>
			{/each}
		{:else}
			<div class="w-full rounded-2xl border border-dashed py-24 text-center">
				No tasks here yet.
			</div>
		{/if}
	</ul>
</section>
