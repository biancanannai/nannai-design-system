import React from 'react';
import { Icon } from '../display/Icon.jsx';
const ICON = { success: 'circle-check', info: 'info', warning: 'clock', danger: 'circle-x' };
export function Toast({ tone = 'success', title, message, onClose, action, width = 360 }) {
  const t = ICON[tone] ? tone : 'success';
  return (
    <div role="status" style={{ display: 'flex', alignItems: 'flex-start', gap: 12, width, maxWidth: '100%', padding: '14px 14px 14px 16px', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)', boxShadow: 'var(--shadow-md)', fontFamily: 'var(--font-body)', boxSizing: 'border-box' }}>
      <span style={{ width: 28, height: 28, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--status-' + t + '-bg)', color: 'var(--status-' + t + '-fg)', borderRadius: 'var(--radius-xs)' }}><Icon name={ICON[t]} size={15} /></span>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2, paddingTop: message ? 0 : 5 }}>
        {title && <span style={{ fontSize: 'var(--fs-ui)', fontWeight: 600, color: 'var(--text-body)' }}>{title}</span>}
        {message && <span style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)' }}>{message}</span>}
      </div>
      {action}
      {onClose && <button onClick={onClose} aria-label="Fechar" style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 4, margin: '2px -2px 0 0', display: 'flex' }}><Icon name="x" size={14} /></button>}
    </div>
  );
}
