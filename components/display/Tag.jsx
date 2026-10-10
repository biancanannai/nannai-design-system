import React from 'react';
import { Icon } from './Icon.jsx';
export function Tag({ selected = false, onClick, onRemove, children, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 30, padding: onRemove ? '0 8px 0 12px' : '0 12px', borderRadius: 'var(--radius-xs)',
        background: selected ? 'var(--color-brand-primary)' : hover && onClick ? 'var(--surface-sunken)' : 'var(--surface-card)',
        color: selected ? '#FFFFFF' : 'var(--text-heading)', border: '1px solid ' + (selected ? 'var(--color-brand-primary)' : 'var(--border-subtle)'),
        fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-sm)', fontWeight: 500, cursor: onClick ? 'pointer' : 'default', whiteSpace: 'nowrap', transition: 'background var(--duration-base) var(--ease-standard)', ...style }}>
      {children}
      {onRemove && <span onClick={e => { e.stopPropagation(); onRemove(); }} style={{ display: 'inline-flex', cursor: 'pointer', opacity: .7 }}><Icon name="x" size={14} /></span>}
    </span>
  );
}
