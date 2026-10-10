/** Radio group — single choice from a few visible options. */
export interface RadioProps {
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  /** @default "column" */
  direction?: 'row' | 'column';
}
export declare function Radio(props: RadioProps): JSX.Element;
