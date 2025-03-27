import { IsMobile } from '$lib/hooks/is-mobile.svelte.js';
import { getContext, setContext } from 'svelte';

import * as Dialog from '$lib/components/ui/dialog';
import * as Drawer from '$lib/components/ui/drawer';

import type { ComponentProps } from 'svelte';

export type CredenzaTriggerProps = ComponentProps<typeof Dialog.Trigger>;
export type CredenzaTitleProps = ComponentProps<typeof Dialog.Title>;
export type CredenzaHeaderProps = ComponentProps<typeof Dialog.Header>;
export type CredenzaContentProps = ComponentProps<typeof Dialog.Content>;
export type CredenzaDescriptionProps = ComponentProps<typeof Dialog.Description>;
export type CredenzaFooterProps = ComponentProps<typeof Dialog.Footer>;
export type CredenzaRootProps = ComponentProps<typeof Dialog.Root>;
export type CredenzaCloseProps = ComponentProps<typeof Dialog.Close>;
export type CredenzaOverlayProps = ComponentProps<typeof Dialog.Overlay>;

type Getter<T> = () => T;

export type CredenzaStateProps = {
	/**
	 * A getter function that returns the current open state of the Credenza.
	 * We use a getter function here to support `bind:open` on the `Credenza.Provider`
	 * component.
	 */
	open: Getter<boolean>;

	/**
	 * A function that sets the open state of the Credenza. To support `bind:open`, we need
	 * a source of truth for changing the open state to ensure it will be synced throughout
	 * the sub-components and any `bind:` references.
	 */
	setOpen: (open: boolean) => void;
};

class CredenzaState {
	readonly props: CredenzaStateProps;
	open = $derived.by(() => this.props.open());
	setOpen: CredenzaStateProps['setOpen'];
	#isMobile: IsMobile;

	constructor(props: CredenzaStateProps) {
		this.setOpen = props.setOpen;
		this.#isMobile = new IsMobile();
		this.props = props;
	}

	// Convenience getter for checking if the Credenza is mobile
	// without this, we would need to use `Credenza.isMobile.current` everywhere
	get isMobile() {
		return this.#isMobile.current;
	}

	get component() {
		return this.#isMobile.current ? Drawer : Dialog;
	}

	toggle = () => {
		this.setOpen(!this.open);
	};
}

const SYMBOL_KEY = 'scn-credenza';

/**
 * Instantiates a new `CredenzaState` instance and sets it in the context.
 *
 * @param props The constructor props for the `CredenzaState` class.
 * @returns  The `CredenzaState` instance.
 */
export function setCredenza(props: CredenzaStateProps): CredenzaState {
	return setContext(Symbol.for(SYMBOL_KEY), new CredenzaState(props));
}

/**
 * Retrieves the `CredenzaState` instance from the context. This is a class instance,
 * so you cannot destructure it.
 * @returns The `CredenzaState` instance.
 */
export function useCredenza(): CredenzaState {
	return getContext(Symbol.for(SYMBOL_KEY));
}
