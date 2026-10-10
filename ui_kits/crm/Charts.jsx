(() => {
function RevenueChart({ months, current, previous, height = 220 }) {
  const W = 620, H = height, pad = { l: 36, r: 8, t: 12, b: 28 };
  const max = Math.ceil(Math.max(...current, ...previous) / 100) * 100;
  const iw = W - pad.l - pad.r, ih = H - pad.t - pad.b, bw = iw / months.length;
  const y = v => pad.t + ih - (v / max) * ih;
  const line = previous.map((v, i) => (i ? 'L' : 'M') + (pad.l + bw * i + bw / 2) + ' ' + y(v)).join(' ');
  return (
    <svg viewBox={'0 0 ' + W + ' ' + H} style={{ width: '100%', height: 'auto', display: 'block', fontFamily: 'var(--font-body)' }}>
      {[0, .25, .5, .75, 1].map(t => <g key={t}><line x1={pad.l} x2={W - pad.r} y1={y(max * t)} y2={y(max * t)} stroke="var(--chart-grid)" /><text x={pad.l - 8} y={y(max * t) + 4} textAnchor="end" fontSize="10.5" fontWeight="500" fill="var(--text-muted)">{Math.round(max * t)}</text></g>)}
      {current.map((v, i) => <rect key={i} x={pad.l + bw * i + bw * .28} y={y(v)} width={bw * .44} height={ih - (y(v) - pad.t)} fill="var(--chart-current)" rx="0" />)}
      <path d={line} fill="none" stroke="var(--chart-previous)" strokeWidth="1.5" strokeDasharray="4 4" />
      {previous.map((v, i) => <circle key={i} cx={pad.l + bw * i + bw / 2} cy={y(v)} r="3" fill="var(--surface-card)" stroke="var(--chart-previous)" strokeWidth="1.5" />)}
      {months.map((m, i) => <text key={m} x={pad.l + bw * i + bw / 2} y={H - 8} textAnchor="middle" fontSize="10.5" fontWeight="500" fill="var(--text-muted)">{m}</text>)}
    </svg>
  );
}
function ChannelBars({ data }) {
  const colors = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)'];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'flex', height: 10, borderRadius: 0, overflow: 'hidden', gap: 2 }}>
        {data.map((d, i) => <span key={d.name} style={{ width: d.value + '%', background: colors[i] }} />)}
      </div>
      {data.map((d, i) => (
        <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 'var(--fs-ui)' }}>
          <span style={{ width: 10, height: 10, borderRadius: 0, background: colors[i], flex: 'none' }} />
          <span style={{ flex: 1 }}>{d.name}</span>
          <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--text-heading)', fontWeight: 500 }}>{d.value}%</span>
        </div>
      ))}
    </div>
  );
}
function Legend({ items }) {
  return <div style={{ display: 'flex', gap: 18, fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{items.map(([c, l, dashed]) => <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 14, height: dashed ? 0 : 8, borderTop: dashed ? '1.5px dashed ' + c : 'none', background: dashed ? 'none' : c, borderRadius: 1 }} />{l}</span>)}</div>;
}
function LineChart({ months, current, previous, height = 180 }) {
  const W = 520, H = height, pad = { l: 40, r: 10, t: 14, b: 26 };
  const all = [...current, ...previous], lo = Math.floor(Math.min(...all) / 100) * 100, hi = Math.ceil(Math.max(...all) / 100) * 100;
  const iw = W - pad.l - pad.r, ih = H - pad.t - pad.b, step = iw / (months.length - 1);
  const x = i => pad.l + step * i, y = v => pad.t + ih - ((v - lo) / (hi - lo)) * ih;
  const path = arr => arr.map((v, i) => (i ? 'L' : 'M') + x(i) + ' ' + y(v)).join(' ');
  const last = current.length - 1;
  return (
    <svg viewBox={'0 0 ' + W + ' ' + H} style={{ width: '100%', height: 'auto', display: 'block', fontFamily: 'var(--font-body)' }}>
      {[0, .5, 1].map(t => <g key={t}><line x1={pad.l} x2={W - pad.r} y1={y(lo + (hi - lo) * t)} y2={y(lo + (hi - lo) * t)} stroke="var(--chart-grid)" /><text x={pad.l - 8} y={y(lo + (hi - lo) * t) + 4} textAnchor="end" fontSize="10.5" fontWeight="500" fill="var(--text-muted)">{Math.round(lo + (hi - lo) * t).toLocaleString('pt-BR')}</text></g>)}
      <path d={path(previous)} fill="none" stroke="var(--chart-previous)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d={path(current)} fill="none" stroke="var(--chart-current)" strokeWidth="2" />
      <circle cx={x(last)} cy={y(current[last])} r="4" fill="var(--chart-current)" />
      <text x={x(last) - 8} y={y(current[last]) - 8} textAnchor="end" fontSize="11" fontWeight="600" fill="var(--text-heading)">{current[last].toLocaleString('pt-BR')}</text>
      {months.map((m, i) => <text key={m} x={x(i)} y={H - 6} textAnchor="middle" fontSize="10.5" fontWeight="500" fill="var(--text-muted)">{m}</text>)}
    </svg>
  );
}
function Donut({ data, center, sub }) {
  const colors = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)'];
  const r = 52, c = 2 * Math.PI * r, total = data.reduce((s, d) => s + d.value, 0);
  let acc = 0;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
      <svg viewBox="0 0 140 140" style={{ width: 140, height: 140, flex: 'none' }}>
        <g transform="rotate(-90 70 70)">
          {data.map((d, i) => { const len = d.value / total * c; const el = <circle key={d.name} cx="70" cy="70" r={r} fill="none" stroke={colors[i]} strokeWidth="16" strokeDasharray={(len - 2) + ' ' + (c - len + 2)} strokeDashoffset={-acc} />; acc += len; return el; })}
        </g>
        <text x="70" y="72" textAnchor="middle" fontFamily="Chap, sans-serif" fontWeight="300" fontSize="24" fill="#381416">{center}</text>
        <text x="70" y="90" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="10" fill="#495D64">{sub}</text>
      </svg>
      <div style={{ flex: 1, minWidth: 160, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {data.map((d, i) => <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 'var(--fs-ui)' }}><span style={{ width: 10, height: 10, background: colors[i], flex: 'none' }} /><span style={{ flex: 1 }}>{d.name}</span><span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--text-heading)', fontWeight: 500 }}>{d.value}%</span></div>)}
      </div>
    </div>
  );
}
function RankBars({ data }) {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {data.map((d, i) => (
        <div key={d.name} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 44px', alignItems: 'center', gap: 12, fontSize: 'var(--fs-ui)' }}>
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{d.name}</span>
          <span style={{ height: 8, background: 'var(--surface-sunken)' }}><span style={{ display: 'block', height: '100%', width: (d.value / max * 100) + '%', background: i === 0 ? 'var(--chart-1)' : 'var(--chart-2)' }} /></span>
          <span style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: 'var(--text-heading)', fontWeight: 500 }}>{d.value}</span>
        </div>
      ))}
    </div>
  );
}
function StackedBars({ keys, rows }) {
  const colors = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)', 'var(--chart-6)', 'var(--chart-7)'];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {rows.map(([m, vals]) => { const t = vals.reduce((a, b) => a + b, 0); return (
        <div key={m} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', fontWeight: 500 }}>{m}</span>
          <div style={{ display: 'flex', height: 14, gap: 2 }}>{vals.map((v, i) => <span key={i} title={keys[i] + ' ' + Math.round(v / t * 100) + '%'} style={{ width: (v / t * 100) + '%', background: colors[i] }} />)}</div>
        </div>); })}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', paddingLeft: 48 }}>
        {keys.map((k, i) => <span key={k} style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, background: colors[i] }} />{k}</span>)}
      </div>
    </div>
  );
}
function GoalBar({ value, target, label, pct }) {
  const p = Math.min(100, value / target * 100);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, fontSize: 'var(--fs-kpi)', color: 'var(--text-heading)', lineHeight: 1 }}>{Math.round(p)}%</span>
        <span style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)' }}>{label}</span>
      </div>
      <div style={{ position: 'relative', height: 10, background: 'var(--surface-sunken)' }}>
        <span style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: p + '%', background: 'var(--chart-positive)' }} />
        <span style={{ position: 'absolute', top: -4, bottom: -4, left: pct + '%', width: 2, background: 'var(--color-brand-primary)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}><span>Realizado · acima do ritmo</span><span>Ritmo esperado · {pct}%</span></div>
    </div>
  );
}
Object.assign(window, { RevenueChart, ChannelBars, Legend, LineChart, Donut, RankBars, StackedBars, GoalBar });
})();
