import React from 'react';
export function Switch({ label, checked, defaultChecked = false, onChange, disabled = false }) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => { if (disabled) return; setInner(!on); onChange && onChange(!on); };
  return (
    <label onClick={toggle} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-ui)', color: 'var(--text-body)' }}>
      <span role="switch" aria-checked={on} style={{ width: 36, height: 20, borderRadius: 'var(--radius-pill)', flex: 'none', position: 'relative', background: on ? 'var(--action-bg)' : 'var(--border-subtle)', transition: 'background var(--duration-base) var(--ease-standard)' }}>
        <span style={{ position: 'absolute', top: 3, left: on ? 19 : 3, width: 14, height: 14, borderRadius: '50%', background: '#FFFFFF', boxShadow: 'var(--shadow-xs)', transition: 'left var(--duration-base) var(--ease-out)' }} />
      </span>
      {label}
    </label>
  );
}
