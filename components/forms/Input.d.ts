import * as React from 'react';
/**
 * Text field with label, hint and error.
 * @startingPoint section="Forms" subtitle="Inputs, selects and toggles" viewport="700x420"
 */
export interface InputProps {
  label?: string;
  hint?: string;
  /** Error message; turns border rose. */
  error?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  /** Leading Lucide icon name. */
  icon?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
