/** Square checkbox with label. */
export interface CheckboxProps {
  label?: string;
  /** Controlled state. */
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
