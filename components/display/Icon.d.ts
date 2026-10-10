import * as React from 'react';
/** Lucide glyph rendered as a currentColor mask. */
export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "arrow-right", "users"). */
  name: string;
  /** Pixel size. @default 18 */
  size?: number;
  /** CSS color. @default "currentColor" */
  color?: string;
  /** Accessible label; omit for decorative icons. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
