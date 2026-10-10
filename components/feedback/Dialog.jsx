import React from 'react';
import { IconButton } from '../actions/IconButton.jsx';
export function Dialog({ open = true, title, eyebrow, onClose, footer, width = 480, inline = false, children }) {
  if (!open) return null;
  const panel = (
    <div role="dialog" aria-modal="true" style={{ width, maxWidth: '100%', boxSizing: 'border-box', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)', boxShadow: 'var(--shadow-lg)', fontFamily: 'var(--font-body)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, padding: '24px 24px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {eyebrow && <span style={{ fontSize: 'var(--fs-overline)', fontWeight: 600, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{eyebrow}</span>}
          {title && <h2 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'var(--fs-h2)', letterSpacing: 'var(--tracking-heading)', color: 'var(--text-heading)' }}>{title}</h2>}
        </div>
        {onClose && <IconButton icon="x" label="Fechar" size="sm" onClick={onClose} style={{ margin: '-6px -8px 0 0' }} />}
      </div>
      <div style={{ padding: '12px 24px 24px', fontSize: 'var(--fs-body)', lineHeight: 1.6, color: 'var(--text-muted)' }}>{children}</div>
      {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '16px 24px', borderTop: '1px solid var(--border-subtle)' }}>{footer}</div>}
    </div>
  );
  if (inline) return panel;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'var(--scrim)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, zIndex: 1000 }}>
      <div onClick={e => e.stopPropagation()}>{panel}</div>
    </div>
  );
}
