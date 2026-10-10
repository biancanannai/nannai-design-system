import React from 'react';
import { Icon } from '../display/Icon.jsx';
export function IconButton({ icon, label, variant = 'ghost', size = 'md', disabled = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const d = { sm: 32, md: 40, lg: 48 }[size] || 40;
  const v = {
    ghost: { bg: hover ? 'var(--state-hover-overlay)' : 'transparent', fg: 'var(--text-heading)', bd: 'transparent' },
    outline: { bg: hover ? 'var(--surface-sunken)' : 'var(--surface-card)', fg: 'var(--text-heading)', bd: 'var(--border-subtle)' },
    soft: { bg: 'var(--surface-sunken)', fg: 'var(--text-heading)', bd: 'var(--border-subtle)' },
    primary: { bg: hover ? 'var(--action-bg-hover)' : 'var(--action-bg)', fg: 'var(--action-fg)', bd: 'transparent' },
  }[variant] || {};
  return (
    <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: d, height: d, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 0, flex: 'none',
        background: v.bg, color: v.fg, border: '1px solid ' + v.bd, borderRadius: 'var(--radius-xs)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
        transition: 'background var(--duration-base) var(--ease-standard)', ...style }}>
      {typeof icon === 'string' ? <Icon name={icon} size={size === 'sm' ? 16 : 18} /> : icon}
    </button>
  );
}
