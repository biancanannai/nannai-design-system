(() => {
const { Card, KpiCard, Badge, Button, Icon } = window.NANNAIDesignSystem_ea3e45;
function Overview({ onOpenClient, onNavigate }) {
  const D = window.CRM_DATA;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gutter)', padding: '0 var(--page-margin) 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--gutter)' }}>
        <KpiCard label="Receita · outubro" value="R$ 482.910" delta="+12,4%" caption="vs. setembro" />
        <KpiCard label="Clientes ativos" value="1.284" delta="+86" caption="no mês" />
        <KpiCard label="Ticket médio" value="R$ 1.240" delta="+4,1%" caption="vs. setembro" />
        <KpiCard label="Churn" value="2,1%" delta="-0,3 pp" trend="down" positive caption="trimestre" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 'var(--gutter)' }}>
        <Card eyebrow="Últimos 6 meses" title="Receita mensal (R$ mil)" action={<Legend items={[['var(--chart-current)', '2026'], ['var(--chart-previous)', '2025', true]]} />}>
          <RevenueChart months={D.months} current={D.revenue} previous={D.revenuePrev} />
        </Card>
        <Card eyebrow="Outubro" title="Vendas por canal"><ChannelBars data={D.channels} /></Card>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 'var(--gutter)' }}>
        <Card eyebrow="Carteira" title="Clientes para acompanhar" action={<Button variant="link" size="sm" onClick={() => onNavigate('clients')}>Ver todos</Button>} padding="24px 24px 8px">
          {D.clients.slice(0, 4).map((c, i) => (
            <div key={c.id} onClick={() => onOpenClient(c)} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderTop: i ? '1px solid var(--border-subtle)' : 'none', cursor: 'pointer' }}>
              <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--surface-sunken)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--fs-caption)', fontWeight: 500, color: 'var(--text-body)', flex: 'none' }}>{c.name.split(' ').map(s => s[0]).join('')}</span>
              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}><span style={{ fontSize: 'var(--fs-ui)', fontWeight: 500 }}>{c.name}</span><span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{c.segment} · última compra {c.last}</span></div>
              <Badge tone={c.status}>{c.statusLabel}</Badge>
              <Icon name="chevron-right" size={16} color="var(--border-strong)" />
            </div>
          ))}
        </Card>
        <Card eyebrow="Campanha em destaque" title="Pré-venda Clientes VIP">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
            {[['Abertura', '71%'], ['Conversão', '12,4%'], ['Alcance', '640'], ['Receita', 'R$ 94,8 mil']].map(([l, v]) => <div key={l}><div className="nn-overline">{l}</div><div style={{ fontSize: 'var(--fs-stat)', fontWeight: 400, color: 'var(--text-heading)' }}>{v}</div></div>)}
          </div>
          <Button variant="secondary" size="sm" onClick={() => onNavigate('campaigns')} iconRight={<Icon name="arrow-right" size={14} />}>Abrir campanha</Button>
        </Card>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 'var(--fs-overline)', fontWeight: 600, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 16 }}><span>Outros gráficos</span><span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} /></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 'var(--gutter)' }}>
        <Card eyebrow="Evolução · linha" title="Clientes ativos" action={<Legend items={[['var(--chart-current)', '2026'], ['var(--chart-previous)', '2025', true]]} />}>
          <LineChart months={D.months} current={D.activeClients} previous={D.activeClientsPrev} />
        </Card>
        <Card eyebrow="Categorias · rosca" title="Carteira por segmento">
          <Donut data={D.segments} center="1.284" sub="clientes" />
        </Card>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 'var(--gutter)' }}>
        <Card eyebrow="Ranking · barras" title="Clientes por cidade">
          <RankBars data={D.cities} />
        </Card>
        <Card eyebrow="Meta · progresso" title="Receita do trimestre">
          <GoalBar value={D.goal.value} target={D.goal.target} label={D.goal.label} pct={67} />
        </Card>
      </div>
      <Card eyebrow="Muitas categorias · 100% empilhado" title="Origem das novas clientes">
        <StackedBars keys={D.origin.keys} rows={D.origin.rows} />
      </Card>
    </div>
  );
}
window.Overview = Overview;
})();
