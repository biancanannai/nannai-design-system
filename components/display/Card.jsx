import React from 'react';

/**
 * Definição dos variantes visuais.
 * `dark: true` indica fundo escuro/saturado, onde o texto precisa
 * de tokens de contraste dedicados (não apenas "texto claro" genérico).
 */
const VARIANTS = {
  surface: {
    bg: 'var(--surface-card)',
    border: 'var(--border-subtle)',
    radius: 'var(--radius-xs)',
    dark: false,
  },
  sunken: {
    bg: 'var(--surface-sunken)',
    border: 'var(--border-subtle)',
    radius: 'var(--radius-xs)',
    dark: false,
  },
  block: {
    bg: 'var(--surface-block)',
    border: 'transparent',
    radius: 0,
    dark: true,
  },
  'block-alt': {
    bg: 'var(--surface-block-alt)',
    border: 'transparent',
    radius: 0,
    dark: true,
  },
  inverse: {
    bg: 'var(--surface-inverse)',
    border: 'transparent',
    radius: 0,
    dark: true,
  },
};

/**
 * Tokens de texto por tema. Separar "heading", "body" e "muted"
 * evita que eyebrow/título fiquem com a mesma cor nos variantes escuros
 * (perda de hierarquia) e garante contraste mínimo de leitura.
 */
const TEXT = {
  light: {
    heading: 'var(--text-heading)',
    body: 'var(--text-body)',
    muted: 'var(--text-muted)',
  },
  dark: {
    heading: 'var(--text-on-dark)',
    body: 'var(--text-on-dark)',
    muted: 'var(--text-on-dark-muted, rgba(255,255,255,0.72))',
  },
};

const cardStyles = {
  section: (v, padding, extra) => ({
    position: 'relative',
    background: v.bg,
    border: '1px solid ' + v.border,
    borderRadius: v.radius,
    padding,
    fontFamily: 'var(--font-body)',
    minWidth: 0,
    ...extra,
  }),
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 16,
  },
  headingGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    minWidth: 0,
  },
  eyebrow: (color) => ({
    fontSize: 'var(--fs-overline)',
    fontWeight: 600,
    letterSpacing: 'var(--tracking-overline)',
    textTransform: 'uppercase',
    color,
  }),
  title: (color) => ({
    margin: 0,
    fontFamily: 'var(--font-heading)',
    fontWeight: 400,
    fontSize: 'var(--fs-h3)',
    letterSpacing: 'var(--tracking-heading)',
    color,
  }),
  accent: (color) => ({
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 16,
    height: 16,
    background: color,
  }),
};

export function Card({
  variant = 'surface',
  padding = 24,
  title,
  eyebrow,
  action,
  accent,
  children,
  style,
}) {
  const v = VARIANTS[variant] || VARIANTS.surface;
  const text = v.dark ? TEXT.dark : TEXT.light;
  const hasHeader = Boolean(title || eyebrow || action);

  return (
    <section style={cardStyles.section(v, padding, { color: text.body, ...style })}>
      {hasHeader && (
        <header style={cardStyles.header}>
          <div style={cardStyles.headingGroup}>
            {eyebrow && <span style={cardStyles.eyebrow(text.muted)}>{eyebrow}</span>}
            {title && <h3 style={cardStyles.title(text.heading)}>{title}</h3>}
          </div>
          {action}
        </header>
      )}
      {children}
      {accent && <span aria-hidden="true" style={cardStyles.accent(accent)} />}
    </section>
  );
}
