import * as React from 'react';
/** Modal dialog over a burgundy-tinted scrim. */
export interface DialogProps {
  /** @default true */
  open?: boolean;
  title?: string;
  eyebrow?: string;
  onClose?: () => void;
  /** Action row (Buttons), right-aligned on a cream strip. */
  footer?: React.ReactNode;
  /** @default 480 */
  width?: number;
  /** Render the panel in place without scrim (for docs / previews). */
  inline?: boolean;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
