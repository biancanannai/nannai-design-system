(() => {
const { Card, Badge, Tabs, Tag, IconButton, Button, Icon } = window.NANNAIDesignSystem_ea3e45;
function Clients({ onOpenClient }) {
  const D = window.CRM_DATA;
  const [tab, setTab] = React.useState('all');
  const [city, setCity] = React.useState(null);
  const rows = D.clients.filter(c => (tab === 'all' || c.segment === tab) && (!city || c.city === city));
  const th = { textAlign: 'left', padding: '12px 16px', fontSize: 'var(--fs-overline)', fontWeight: 600, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-muted)', borderBottom: '1px solid var(--border-subtle)' };
  const td = { padding: '14px 14px', fontSize: 'var(--fs-ui)', borderBottom: '1px solid var(--border-subtle)' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: '0 var(--page-margin) 48px' }}>
      <Tabs value={tab} onChange={setTab} tabs={[{ value: 'all', label: 'Todos', count: D.clients.length }, { value: 'VIP', label: 'VIP', count: 2 }, { value: 'Recorrente', label: 'Recorrentes', count: 2 }, { value: 'Novo', label: 'Novos', count: 2 }]} />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        {['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba'].map(c => <Tag key={c} selected={city === c} onClick={() => setCity(city === c ? null : c)}>{c}</Tag>)}
        {city && <Button variant="link" size="sm" onClick={() => setCity(null)} style={{ marginLeft: 8 }}>Limpar</Button>}
      </div>
      <Card padding={0}>
        <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', minWidth: 760, borderCollapse: 'collapse' }}>
          <thead><tr><th style={th}>Cliente</th><th style={th}>Cidade</th><th style={th}>Segmento</th><th style={th}>Status</th><th style={{ ...th, textAlign: 'right' }}>LTV</th><th style={th}>Última compra</th><th style={th}></th></tr></thead>
          <tbody>
            {rows.map(c => <Row key={c.id} c={c} td={td} onOpen={() => onOpenClient(c)} />)}
            {!rows.length && <tr><td colSpan="7" style={{ ...td, textAlign: 'center', color: 'var(--text-muted)', padding: 40 }}>Nenhum cliente com estes filtros.</td></tr>}
          </tbody>
        </table>
        </div>
      </Card>
    </div>
  );
}
function Row({ c, td, onOpen }) {
  const [hover, setHover] = React.useState(false);
  return (
    <tr onClick={onOpen} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ cursor: 'pointer', background: hover ? 'var(--surface-sunken)' : 'transparent', transition: 'background var(--duration-fast)' }}>
      <td style={td}><div style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontWeight: 500 }}>{c.name}</span><span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{c.email}</span></div></td>
      <td style={td}>{c.city}</td>
      <td style={td}>{c.segment === 'VIP' ? <Badge tone="brand">VIP</Badge> : c.segment}</td>
      <td style={td}><Badge tone={c.status}>{c.statusLabel}</Badge></td>
      <td style={{ ...td, textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: 'var(--text-heading)', fontWeight: 500, whiteSpace: 'nowrap' }}>{c.ltv}</td>
      <td style={{ ...td, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{c.last}</td>
      <td style={{ ...td, width: 48 }}><IconButton icon="more-horizontal" label="Ações" size="sm" /></td>
    </tr>
  );
}
window.Clients = Clients;
})();
