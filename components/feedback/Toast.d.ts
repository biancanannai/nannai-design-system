import * as React from 'react';
/** Transient confirmation — white surface, status icon in its soft tint. */
export interface ToastProps {
  /** Icon + tint, same palette as Badge. @default "success" */
  tone?: 'success' | 'info' | 'warning' | 'danger';
  title?: string;
  message?: string;
  onClose?: () => void;
  action?: React.ReactNode;
  /** CSS width; never exceeds its container. @default 360 */
  width?: number | string;
}
export declare function Toast(props: ToastProps): JSX.Element;
