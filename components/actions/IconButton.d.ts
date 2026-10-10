import * as React from 'react';
/** Round icon-only button. */
export interface IconButtonProps {
  /** Lucide icon name or a custom node. */
  icon: string | React.ReactNode;
  /** Required accessible label (also tooltip title). */
  label: string;
  /** @default "ghost" */
  variant?: 'ghost' | 'outline' | 'soft' | 'primary';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
