import React from 'react';
const CDN='https://unpkg.com/lucide-static@0.460.0/icons/';
export function Icon({ name, size = 18, color = 'currentColor', label, style }) {
  const url = 'url(' + CDN + name + '.svg)';
  return (
    <span role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}
      style={{ display: 'inline-block', flex: 'none', width: size, height: size, background: color,
        WebkitMask: url + ' center / contain no-repeat', mask: url + ' center / contain no-repeat', ...style }} />
  );
}
