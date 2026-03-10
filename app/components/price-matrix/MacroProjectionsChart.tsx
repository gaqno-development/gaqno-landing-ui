'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts'
import { MACRO_PROJECTIONS } from '@/app/constants/price-matrix'

type ProjectionEntry = (typeof MACRO_PROJECTIONS)[number]

function ProjectionsTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ name: string; value: number; color: string }>
  label?: number
}) {
  if (!active || !payload?.length) return null
  return (
    <div
      style={{
        background: '#0f172a',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: '10px 14px',
        fontSize: 12,
        color: '#f1f5f9',
        minWidth: 180,
      }}
    >
      <p style={{ fontWeight: 700, marginBottom: 6 }}>{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} style={{ color: entry.color, marginBottom: 2 }}>
          {entry.name}: {entry.value.toFixed(2).replace('.', ',')}%
        </p>
      ))}
    </div>
  )
}

const LEGEND_ITEMS = [
  { value: 'Selic', color: '#f59e0b' },
  { value: 'IPCA', color: '#3b82f6' },
  { value: 'PIB', color: '#10b981' },
]

export default function MacroProjectionsChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={MACRO_PROJECTIONS}>
        <defs>
          <linearGradient id="gradSelic" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gradIpca" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gradPib" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
        <XAxis
          dataKey="year"
          tick={{ fill: '#94a3b8', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: '#94a3b8', fontSize: 10 }}
          axisLine={false}
          tickLine={false}
          domain={[0, 14]}
          tickFormatter={(v: number) => `${v}%`}
        />
        <Tooltip content={<ProjectionsTooltip />} />
        <Legend
          payload={LEGEND_ITEMS.map((item) => ({
            value: item.value,
            type: 'line' as const,
            color: item.color,
          }))}
          wrapperStyle={{ fontSize: 10 }}
        />
        <Area
          type="monotone"
          dataKey="selic"
          name="Selic"
          stroke="#f59e0b"
          strokeWidth={2}
          fill="url(#gradSelic)"
        />
        <Area
          type="monotone"
          dataKey="ipca"
          name="IPCA"
          stroke="#3b82f6"
          strokeWidth={2}
          fill="url(#gradIpca)"
        />
        <Area
          type="monotone"
          dataKey="pib"
          name="PIB"
          stroke="#10b981"
          strokeWidth={2}
          fill="url(#gradPib)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
