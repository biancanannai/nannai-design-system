(() => {
const { Badge, Button, IconButton, Icon, Tabs, Switch } = window.NANNAIDesignSystem_ea3e45;
function ClientDrawer({ client, onClose, onAction }) {
  if (!client) return null;
  const hist = [['05 out', 'Compra na boutique · Jardins', 'R$ 4.860'], ['21 set', 'Atendimento remoto · provas', '—'], ['02 set', 'Compra no e-commerce', 'R$ 2.140'], ['11 ago', 'Convite · Evento Ateliê', '—']];
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'var(--scrim)', zIndex: 100, display: 'flex', justifyContent: 'flex-end' }}>
      <aside onClick={e => e.stopPropagation()} style={{ width: 440, maxWidth: '100%', height: '100%', background: 'var(--surface-card)', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        <div style={{ padding: '28px 28px 24px', background: 'var(--surface-sunken)', borderBottom: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="nn-overline">Ficha da cliente</span><IconButton icon="x" label="Fechar" size="sm" onClick={onClose} /></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--color-brand-primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-h3)', letterSpacing: '.02em' }}>{client.name.split(' ').map(s => s[0]).join('')}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><h2 style={{ fontSize: 'var(--fs-h2)' }}>{client.name}</h2><div style={{ display: 'flex', gap: 8 }}>{client.segment === 'VIP' && <Badge tone="brand">VIP</Badge>}<Badge tone={client.status}>{client.statusLabel}</Badge></div></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {[['LTV', client.ltv], ['Pedidos', '14'], ['Desde', '2021']].map(([l, v]) => <div key={l}><div className="nn-overline">{l}</div><div style={{ fontSize: 'var(--fs-h3)', fontWeight: 400, color: 'var(--text-heading)' }}>{v}</div></div>)}
          </div>
        </div>
        <div style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 14, fontSize: 'var(--fs-ui)' }}>
          {[['mail', client.email], ['map-pin', client.city], ['user', 'Consultora: ' + client.owner]].map(([ic, t]) => <div key={ic} style={{ display: 'flex', gap: 12, alignItems: 'center' }}><Icon name={ic} size={16} color="var(--text-muted)" />{t}</div>)}
        </div>
        <div style={{ padding: '0 28px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Tabs tabs={['Histórico', 'Preferências']} />
          {hist.map(([d, t, v]) => <div key={d} style={{ display: 'flex', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--border-subtle)', fontSize: 'var(--fs-ui)' }}><span style={{ width: 48, color: 'var(--text-muted)', fontSize: 'var(--fs-body-sm)' }}>{d}</span><span style={{ flex: 1 }}>{t}</span><span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--text-heading)' }}>{v}</span></div>)}
          <div style={{ padding: '20px 0' }}><Switch label="Incluir em comunicações VIP" defaultChecked={client.segment === 'VIP'} /></div>
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', gap: 12, padding: '16px 28px', borderTop: '1px solid var(--border-subtle)' }}>
          <Button variant="secondary" fullWidth onClick={() => onAction('archive')}>Arquivar</Button>
          <Button fullWidth iconLeft={<Icon name="calendar" size={16} />} onClick={() => onAction('schedule')}>Agendar visita</Button>
        </div>
      </aside>
    </div>
  );
}
window.ClientDrawer = ClientDrawer;
})();
