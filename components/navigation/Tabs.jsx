import React from 'react';
import { Icon } from '../display/Icon.jsx';
export function Tabs({ tabs = [], value, defaultValue, onChange, variant = 'underline', style }) {
  const norm = tabs.map(t => typeof t === 'string' ? { value: t, label: t } : t);
  const [inner, setInner] = React.useState(defaultValue ?? (norm[0] && norm[0].value));
  const cur = value ?? inner;
  const refs = React.useRef({});
  const [bar, setBar] = React.useState({ left: 0, width: 0 });
  const [hover, setHover] = React.useState(null);
  React.useLayoutEffect(() => {
    const el = refs.current[cur];
    if (el) setBar({ left: el.offsetLeft, width: el.offsetWidth });
  }, [cur, tabs.length, variant]);
  const seg = variant === 'segmented';
  const pick = v => { setInner(v); onChange && onChange(v); };
  return (
    <div role="tablist" style={{ position: 'relative', display: seg ? 'inline-flex' : 'flex', gap: seg ? 0 : 32, padding: seg ? 4 : 0,
      background: seg ? 'var(--surface-sunken)' : 'transparent', border: seg ? '1px solid var(--border-subtle)' : 'none',
      borderBottom: seg ? '1px solid var(--border-subtle)' : '1px solid var(--border-subtle)', borderRadius: seg ? 'var(--radius-xs)' : 0, fontFamily: 'var(--font-body)', ...style }}>
      <span aria-hidden="true" style={seg
        ? { position: 'absolute', top: 4, bottom: 4, left: bar.left, width: bar.width, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)', borderRadius: 'var(--radius-xs)', transition: 'left var(--duration-slow) var(--ease-out), width var(--duration-slow) var(--ease-out)', boxSizing: 'border-box' }
        : { position: 'absolute', bottom: -1, height: 2, left: bar.left, width: bar.width, background: 'var(--color-brand-primary)', transition: 'left var(--duration-slow) var(--ease-out), width var(--duration-slow) var(--ease-out)' }} />
      {norm.map(t => {
        const on = t.value === cur, hv = hover === t.value && !on;
        return (
          <button key={t.value} ref={el => { refs.current[t.value] = el; }} role="tab" aria-selected={on} onClick={() => pick(t.value)}
            onMouseEnter={() => setHover(t.value)} onMouseLeave={() => setHover(null)}
            style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer',
              padding: seg ? '0 16px' : '14px 0 13px', height: seg ? 32 : 'auto',
              fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', fontWeight: 600, letterSpacing: 'var(--tracking-button)', textTransform: 'uppercase',
              color: on ? 'var(--text-heading)' : hv ? 'var(--text-body)' : 'var(--text-muted)', transition: 'color var(--duration-base) var(--ease-standard)' }}>
            {t.icon && <Icon name={t.icon} size={15} />}
            {t.label}
            {t.count != null && <span style={{ minWidth: 20, height: 18, padding: '0 6px', boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-xs)', fontSize: 10.5, letterSpacing: 0, fontVariantNumeric: 'tabular-nums',
              background: on ? 'var(--color-brand-primary)' : 'var(--surface-sunken)', color: on ? '#FFFFFF' : 'var(--text-muted)', border: on ? 'none' : '1px solid var(--border-subtle)', transition: 'background var(--duration-base) var(--ease-standard)' }}>{t.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
