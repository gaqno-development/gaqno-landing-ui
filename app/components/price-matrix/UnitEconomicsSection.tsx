'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { UNIT_ECONOMICS, OMNICHANNEL_CATEGORIES } from '@/app/constants/price-matrix'
import { cn } from '@/utils/cn'
import { formatBRL } from '@/utils/format'
import AiComparisonCard from './AiComparisonCard'
import GlossaryCard from './GlossaryCard'
import ReferencesFooter from './ReferencesFooter'

const CAC_VALUE = 2000

const LTV_CAC_DATA = [
  { name: 'CAC', value: CAC_VALUE, fill: '#3b82f6', note: 'Custo de Aquisição de Cliente' },
  { name: 'LTV 12m', value: 4200, fill: '#1d4ed8', note: 'Lifetime Value acumulado em 12 meses' },
  { name: 'LTV 24m', value: 8400, fill: '#1e40af', note: 'Lifetime Value acumulado em 24 meses' },
  { name: 'LTV 36m', value: 12600, fill: '#1e3a8a', note: 'Lifetime Value acumulado em 36 meses' },
]

type LtvEntry = { payload: (typeof LTV_CAC_DATA)[number] }

function LtvCacTooltip({ active, payload }: { active?: boolean; payload?: LtvEntry[] }) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  const isLtv = d.name.startsWith('LTV')
  const ratio = isLtv ? (d.value / CAC_VALUE).toFixed(1) : null

  return (
    <div
      style={{
        background: '#0f172a',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: '10px 14px',
        fontSize: 12,
        color: '#f1f5f9',
        minWidth: 210,
      }}
    >
      <p style={{ fontWeight: 700, marginBottom: 4, color: d.fill }}>{d.name}</p>
      <p style={{ color: '#94a3b8', fontSize: 11, marginBottom: 8 }}>{d.note}</p>
      <p style={{ fontSize: 20, fontWeight: 900, color: '#fff', marginBottom: isLtv ? 6 : 0 }}>
        R$ {formatBRL(d.value)}
      </p>
      {ratio && (
        <p style={{ color: '#10b981', fontWeight: 700 }}>
          LTV / CAC = {ratio}x
        </p>
      )}
    </div>
  )
}

export default function UnitEconomicsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="economics" ref={sectionRef} className="px-8 py-20 scroll-mt-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-white"
        >
          Unit Economics & Gateways
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6 lg:col-span-2">
            <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-slate-500">
              LTV vs CAC — projeção de retorno
            </h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={LTV_CAC_DATA} barSize={40}>
                <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                  content={<LtvCacTooltip />}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} animationDuration={1200} animationBegin={300}>
                  {LTV_CAC_DATA.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-3 text-center text-[10px] text-slate-600">
              LTV/CAC ratio {'>'} 5x ao final de 36 meses. Payback estimado: 5-6 meses.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
            <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-slate-500">
              Métricas-chave
            </h3>
            <div className="space-y-5">
              {UNIT_ECONOMICS.map((m) => (
                <div key={m.label}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="text-slate-400">{m.label}</span>
                    <span className={cn('font-bold', m.color === 'green' ? 'text-green-400' : 'text-white')}>
                      {m.value}
                    </span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-slate-800">
                    {m.numericValue !== undefined && (
                      <motion.div
                        className="h-1 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${Math.min((m.numericValue / 15) * 100, 100)}%` } : {}}
                        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                        style={{ background: m.color === 'green' ? '#10b981' : '#3b82f6' }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-white/5 pt-4 text-center">
              <div className="text-[10px] uppercase tracking-widest text-slate-500">
                LTV / CAC Ratio &gt; 5x
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
            <h3 className="mb-4 text-lg font-bold text-white">Gateways & Markup Tributário</h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              Estratégia financeira prioriza{' '}
              <strong className="text-white">Pix Automático (1,19%)</strong> sobre cartão (3,99%).
              Fórmula de precificação para venda de excedentes:
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-slate-950 p-4 text-center font-mono text-sm text-slate-300">
              Preço = (Custo_API + Margem) / (1 − Impostos − Taxa_Gateway)
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-center text-xs">
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-slate-500">Pix Automático</p>
                <p className="text-lg font-black text-green-400">1,19%</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-slate-500">Cartão Crédito</p>
                <p className="text-lg font-black text-slate-300">3,99%</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
            <h3 className="mb-4 text-lg font-bold text-white">Omnichannel — Estratégia de Repasse</h3>
            <div className="space-y-3">
              {OMNICHANNEL_CATEGORIES.map((cat) => (
                <motion.div
                  key={cat.name}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between rounded-xl border border-transparent bg-white/5 px-4 py-3 transition-colors hover:border-white/10"
                >
                  <div>
                    <p className={cn(
                      'text-sm font-bold',
                      cat.nameColor === 'blue' ? 'text-blue-400' : cat.nameColor === 'muted' ? 'text-slate-400' : 'text-white',
                    )}>
                      {cat.name}
                    </p>
                    <p className="text-[10px] text-slate-500">{cat.subtitle}</p>
                  </div>
                  <span className={cn(
                    'rounded-lg bg-slate-900 px-3 py-1 font-mono text-xs',
                    cat.pricingColor === 'green' ? 'text-green-400' : 'text-slate-300',
                  )}>
                    {cat.pricing}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AiComparisonCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <GlossaryCard />
        </motion.div>

        <ReferencesFooter />
      </div>
    </section>
  )
}
