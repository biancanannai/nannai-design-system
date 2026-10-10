import * as React from 'react';
/** Pill chip for filters, segments and removable selections. */
export interface TagProps {
  selected?: boolean;
  onClick?: () => void;
  /** Shows an × and calls back when pressed. */
  onRemove?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
