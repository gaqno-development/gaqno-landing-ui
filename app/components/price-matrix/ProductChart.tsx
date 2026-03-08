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

const TOOLTIP_STYLE = {
  background: '#0f172a',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 8,
  color: '#f1f5f9',
  fontSize: 12,
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
          contentStyle={TOOLTIP_STYLE}
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
        <Tooltip contentStyle={TOOLTIP_STYLE} formatter={(v: number) => [`${v}%`, '']} />
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
        <Tooltip contentStyle={TOOLTIP_STYLE} formatter={(v: number) => [`${v}%`, '']} />
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
