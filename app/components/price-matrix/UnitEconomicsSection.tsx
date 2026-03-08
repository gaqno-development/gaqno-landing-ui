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
import {
  UNIT_ECONOMICS,
  OMNICHANNEL_CATEGORIES,
  AI_MODELS,
  CALCULATOR,
} from '@/app/constants/price-matrix'
import { cn } from '@/utils/cn'

const TOOLTIP_STYLE = {
  background: '#0f172a',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 8,
  color: '#f1f5f9',
  fontSize: 12,
}

const LTV_CAC_DATA = [
  { name: 'CAC', value: 2000, fill: '#3b82f6' },
  { name: 'LTV 12m', value: 4200, fill: '#1d4ed8' },
  { name: 'LTV 24m', value: 8400, fill: '#1e40af' },
  { name: 'LTV 36m', value: 12600, fill: '#1e3a8a' },
]

function formatBRL(v: number) {
  return v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function UnitEconomicsSection() {
  return (
    <section id="economics" className="px-8 py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <h2 className="text-center text-3xl font-bold text-white">Unit Economics & Gateways</h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
                  contentStyle={TOOLTIP_STYLE}
                  formatter={(v: number) => [`R$ ${(v).toLocaleString('pt-BR')}`, '']}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {LTV_CAC_DATA.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-3 text-center text-[10px] text-slate-600">
              LTV/CAC ratio {'>'}  5x ao final de 36 meses. Payback estimado: 5-6 meses.
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
                      <div
                        className="h-1 rounded-full"
                        style={{
                          width: `${Math.min((m.numericValue / 15) * 100, 100)}%`,
                          background: m.color === 'green' ? '#10b981' : '#3b82f6',
                        }}
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
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
                <div
                  key={cat.name}
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
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-pink-500/10 bg-slate-900/60 p-6">
          <h3 className="mb-4 text-lg font-bold text-white">AI Studio — Comparativo de Modelos</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {AI_MODELS.map((model) => {
              const bigTechBRL = model.bigTechUsd * CALCULATOR.CAMBIO
              return (
                <div key={model.name} className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-xl">{model.icon}</span>
                    <span className="text-sm font-semibold text-white">{model.name}</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Big Tech (USD→BRL)</span>
                      <span className="font-mono text-slate-300">R$ {formatBRL(bigTechBRL)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-pink-400">NexAI</span>
                      <span className="font-mono text-pink-300">{model.cost}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-4 text-center text-[10px] text-slate-600">
            Câmbio referência: USD {CALCULATOR.CAMBIO.toFixed(2)} BRL · Custo/ponto: R$ {CALCULATOR.COST_PER_POINT}
          </p>
        </div>

        <footer className="border-t border-white/5 py-8 text-center">
          <p className="mx-auto max-w-2xl text-xs italic text-slate-500">
            &ldquo;Posicionar o software não como custo de TI, mas como substituto de headcounts
            caros. Um SaaS de R$ 899 que economiza 40h de um analista de R$ 5.000 possui ROI
            inquestionável.&rdquo;
          </p>
        </footer>
      </div>
    </section>
  )
}
