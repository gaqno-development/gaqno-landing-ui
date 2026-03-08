'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  RadialBarChart,
  RadialBar,
} from 'recharts'
import type { ProductSection } from '@/app/constants/price-matrix'

const TOOLTIP_BASE: React.CSSProperties = {
  background: '#0f172a',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  padding: '10px 14px',
  fontSize: 12,
  color: '#f1f5f9',
  minWidth: 160,
}

type TooltipEntry = {
  name: string
  value: number
  color?: string
  payload?: Record<string, unknown>
}

function BarTooltip({
  active,
  payload,
  label,
  product,
}: {
  active?: boolean
  payload?: TooltipEntry[]
  label?: string
  product: ProductSection
}) {
  if (!active || !payload?.length) return null
  const isMulti = product.chartKeys.length > 1

  return (
    <div style={TOOLTIP_BASE}>
      <p style={{ fontWeight: 700, marginBottom: 6, color: product.accentColor }}>{label}</p>
      {isMulti ? (
        payload.map((entry) => {
          const key = product.chartKeys.find((k) => k.label === entry.name)
          const isGaqno = entry.name.toLowerCase().includes('gaqno')
          const formattedVal =
            product.id === 'ai'
              ? `R$ ${entry.value.toFixed(2).replace('.', ',')}`
              : `R$ ${entry.value.toFixed(3).replace('.', ',')} / unid.`
          return (
            <div key={entry.name} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 2 }}>
              <span style={{ color: key?.color ?? '#94a3b8' }}>{entry.name}</span>
              <span style={{ fontWeight: 700, color: isGaqno ? product.accentColor : '#94a3b8' }}>{formattedVal}</span>
            </div>
          )
        })
      ) : (
        <p style={{ fontSize: 18, fontWeight: 900, color: '#fff' }}>
          {(payload[0]?.value ?? 0).toLocaleString('pt-BR')} contatos
        </p>
      )}
    </div>
  )
}

function PieTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: TooltipEntry[]
}) {
  if (!active || !payload?.length) return null
  const entry = payload[0]
  return (
    <div style={TOOLTIP_BASE}>
      <p style={{ fontWeight: 700, marginBottom: 4, color: '#10b981' }}>{entry.name}</p>
      <p style={{ fontSize: 18, fontWeight: 900, color: '#fff' }}>{entry.value}%</p>
      <p style={{ color: '#94a3b8', fontSize: 11 }}>do tempo operacional salvo</p>
    </div>
  )
}

function RadialTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: TooltipEntry[]
}) {
  if (!active || !payload?.length) return null
  const entry = payload[0]
  return (
    <div style={TOOLTIP_BASE}>
      <p style={{ fontWeight: 700, marginBottom: 4, color: '#f59e0b' }}>{entry.name}</p>
      <p style={{ fontSize: 18, fontWeight: 900, color: '#fff' }}>{entry.value}%</p>
      <p style={{ color: '#94a3b8', fontSize: 11 }}>das transações no PDV</p>
    </div>
  )
}

function ProductBarChart({ product }: { product: ProductSection }) {
  const isMultiBar = product.chartKeys.length > 1
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={product.chartData} barSize={isMultiBar ? 18 : 32}>
        <XAxis
          dataKey={product.xAxisKey}
          tick={{ fill: '#94a3b8', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide />
        <Tooltip
          cursor={{ fill: 'rgba(255,255,255,0.03)' }}
          content={<BarTooltip product={product} />}
        />
        {product.chartKeys.map((k) => (
          <Bar key={k.key} dataKey={k.key} name={k.label} fill={k.color} radius={[4, 4, 0, 0]} />
        ))}
        {product.chartKeys.length === 1 && (
          <Bar dataKey="value" fill={product.accentColor} radius={[4, 4, 0, 0]}>
            {product.chartData.map((entry, i) => (
              <Cell key={i} fill={entry.fill as string} />
            ))}
          </Bar>
        )}
      </BarChart>
    </ResponsiveContainer>
  )
}

function ProductPieChart({ product }: { product: ProductSection }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={product.chartData}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={90}
          paddingAngle={3}
          dataKey="value"
          nameKey="name"
        >
          {product.chartData.map((entry, i) => (
            <Cell key={i} fill={entry.fill as string} />
          ))}
        </Pie>
        <Tooltip content={<PieTooltip />} />
        <Legend
          iconType="circle"
          iconSize={8}
          formatter={(value) => <span style={{ color: '#94a3b8', fontSize: 11 }}>{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

function ProductRadialChart({ product }: { product: ProductSection }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius={20}
        outerRadius={90}
        data={product.chartData}
        startAngle={180}
        endAngle={-180}
      >
        <RadialBar dataKey="value" cornerRadius={4} background={{ fill: 'rgba(255,255,255,0.03)' }}>
          {product.chartData.map((entry, i) => (
            <Cell key={i} fill={entry.fill as string} />
          ))}
        </RadialBar>
        <Tooltip content={<RadialTooltip />} />
        <Legend
          iconType="circle"
          iconSize={8}
          formatter={(value) => <span style={{ color: '#94a3b8', fontSize: 11 }}>{value}</span>}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default function ProductChart({ product }: { product: ProductSection }) {
  if (product.chartType === 'pie') return <ProductPieChart product={product} />
  if (product.chartType === 'radial') return <ProductRadialChart product={product} />
  return <ProductBarChart product={product} />
}
