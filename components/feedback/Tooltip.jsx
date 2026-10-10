import React from 'react';
export function Tooltip({ content, placement = 'top', open, children }) {
  const [hover, setHover] = React.useState(false);
  const show = open ?? hover;
  const top = placement !== 'bottom';
  const pos = top ? { bottom: '100%', marginBottom: 10 } : { top: '100%', marginTop: 10 };
  return (
    <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ position: 'relative', display: 'inline-flex' }}>
      {children}
      <span role="tooltip" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%) translateY(' + (show ? 0 : top ? 4 : -4) + 'px)', ...pos,
        background: 'var(--color-brand-black)', color: '#FFFFFF', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', fontWeight: 500, lineHeight: 1.4, padding: '6px 10px', borderRadius: 'var(--radius-xs)', whiteSpace: 'nowrap',
        opacity: show ? 1 : 0, pointerEvents: 'none', transition: 'opacity var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)', zIndex: 50 }}>
        {content}
        <span aria-hidden="true" style={{ position: 'absolute', left: '50%', width: 8, height: 8, background: 'var(--color-brand-black)', transform: 'translateX(-50%) rotate(45deg)', ...(top ? { bottom: -4 } : { top: -4 }) }} />
      </span>
    </span>
  );
}
