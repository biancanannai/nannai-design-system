import * as React from 'react';
/** Status label: soft background + text + icon — meaning never relies on colour alone. */
export interface BadgeProps {
  /** success = Ativo · warning = Pendente · danger = Inativo · info = Em análise · neutral = Rascunho · brand = VIP (#381416). @default "neutral" */
  tone?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'brand';
  /** Leading status icon (not shown for brand). @default true */
  icon?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
