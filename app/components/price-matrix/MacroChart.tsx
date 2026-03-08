'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'

const CHART_DATA = [
  { name: 'IPCA', value: 3.91, color: '#64748b', source: 'Focus/BCB', desc: 'Inflação oficial' },
  { name: 'Selic', value: 12.0, color: '#3b82f6', source: 'COPOM/BCB', desc: 'Taxa básica de juros' },
  { name: 'PIB', value: 1.82, color: '#64748b', source: 'IBGE/FGV', desc: 'Crescimento econômico' },
]

function MacroTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: typeof CHART_DATA[number] }> }) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div
      style={{
        background: '#0f172a',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: '10px 14px',
        fontSize: 12,
        color: '#f1f5f9',
        minWidth: 160,
      }}
    >
      <p style={{ fontWeight: 700, marginBottom: 4 }}>{d.name} · {d.source}</p>
      <p style={{ color: '#94a3b8', marginBottom: 6, fontSize: 11 }}>{d.desc}</p>
      <p style={{ fontSize: 18, fontWeight: 900, color: '#fff' }}>{d.value.toFixed(2).replace('.', ',')}% a.a.</p>
    </div>
  )
}

export default function MacroChart() {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={CHART_DATA} barSize={36}>
        <XAxis
          dataKey="name"
          tick={{ fill: '#94a3b8', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide />
        <Tooltip
          cursor={{ fill: 'rgba(255,255,255,0.03)' }}
          content={<MacroTooltip />}
        />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {CHART_DATA.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
