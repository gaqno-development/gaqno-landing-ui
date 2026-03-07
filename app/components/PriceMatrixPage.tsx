'use client'

import { useState, useMemo } from 'react'
import { cn } from '@/utils/cn'
import {
  MACRO_INDICATORS,
  AI_MODELS,
  OMNICHANNEL_CATEGORIES,
  SAAS_PLANS,
  CALCULATOR,
  UNIT_ECONOMICS,
  type MacroIndicator,
  type OmnichannelCategory,
  type SaaSPlan,
} from '../constants/price-matrix'

function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function GlassPanel({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-white/5 bg-slate-900/60 backdrop-blur-xl transition-colors hover:border-white/10',
        className,
      )}
    >
      {children}
    </div>
  )
}

function MacroCard({ indicator }: { indicator: MacroIndicator }) {
  return (
    <GlassPanel
      className={cn(
        'p-6 text-center',
        indicator.highlighted && 'border-b-2 border-blue-500',
      )}
    >
      <div
        className={cn(
          'mb-2 text-xs font-bold uppercase',
          indicator.highlighted ? 'text-blue-400' : 'text-slate-400',
        )}
      >
        {indicator.label}
      </div>
      <div className="text-3xl font-black text-white">{indicator.value}</div>
      <div className="mt-2 text-[10px] text-slate-500">{indicator.note}</div>
    </GlassPanel>
  )
}

function OmnichannelRow({ category }: { category: OmnichannelCategory }) {
  const nameColorClass: Record<OmnichannelCategory['nameColor'], string> = {
    blue: 'text-blue-400',
    white: 'text-white',
    muted: 'text-slate-400',
  }
  return (
    <div className="flex items-center justify-between rounded-2xl border border-transparent bg-white/5 p-4 transition-colors hover:border-white/10">
      <div>
        <div className={cn('text-sm font-bold', nameColorClass[category.nameColor])}>
          {category.name}
        </div>
        <div className="text-[10px] text-slate-500">{category.subtitle}</div>
      </div>
      <div
        className={cn(
          'rounded-lg bg-slate-900 px-3 py-1 font-mono text-xs',
          category.pricingColor === 'green' ? 'text-green-400' : 'text-slate-300',
        )}
      >
        {category.pricing}
      </div>
    </div>
  )
}

function PlanCard({ plan }: { plan: SaaSPlan }) {
  return (
    <GlassPanel
      className={cn(
        'relative flex flex-col p-10',
        plan.highlighted &&
          'border-2 border-blue-500 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]',
      )}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
          Alta Performance
        </div>
      )}
      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
      <p className={cn('mb-6 text-xs', plan.highlighted ? 'text-blue-300' : 'text-slate-400')}>
        {plan.description}
      </p>
      <div className="mb-8">
        <span className="text-5xl font-black text-white">{plan.price}</span>
        <span className="text-slate-500">/mês</span>
      </div>
      <ul className="mb-10 flex-grow space-y-4 text-sm text-slate-300">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-3">
            {plan.highlighted ? (
              <span className="text-blue-400">✦</span>
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            )}
            {f}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={cn(
          'w-full rounded-2xl py-4 text-sm font-bold transition-colors',
          plan.highlighted
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500'
            : 'border border-white/10 bg-white/5 text-white hover:bg-white/10',
        )}
      >
        {plan.cta}
      </button>
    </GlassPanel>
  )
}

