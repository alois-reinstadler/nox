import type * as Dialog from '$lib/components/ui/dialog';

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
