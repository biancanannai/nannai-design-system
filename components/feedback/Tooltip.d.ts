import * as React from 'react';
/** Short hover hint in black. */
export interface TooltipProps {
  content: React.ReactNode;
  /** @default "top" */
  placement?: 'top' | 'bottom';
  /** Force visible (for docs). */
  open?: boolean;
  children?: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
