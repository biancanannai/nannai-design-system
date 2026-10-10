import * as React from 'react';
/**
 * Content container — white with #ECE6DA line, or a flat colour block.
 * @startingPoint section="Display" subtitle="Cards, KPIs, badges and tags" viewport="700x440"
 */
export interface CardProps {
  /** surface (white) · sunken (#FAF6EB) · block (#545933) · block-alt (#415062) · inverse (#381416 — header/footer only). Blocks use white text and square corners. @default "surface" */
  variant?: 'surface' | 'sunken' | 'block' | 'block-alt' | 'inverse';
  /** Inner padding in px. @default 24 */
  padding?: number | string;
  title?: string;
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Node rendered top-right. */
  action?: React.ReactNode;
  /** Small 16px square in the bottom-right corner (template motif), e.g. "var(--accent-square)". */
  accent?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
