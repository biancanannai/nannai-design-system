import React from 'react';
export function Radio({ options = [], value, defaultValue, onChange, name, direction = 'column' }) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value ?? inner;
  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: direction, gap: direction === 'row' ? 24 : 12, fontFamily: 'var(--font-body)' }}>
      {options.map(o => {
        const v = typeof o === 'string' ? o : o.value, l = typeof o === 'string' ? o : o.label, on = cur === v;
        return (
          <label key={v} onClick={() => { setInner(v); onChange && onChange(v); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 'var(--fs-ui)', color: 'var(--text-body)' }}>
            <span role="radio" aria-checked={on} style={{ width: 18, height: 18, flex: 'none', borderRadius: '50%', border: '1px solid ' + (on ? 'var(--action-bg)' : 'var(--border-strong)'), background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              {on && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--action-bg)' }} />}
            </span>
            {l}
          </label>
        );
      })}
    </div>
  );
}
