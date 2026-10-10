/** KPI tile: overline label, Chap Light numeral, delta + caption. */
export interface KpiCardProps {
  label: string;
  /** Pre-formatted value, e.g. "R$ 482.910". */
  value: string;
  /** Pre-formatted change, e.g. "+12,4%". */
  delta?: string;
  /** Arrow direction. @default "up" */
  trend?: 'up' | 'down';
  /** Is the change good? Drives colour (#545933 good, #764141 bad). Defaults to trend === "up" — set true for falling churn/cost. */
  positive?: boolean;
  caption?: string;
  /** #545933 colour block — presentations and compositions only, never in dashboards. */
  highlight?: boolean;
  style?: import('react').CSSProperties;
}
export declare function KpiCard(props: KpiCardProps): JSX.Element;
