import React from 'react';
const SIZES = { sm: { h: 32, px: 14, fs: 10.5 }, md: { h: 40, px: 20, fs: 11 }, lg: { h: 48, px: 28, fs: 12 } };
export function Button({ variant = 'primary', size = 'md', disabled = false, fullWidth = false, iconLeft, iconRight, type = 'button', onClick, children, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const V = {
    primary: { bg: hover ? 'var(--action-bg-hover)' : 'var(--action-bg)', fg: 'var(--action-fg)', bd: 'transparent' },
    secondary: { bg: hover ? 'var(--surface-sunken)' : 'var(--surface-card)', fg: 'var(--text-heading)', bd: 'var(--text-heading)' },
    soft: { bg: hover ? 'var(--border-subtle)' : 'var(--surface-sunken)', fg: 'var(--text-heading)', bd: 'var(--border-subtle)' },
    ghost: { bg: hover ? 'var(--state-hover-overlay)' : 'transparent', fg: 'var(--text-heading)', bd: 'transparent' },
  };
  const v = V[variant] || V.primary;
  const isLink = variant === 'link';
  return (
    <button type={type} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        height: isLink ? 'auto' : s.h, padding: isLink ? 0 : '0 ' + s.px + 'px', width: fullWidth ? '100%' : undefined,
        background: isLink ? 'transparent' : v.bg, color: isLink ? 'var(--text-heading)' : v.fg,
        border: isLink ? 'none' : '1px solid ' + v.bd, borderRadius: 'var(--radius-xs)',
        fontFamily: 'var(--font-body)', fontSize: s.fs, fontWeight: 600, letterSpacing: 'var(--tracking-button)', textTransform: 'uppercase',
        textDecoration: isLink ? 'underline' : 'none', textUnderlineOffset: 4, textDecorationColor: hover ? 'var(--text-heading)' : 'var(--border-strong)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1, whiteSpace: 'nowrap',
        transform: press && !disabled ? 'scale(0.985)' : 'none',
        transition: 'background var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
        ...style,
      }}>
      {iconLeft}{children}{iconRight}
    </button>
  );
}
