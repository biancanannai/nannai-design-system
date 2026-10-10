(() => {
const { Card, Badge, Button, Icon, Input, Select, Radio, Checkbox, Dialog } = window.NANNAIDesignSystem_ea3e45;
function Campaigns({ creating, onCloseCreate, onCreated }) {
  const D = window.CRM_DATA;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gutter)', padding: '0 var(--page-margin) 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 'var(--gutter)' }}>
        {D.campaigns.map(c => (
          <Card key={c.id} eyebrow={c.channel} title={c.name} action={<Badge tone={c.status}>{c.statusLabel}</Badge>}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(96px, 1fr))', gap: 16, paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
              {[['Alcance', c.reach], ['Abertura', c.open ? c.open + '%' : '—'], ['Conversão', c.conv ? String(c.conv).replace('.', ',') + '%' : '—'], ['Receita', c.revenue]].map(([l, v]) => <div key={l} style={{ minWidth: 0 }}><div className="nn-overline">{l}</div><div style={{ fontSize: 'var(--fs-h3)', fontWeight: 400, color: 'var(--text-heading)', overflowWrap: 'anywhere' }}>{v}</div></div>)}
            </div>
            {c.open > 0 && <div style={{ marginTop: 18, height: 4, background: 'var(--surface-sunken)', borderRadius: 0 }}><div style={{ width: c.open + '%', height: '100%', background: 'var(--chart-1)', borderRadius: 0 }} /></div>}
          </Card>
        ))}
      </div>
      <Dialog open={creating} onClose={onCloseCreate} eyebrow="Campanhas" title="Nova campanha" width={520}
        footer={<><Button variant="secondary" onClick={onCloseCreate}>Cancelar</Button><Button onClick={onCreated}>Criar campanha</Button></>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Input label="Nome da campanha" placeholder="Ex.: Coleção Primavera" />
          <Select label="Público" options={['Todas as clientes', 'Clientes VIP', 'Inativas há 90 dias', 'Novas clientes']} defaultValue="Clientes VIP" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><span style={{ fontSize: 'var(--fs-body-sm)', fontWeight: 500 }}>Canal</span><Radio options={['E-mail', 'Atendimento remoto', 'Evento']} defaultValue="E-mail" direction="row" /></div>
          <Checkbox label="Notificar consultoras responsáveis" defaultChecked />
        </div>
      </Dialog>
    </div>
  );
}
window.Campaigns = Campaigns;
})();
