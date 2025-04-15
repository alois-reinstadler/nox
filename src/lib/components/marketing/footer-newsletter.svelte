<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
</script>

<section
	class="relative container flex w-full items-center justify-between gap-6 overflow-hidden px-6 py-12 md:py-16 lg:py-24 xl:py-32"
>
	<div class="flex flex-col gap-2">
		<span class="text-2xl font-bold">Join our newsletter</span>
		<p class="text-muted-foreground">Get exclusive news, features, and updates.</p>
	</div>

	<div class="flex flex-col gap-2">
		<Input id="newsletter" placeholder="Your name" />
		<Input id="newsletter" placeholder="Your email" />
		<Button>Subscribe</Button>
	</div>
</section>