function AICalculator() {
  const [imgCount, setImgCount] = useState(100)
  const [vidCount, setVidCount] = useState(10)

  const results = useMemo(() => {
    const bigTechTotal =
      (imgCount * CALCULATOR.BIG_TECH_IMG_USD + vidCount * CALCULATOR.BIG_TECH_VID_USD) *
      CALCULATOR.CAMBIO
    const points =
      imgCount * CALCULATOR.NEXAI_IMG_POINTS + vidCount * CALCULATOR.NEXAI_VID_POINTS
    const nexaiTotal = points * CALCULATOR.COST_PER_POINT
    return { bigTechTotal, points, nexaiTotal }
  }, [imgCount, vidCount])

  return (
    <GlassPanel className="border-t-2 border-pink-500/30 p-8">
      <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
        <span className="rounded-lg bg-pink-500/20 p-2 text-sm text-pink-400">✨</span>
        AI Studio: Comparativo de Criação
      </h3>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-500">
              Imagens / Mês
            </label>
            <input
              type="number"
              value={imgCount}
              onChange={(e) => setImgCount(Number(e.target.value) || 0)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-white transition-all focus:border-blue-500 focus:bg-white/[0.08] focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-500">
              Seg. Vídeo / Mês
            </label>
            <input
              type="number"
              value={vidCount}
              onChange={(e) => setVidCount(Number(e.target.value) || 0)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-white transition-all focus:border-blue-500 focus:bg-white/[0.08] focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-4 pt-4">
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-slate-400">
                Big Tech (USD → BRL)
              </span>
              <span className="text-lg font-black text-white">
                R$ {formatBRL(results.bigTechTotal)}
              </span>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-pink-600 to-pink-800 p-5 shadow-lg shadow-pink-500/20">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-pink-100">NexAI Integrado</span>
              <span className="text-2xl font-black text-white">
                R$ {formatBRL(results.nexaiTotal)}
              </span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-tighter text-pink-200/80">
              {results.points.toLocaleString('pt-BR')} PONTOS CONSUMIDOS
            </div>
          </div>
        </div>
      </div>
    </GlassPanel>
  )
}

function WhatsAppCalculator() {
  const [wppQty, setWppQty] = useState(1000)

  const total = useMemo(() => wppQty * CALCULATOR.WPP_AVG_COST_BRL, [wppQty])

  return (
    <GlassPanel className="border-t-2 border-blue-500/30 p-8">
      <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
        <span className="rounded-lg bg-blue-500/20 p-2 text-sm text-blue-400">💬</span>
        WhatsApp: Meta Messaging
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
          <div className="text-[10px] font-black uppercase text-blue-400">Marketing / Utilidade</div>
          <input
            type="number"
            value={wppQty}
            onChange={(e) => setWppQty(Number(e.target.value) || 0)}
            className="w-24 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-right text-white transition-all focus:border-blue-500 focus:bg-white/[0.08] focus:outline-none"
          />
        </div>
        <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950 p-6">
          <div className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-500">
            Custo Estimado Meta
          </div>
          <div className="text-3xl font-black text-white">R$ {formatBRL(total)}</div>
        </div>
      </div>
    </GlassPanel>
  )
}

export default function PriceMatrixPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 antialiased selection:bg-pink-500/30">
      {/* Hero */}
      <header className="relative px-8 pb-16 pt-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-full max-w-3xl -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Arquitetura de{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Precificação
            </span>
            <br />
            Ecossistema SaaS 2026
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">
            Síntese estratégica e económica para unificação de ERP, CRM, PDV e AI Studio. Foco em
            empresas com lucro anual de{' '}
            <span className="font-semibold text-white">R$ 700.000,00</span> e alta procura por
            automação.
          </p>
        </div>
      </header>

      {/* Cenário Macroeconômico */}
      <section id="cenario" className="px-8 py-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-center text-sm font-black uppercase tracking-widest text-slate-500">
            Cenário Macroeconómico (Projeções Focus)
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {MACRO_INDICATORS.map((ind) => (
              <MacroCard key={ind.label} indicator={ind} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Studio + Omnichannel */}
      <section id="infra" className="px-8 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* AI Studio */}
          <GlassPanel className="relative overflow-hidden p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl" />
            <h3 className="mb-2 text-2xl font-bold text-white">AI Studio (Monetização)</h3>
            <p className="mb-8 text-sm text-slate-400">
              Estratégia de tokens convertidos em &quot;Pontos&quot; para abstrair custos de APIs
              internacionais.
            </p>

            <div className="mb-6 rounded-2xl border border-white/5 bg-slate-950/50 p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-slate-400">
                  Custo Unitário (Atacado)
                </span>
                <span className="font-mono text-sm text-pink-400">R$ 0,0072 / pt</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-800">
                <div className="h-1.5 w-1/3 rounded-full bg-pink-500" />
              </div>
            </div>

            <ul className="space-y-4">
              {AI_MODELS.map((model, i) => (
                <li
                  key={model.name}
                  className={cn(
                    'flex items-center justify-between text-sm',
                    i < AI_MODELS.length - 1 && 'border-b border-white/5 pb-3',
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xl">{model.icon}</span> {model.name}
                  </span>
                  <span className="font-mono text-slate-300">{model.cost}</span>
                </li>
              ))}
            </ul>
          </GlassPanel>

          {/* Omnichannel */}
          <GlassPanel className="relative overflow-hidden p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
            <h3 className="mb-2 text-2xl font-bold text-white">Omnichannel (Meta WhatsApp)</h3>
            <p className="mb-8 text-sm text-slate-400">
              Repasse estratégico do custo por &quot;Mensagem Entregue&quot; para proteção de
              margem.
            </p>

            <div className="space-y-3">
              {OMNICHANNEL_CATEGORIES.map((cat) => (
                <OmnichannelRow key={cat.name} category={cat} />
              ))}
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="planos" className="relative px-8 py-16">
        <div className="-z-10 absolute inset-0 skew-y-3 bg-blue-900/10" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Matriz de Planos (SaaS)</h2>
            <p className="text-slate-400">
              Equilíbrio entre infraestrutura (KVM VPS) e escalabilidade para empresas de alta
              performance.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {SAAS_PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section id="calculadoras" className="relative bg-slate-900/40 px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-white">
              Simuladores{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Estratégicos
              </span>
            </h2>
            <p className="text-slate-400">
              Compare custos de APIs globais com o ecossistema integrado.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <AICalculator />
            <WhatsAppCalculator />
          </div>
        </div>
      </section>

      {/* Financials & Unit Economics */}
      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          <GlassPanel className="flex flex-col justify-center p-6 lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-white">Gateways &amp; Markup Tributário</h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              A estratégia financeira prioriza o recebimento via{' '}
              <strong>Pix Automático (taxa de 1,19%)</strong> sobre cartão (3,99%). A fórmula de
              cálculo para venda de excedentes garante a margem frente a impostos e taxas:
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-slate-950 p-4 text-center font-mono text-sm text-slate-300">
              Preço_Final = (Custo_API + Margem) / (1 - Impostos - Taxa_Gateway)
            </div>
          </GlassPanel>

          <GlassPanel className="flex flex-col justify-between p-6">
            <div>
              <h3 className="mb-4 text-sm font-black uppercase text-slate-500">Unit Economics</h3>
              <div className="space-y-4">
                {UNIT_ECONOMICS.map((metric) => (
                  <div key={metric.label}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-slate-400">{metric.label}</span>
                      <span
                        className={cn(
                          'font-bold',
                          metric.color === 'green' ? 'text-green-400' : 'text-white',
                        )}
                      >
                        {metric.value}
                      </span>
                    </div>
                    {!metric.color && <div className="h-1 w-full rounded-full bg-slate-800" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 border-t border-white/5 pt-4">
              <div className="text-center text-[10px] uppercase tracking-widest text-slate-500">
                LTV / CAC Ratio &gt; 5x
              </div>
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 border-t border-white/5 py-12 text-center">
        <p className="mx-auto max-w-2xl px-6 text-xs italic text-slate-500">
          &quot;Posicionar o software não como um custo de TI, mas como um substituto de headcounts
          caros. Um SaaS de R$ 899 que economiza 40h de um analista de R$ 5.000 possui um ROI
          inquestionável.&quot;
        </p>
      </footer>
    </div>
  )
}
