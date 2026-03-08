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
  { name: 'IPCA', value: 3.91, color: '#64748b' },
  { name: 'Selic', value: 12.0, color: '#3b82f6' },
  { name: 'PIB', value: 1.82, color: '#64748b' },
]

const TOOLTIP_STYLE = {
  background: '#0f172a',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 8,
  color: '#f1f5f9',
  fontSize: 12,
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
          contentStyle={TOOLTIP_STYLE}
          formatter={(v: number) => [`${v}%`, '']}
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
