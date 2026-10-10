import React from 'react';
import { Icon } from './Icon.jsx';
const STATUS = { success: 'circle-check', warning: 'clock', danger: 'circle-x', info: 'search', neutral: 'pencil' };
export function Badge({ tone = 'neutral', icon = true, children, style }) {
  const brand = tone === 'brand';
  const t = STATUS[tone] ? tone : 'neutral';
  const bg = brand ? 'var(--color-brand-primary)' : 'var(--status-' + t + '-bg)';
  const fg = brand ? 'var(--text-on-dark)' : 'var(--status-' + t + '-fg)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 24, padding: '0 10px', borderRadius: 'var(--radius-xs)', background: bg, color: fg, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', fontWeight: 600, whiteSpace: 'nowrap', ...style }}>
      {icon && !brand && <Icon name={STATUS[t]} size={13} />}
      {children}
    </span>
  );
}
