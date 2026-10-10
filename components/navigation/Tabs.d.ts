/** Tab bar for sibling views — sliding indicator, optional icons and counts. */
export interface TabsProps {
  tabs?: Array<string | { value: string; label: string; count?: number; icon?: string }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** underline = page sections (#381416 sliding bar) · segmented = compact view switch inside cards/toolbars. @default "underline" */
  variant?: 'underline' | 'segmented';
  style?: import('react').CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
