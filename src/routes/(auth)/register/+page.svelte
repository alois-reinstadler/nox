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

<div class="flex flex-col space-y-2 text-center">
	<h1 class="text-2xl font-semibold tracking-tight">Create an account</h1>
	<p class="text-muted-foreground text-sm">Enter your email below to create your account</p>
</div>

<div class="grid gap-6">
	<form bind:this={formRef} {onsubmit}>
		<div class="grid gap-2">
			<div class="grid grid-cols-2 gap-2">
				<div class="grid gap-2">
					<Label class="sr-only" for="firstName">First name</Label>
					<Input
						id="firstName"
						placeholder="First name"
						type="text"
						autocapitalize="on"
						autocomplete="name"
						autocorrect="off"
						disabled={isLoading}
					/>
				</div>

				<div class="grid gap-2">
					<Label class="sr-only" for="lastName">Last name</Label>
					<Input
						id="lastName"
						placeholder="Last name"
						type="text"
						autocapitalize="on"
						autocomplete="name"
						autocorrect="off"
						disabled={isLoading}
					/>
				</div>
			</div>

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
					placeholder="Secure password"
					type="password"
					autocapitalize="none"
					autocomplete="new-password"
					autocorrect="off"
					disabled={isLoading}
				/>
			</div>
			<div class="grid gap-2">
				<Label class="sr-only" for="password">Password</Label>
				<Input
					id="passwordConfirm"
					placeholder="Confirm password"
					type="password"
					autocapitalize="none"
					autocomplete="off"
					autocorrect="off"
					disabled={isLoading}
				/>
			</div>
			<Button type="submit" disabled={isLoading}>
				<span>Sign up with E-Mail</span>
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
