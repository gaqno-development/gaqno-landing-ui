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
import { MACRO_INDICATORS } from '@/app/constants/price-matrix'

const CHART_DATA = MACRO_INDICATORS.filter((ind) => ind.label !== 'Câmbio (USD/BRL)').map((ind) => ({
  name: ind.label.split(' ')[0],
  value: ind.barValue,
  color: ind.highlighted ? '#3b82f6' : '#64748b',
  source: ind.note,
}))

type ChartEntry = (typeof CHART_DATA)[number]

function MacroTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: ChartEntry }> }) {
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
      <p style={{ fontSize: 18, fontWeight: 900, color: '#fff' }}>{d.value.toFixed(2).replace('.', ',')}%</p>
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
