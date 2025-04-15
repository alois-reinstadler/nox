<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	import Google from '../google-logo.svelte';

	let isLoading = $state(false);
	let formRef = $state<HTMLFormElement | null>(null);

	function onsubmit(event: Event) {
		event.preventDefault();
		console.log(formRef?.value);
	}
</script>

<!-- <Button
	href="/register"
	variant="ghost"
	class="font-display absolute top-4 right-4 md:top-8 md:right-8"
>
	Register
</Button> -->

<div class="flex flex-col gap-2 text-center">
	<h1 class="text-2xl font-semibold tracking-tight">Login to your account</h1>
	<p class="text-muted-foreground text-sm">
		Enter your email and password to login to your account
	</p>
</div>
<div class="grid gap-6">
	<form bind:this={formRef} {onsubmit}>
		<div class="grid gap-2">
			<div class="grid gap-2">
				<Label class="sr-only" for="email">Email</Label>
				<Input
					id="email"
					placeholder="name@example.com"
					type="email"
					autocapitalize="none"
					autocomplete="email"
					autocorrect="off"
					disabled={isLoading}
				/>
			</div>
			<div class="grid gap-2">
				<Label class="sr-only" for="password">Password</Label>
				<Input
					id="password"
					placeholder="Your password"
					type="password"
					autocapitalize="none"
					autocomplete="current-password"
					autocorrect="off"
					disabled={isLoading}
				/>
			</div>
			<Button type="submit" disabled={isLoading}>
				<span>Sign in with E-Mail</span>
			</Button>
		</div>
	</form>
	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t"></span>
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background text-muted-foreground px-2">Or continue with</span>
		</div>
	</div>
	<Button href="/login/google" variant="outline" type="button" disabled={isLoading}>
		<Google class="h-4 w-4" />
		<span>Google</span>
	</Button>
</div>
<p class="text-muted-foreground px-8 text-center text-sm">
	By clicking continue, you agree to our
	<span class="whitespace-nowrap">
		<a href="/terms" class="hover:text-primary underline underline-offset-4">Terms of Service</a>
		and
		<a href="/privacy" class="hover:text-primary underline underline-offset-4">Privacy Policy</a>.
	</span>
</p>
