(() => {
const { Input, IconButton, Button, Icon } = window.NANNAIDesignSystem_ea3e45;
function Topbar({ title, eyebrow, actions }) {
  return (
    <header style={{ padding: '28px var(--page-margin) 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 'var(--fs-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-body)', marginBottom: 24 }}>
        <span>{eyebrow}</span><span style={{ flex: 1, height: 1, background: 'var(--text-body)', opacity: .35 }} /><span>08/10/2026</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h1 style={{ fontSize: 'var(--fs-h1)' }}>{title}</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Input icon="search" placeholder="Buscar clientes, campanhas…" size="sm" style={{ width: 260 }} />
        <IconButton icon="bell" label="Notificações" variant="outline" size="sm" />
        {actions}
      </div>
      </div>
    </header>
  );
}
window.Topbar = Topbar;
})();
