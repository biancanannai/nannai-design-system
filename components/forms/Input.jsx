import React from 'react';
import { Icon } from '../display/Icon.jsx';
function Field({ label, hint, error, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
      {label && <span style={{ fontSize: 'var(--fs-body-sm)', fontWeight: 600, color: 'var(--text-body)' }}>{label}</span>}
      {children}
      {(error || hint) && <span style={{ fontSize: 'var(--fs-caption)', color: error ? 'var(--text-heading)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </label>
  );
}
export function Input({ label, hint, error, placeholder, value, defaultValue, onChange, type = 'text', icon, size = 'md', disabled = false, style }) {
  const [focus, setFocus] = React.useState(false);
  const h = { sm: 32, md: 40, lg: 48 }[size] || 40;
  return (
    <Field label={label} hint={hint} error={error}>
      <span style={{ position: 'relative', display: 'flex', alignItems: 'center', ...style }}>
        {icon && <span style={{ position: 'absolute', left: 12, color: 'var(--text-muted)', display: 'flex' }}><Icon name={icon} size={16} /></span>}
        <input type={type} placeholder={placeholder} value={value} defaultValue={defaultValue} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ width: '100%', height: h, padding: icon ? '0 14px 0 38px' : '0 14px', background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
            border: '1px solid ' + (error ? 'var(--border-error)' : focus ? 'var(--border-focus)' : 'var(--border-subtle)'), borderRadius: 'var(--radius-xs)',
            fontFamily: 'var(--font-body)', fontSize: 'var(--fs-ui)', color: 'var(--text-body)', outline: 'none', opacity: disabled ? 0.6 : 1,
            boxShadow: focus ? 'var(--focus-ring)' : 'none',
            transition: 'border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)' }} />
      </span>
    </Field>
  );
}
