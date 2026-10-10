import * as React from 'react';
/**
 * NANNAI button — uppercase tracked label, 2px corners.
 * @startingPoint section="Actions" subtitle="Primary, secondary, soft, ghost & link buttons" viewport="700x260"
 */
export interface ButtonProps {
  /** primary = #381416 fill; secondary = white + #381416 outline; soft = cream + #ECE6DA line; ghost = text; link = underlined. @default "primary" */
  variant?: 'primary' | 'secondary' | 'soft' | 'ghost' | 'link';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
