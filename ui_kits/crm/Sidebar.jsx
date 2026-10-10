(() => {
const { Icon } = window.NANNAIDesignSystem_ea3e45;
const NAV = [
  { id: 'overview', label: 'Visão geral', icon: 'layout-dashboard' },
  { id: 'clients', label: 'Clientes', icon: 'users' },
  { id: 'campaigns', label: 'Campanhas', icon: 'send' },
  { id: 'reports', label: 'Relatórios', icon: 'file-text', disabled: true },
];
function Sidebar({ route, onNavigate }) {
  return (
    <aside style={{ width: 'var(--sidebar-width)', flex: 'none', background: 'var(--surface-sunken)', borderRight: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', padding: '32px 20px 24px', gap: 40 }}>
      <img src="../../assets/logo/nannai-burgundy.png" alt="NANNAI" style={{ height: 'calc(var(--logo-h-sm) * var(--logo-k-master))', width: 'auto', alignSelf: 'flex-start', marginLeft: 14 }} />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span className="nn-overline" style={{ padding: '0 12px 10px' }}>CRM</span>
        {NAV.map(n => <NavItem key={n.id} item={n} active={route === n.id} onClick={() => !n.disabled && onNavigate(n.id)} />)}
      </nav>
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12, padding: '16px 12px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <span style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--fs-body-sm)', fontWeight: 500 }}>MS</span>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3 }}>
          <span style={{ fontSize: 'var(--fs-ui)', fontWeight: 500 }}>Marina Salles</span>
          <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>Marketing</span>
        </div>
      </div>
    </aside>
  );
}
function NavItem({ item, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 12, height: 42, padding: '0 14px', border: 'none', borderRadius: 'var(--radius-xs)', cursor: item.disabled ? 'default' : 'pointer', textAlign: 'left',
        background: active ? 'var(--surface-card)' : hover && !item.disabled ? 'var(--state-hover-overlay)' : 'transparent',
        color: active ? 'var(--text-heading)' : item.disabled ? 'var(--text-muted)' : 'var(--text-body)', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-ui)', fontWeight: active ? 600 : 400, boxShadow: active ? 'inset 2px 0 0 var(--color-brand-primary)' : 'none',
        opacity: item.disabled ? .55 : 1 }}>
      <Icon name={item.icon} size={18} />{item.label}
    </button>
  );
}
window.Sidebar = Sidebar;
})();
