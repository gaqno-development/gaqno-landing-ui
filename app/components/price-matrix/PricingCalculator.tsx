'use client'

import { useState, useMemo } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import {
  CALCULATOR_PRODUCTS,
  ROI_CONFIG,
  type ProductId,
} from '@/app/constants/price-matrix'
import { cn } from '@/utils/cn'
import { formatBRL } from '@/utils/format'

type AreaEntry = { name: string; value: number; color: string }

function AreaTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: AreaEntry[]
  label?: string
}) {
  if (!active || !payload?.length) return null
  const gaqno = payload.find((p) => p.name === 'Gaqno')
  const market = payload.find((p) => p.name === 'Mercado')
  const savings = market && gaqno ? market.value - gaqno.value : 0

  return (
    <div
      style={{
        background: '#0f172a',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: '10px 14px',
        fontSize: 12,
        color: '#f1f5f9',
        minWidth: 200,
      }}
    >
      <p style={{ fontWeight: 700, marginBottom: 8, color: '#94a3b8' }}>{label} · acumulado</p>
      {market && (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 4 }}>
          <span style={{ color: '#6b7280' }}>Mercado</span>
          <span style={{ fontWeight: 700, color: '#94a3b8' }}>R$ {formatBRL(market.value)}</span>
        </div>
      )}
      {gaqno && (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 4 }}>
          <span style={{ color: '#3b82f6' }}>Gaqno</span>
          <span style={{ fontWeight: 700, color: '#3b82f6' }}>R$ {formatBRL(gaqno.value)}</span>
        </div>
      )}
      {savings > 0 && (
        <div
          style={{
            marginTop: 8,
            paddingTop: 8,
            borderTop: '1px solid rgba(255,255,255,0.07)',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <span style={{ color: '#10b981' }}>Economia acumulada</span>
          <span style={{ fontWeight: 900, color: '#10b981' }}>R$ {formatBRL(savings)}</span>
        </div>
      )}
    </div>
  )
}

function buildProjectionData(
  selected: ProductId[],
  volumes: Record<ProductId, number>,
  months = 6,
) {
  return Array.from({ length: months }, (_, i) => {
    const m = i + 1
    const gaqno = selected.reduce((acc, id) => {
      const p = CALCULATOR_PRODUCTS.find((c) => c.id === id)!
      return acc + p.gaqnoCostPer * volumes[id] * m
    }, 0)
    const market = selected.reduce((acc, id) => {
      const p = CALCULATOR_PRODUCTS.find((c) => c.id === id)!
      return acc + p.marketCostPer * volumes[id] * m
    }, 0)
    return { month: `Mês ${m}`, gaqno: Math.round(gaqno), market: Math.round(market) }
  })
}

export default function PricingCalculator() {
  const [selected, setSelected] = useState<ProductId[]>(['crm', 'omnichannel'])
  const [volumes, setVolumes] = useState<Record<ProductId, number>>(() =>
    Object.fromEntries(CALCULATOR_PRODUCTS.map((p) => [p.id, p.defaultValue])) as Record<ProductId, number>,
  )

  const toggleProduct = (id: ProductId) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    )
  }

  const monthlyGaqno = useMemo(
    () =>
      selected.reduce((acc, id) => {
        const p = CALCULATOR_PRODUCTS.find((c) => c.id === id)!
        return acc + p.gaqnoCostPer * volumes[id]
      }, 0),
    [selected, volumes],
  )

  const monthlyMarket = useMemo(
    () =>
      selected.reduce((acc, id) => {
        const p = CALCULATOR_PRODUCTS.find((c) => c.id === id)!
        return acc + p.marketCostPer * volumes[id]
      }, 0),
    [selected, volumes],
  )

  const hoursSaved = useMemo(
    () =>
      selected.reduce((acc, id) => acc + ROI_CONFIG.HOURS_SAVED_PER_PRODUCT[id], 0),
    [selected],
  )

  const roiValue = hoursSaved * ROI_CONFIG.ANALYST_HOURLY_RATE_BRL
  const savings = monthlyMarket - monthlyGaqno
  const projectionData = useMemo(
    () => buildProjectionData(selected, volumes),
    [selected, volumes],
  )

  return (
    <section id="calculadora" className="relative bg-slate-900/40 px-8 py-20 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center text-3xl font-black text-white">
          Calculadora{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
            de Preços
          </span>
        </h2>
        <p className="mb-12 text-center text-slate-400">
          Selecione os produtos, ajuste os volumes e veja seu custo Gaqno vs mercado em tempo real.
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
              <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">
                1. Selecione os produtos
              </p>
              <div className="space-y-2">
                {CALCULATOR_PRODUCTS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => toggleProduct(p.id)}
                    className={cn(
                      'w-full rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition-all',
                      selected.includes(p.id)
                        ? 'border-blue-500 bg-blue-500/10 text-white'
                        : 'border-white/5 bg-white/5 text-slate-400 hover:border-white/10',
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {selected.length > 0 && (
              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6 space-y-5">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                  2. Ajuste os volumes
                </p>
                {selected.map((id) => {
                  const p = CALCULATOR_PRODUCTS.find((c) => c.id === id)!
                  return (
                    <div key={id}>
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="text-slate-400">{p.label}</span>
                        <span className="font-mono text-slate-300">
                          {volumes[id].toLocaleString('pt-BR')} {p.unit}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={p.min}
                        max={p.max}
                        step={p.step}
                        value={volumes[id]}
                        aria-label={`Volume de ${p.label} em ${p.unit}`}
                        onChange={(e) =>
                          setVolumes((prev) => ({ ...prev, [id]: Number(e.target.value) }))
                        }
                        className="w-full accent-blue-500"
                      />
                      <p className="mt-1 text-[10px] text-slate-600">{p.description}</p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5 text-center">
                <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-blue-400">
                  Gaqno / Mês
                </p>
                <p className="text-3xl font-black text-white">R$ {formatBRL(monthlyGaqno)}</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-5 text-center">
                <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Mercado / Mês
                </p>
                <p className="text-3xl font-black text-slate-300">R$ {formatBRL(monthlyMarket)}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
              <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">
                3. Projeção de custo acumulado (6 meses)
              </p>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={projectionData}>
                  <defs>
                    <linearGradient id="gaqnoGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="marketGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6b7280" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#6b7280" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip content={<AreaTooltip />} />
                  <Legend
                    formatter={(value) => (
                      <span style={{ color: '#94a3b8', fontSize: 11 }}>{value}</span>
                    )}
                  />
                  <Area type="monotone" dataKey="market" name="Mercado" stroke="#6b7280" fill="url(#marketGrad)" strokeWidth={2} />
                  <Area type="monotone" dataKey="gaqno" name="Gaqno" stroke="#3b82f6" fill="url(#gaqnoGrad)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
              <p className="mb-4 text-xs font-black uppercase tracking-widest text-green-400">
                ROI estimado
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-black text-white">R$ {formatBRL(savings)}</p>
                  <p className="text-[10px] text-slate-500">economia / mês vs mercado</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">{hoursSaved}h</p>
                  <p className="text-[10px] text-slate-500">horas salvas / mês</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-green-400">R$ {formatBRL(roiValue)}</p>
                  <p className="text-[10px] text-slate-500">valor equiv. analista/mês</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
