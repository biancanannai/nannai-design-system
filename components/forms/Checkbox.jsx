import React from 'react';
import { Icon } from '../display/Icon.jsx';
export function Checkbox({ label, checked, defaultChecked = false, onChange, disabled = false }) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => { if (disabled) return; setInner(!on); onChange && onChange(!on); };
  return (
    <label onClick={toggle} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-ui)', color: 'var(--text-body)' }}>
      <span role="checkbox" aria-checked={on} style={{ width: 18, height: 18, flex: 'none', borderRadius: 'var(--radius-xs)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: on ? 'var(--action-bg)' : 'var(--surface-card)', border: '1px solid ' + (on ? 'var(--action-bg)' : 'var(--border-strong)'), color: 'var(--action-fg)',
        transition: 'background var(--duration-fast) var(--ease-standard)' }}>
        {on && <Icon name="check" size={12} />}
      </span>
      {label}
    </label>
  );
}
