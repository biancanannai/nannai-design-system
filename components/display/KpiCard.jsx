import React from 'react';
import { Icon } from './Icon.jsx';
export function KpiCard({ label, value, delta, trend = 'up', positive, caption, highlight = false, style }) {
  const dark = highlight;
  const good = positive ?? trend === 'up';
  const trendColor = dark ? 'var(--text-on-dark)' : good ? 'var(--chart-positive)' : 'var(--color-brand-primary-tone)';
  return (
    <div style={{ position: 'relative', background: dark ? 'var(--surface-block)' : 'var(--surface-card)', border: '1px solid ' + (dark ? 'transparent' : 'var(--border-subtle)'), borderRadius: dark ? 0 : 'var(--radius-xs)', padding: 24, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-body)', minWidth: 0, ...style }}>
      <span style={{ fontSize: 'var(--fs-overline)', fontWeight: 600, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: dark ? 'var(--text-on-dark)' : 'var(--text-muted)' }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-kpi)', fontWeight: 300, lineHeight: 1.1, color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)', fontVariantNumeric: 'tabular-nums', overflowWrap: 'anywhere' }}>{value}</span>
      {(delta || caption) && (
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--fs-body-sm)', color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)', flexWrap: 'wrap' }}>
          {delta && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, color: trendColor, fontWeight: 600 }}><Icon name={trend === 'down' ? 'arrow-down-right' : 'arrow-up-right'} size={14} />{delta}</span>}
          {caption}
        </span>
      )}
      {dark && <span aria-hidden="true" style={{ position: 'absolute', right: 0, bottom: 0, width: 14, height: 14, background: 'var(--accent-square)' }} />}
    </div>
  );
}
