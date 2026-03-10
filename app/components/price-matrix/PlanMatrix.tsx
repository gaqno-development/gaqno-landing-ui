'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/utils/cn'
import { UNIFIED_PLANS, PLAN_FEATURE_MATRIX } from '@/app/constants/price-matrix'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const PLAN_KEYS = ['avance', 'construa', 'impulsione', 'domine'] as const

function CheckIcon({ value }: { value: boolean | string }) {
  if (typeof value === 'string') {
    return <span className="text-xs text-slate-300">{value}</span>
  }
  return value ? (
    <span className="text-blue-400 text-base">✓</span>
  ) : (
    <span className="text-slate-700">—</span>
  )
}

const INTERACTIONZ_HIGHLIGHT = ['Interactionz']

export default function PlanMatrix() {
  const ref = useRef<HTMLDivElement>(null)
  const tableRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const tableInView = useInView(tableRef, { once: true, margin: '-80px' })
  const [annual, setAnnual] = useState(false)

  return (
    <section id="planos" ref={ref} className="relative px-8 py-20 scroll-mt-20">
      <div className="-z-10 absolute inset-0 skew-y-3 bg-blue-900/10" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-blue-400">
            Planos do Portal
          </p>
          <h2 className="mb-3 text-3xl font-bold text-white">Um plano, todos os módulos</h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            CRM, ERP, PDV, Omnichannel e AI Studio em um único pacote.{' '}
            <span className="font-semibold text-purple-400">Interactionz</span> inclusos em cada
            tier — compre pacotes extras sob demanda.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/60 px-1.5 py-1.5">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={cn(
                'rounded-full px-5 py-2 text-xs font-bold transition-colors',
                !annual ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white',
              )}
            >
              Mensal
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={cn(
                'rounded-full px-5 py-2 text-xs font-bold transition-colors',
                annual ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white',
              )}
            >
              Anual
              <span className="ml-1.5 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-400">
                Economize
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {UNIFIED_PLANS.map((plan) => {
            const price = annual ? plan.priceAnnual : plan.priceMonthly
            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className={cn(
                  'relative rounded-3xl border p-6 transition-shadow',
                  plan.highlighted
                    ? 'border-blue-500 bg-slate-900/60 shadow-[0_0_50px_-10px_rgba(59,130,246,0.35)]'
                    : 'border-white/5 bg-slate-900/60 hover:border-white/10',
                )}
              >
                {plan.highlighted && (
                  <motion.div
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white"
                  >
                    Mais Popular
                  </motion.div>
                )}

                <h3 className="mb-1 text-lg font-bold text-white">{plan.name}</h3>
                <p className={cn('mb-4 text-[11px] leading-relaxed', plan.highlighted ? 'text-blue-300' : 'text-slate-400')}>
                  {plan.description}
                </p>

                <div className="mb-1">
                  <span className="text-3xl font-black text-white">R$ {price}</span>
                  <span className="text-slate-500">/mês</span>
                </div>
                {annual && (
                  <p className="mb-4 text-[10px] text-emerald-400">
                    Economia de R$ {plan.annualSavings.toLocaleString('pt-BR')}/ano
                  </p>
                )}
                {!annual && <div className="mb-4" />}

                <div
                  className="mb-4 flex items-center justify-between rounded-xl px-3 py-2.5"
                  style={{
                    background: plan.highlighted ? 'rgba(139,92,246,0.15)' : 'rgba(139,92,246,0.08)',
                    border: '1px solid rgba(139,92,246,0.25)',
                  }}
                >
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-purple-400">
                      Interactionz
                    </p>
                    <p className="text-base font-black text-white">
                      {plan.interactionz.toLocaleString('pt-BR')}{' '}
                      <span className="text-xs font-bold text-purple-300">pts/mês</span>
                    </p>
                  </div>
                  <span className="text-xl">✦</span>
                </div>

                <ul className="mb-6 space-y-2 text-[12px] text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                    {plan.users} usuários
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                    {plan.channels}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                    {plan.infra}
                  </li>
                </ul>

                <div className="mb-6 border-t border-white/5 pt-4">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-slate-500">Destaques</p>
                  <ul className="space-y-1.5 text-[11px] text-slate-400">
                    {plan.highlightFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-0.5 text-blue-400">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'w-full rounded-2xl py-3 text-sm font-bold transition-colors',
                    plan.highlighted
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500'
                      : 'border border-white/10 bg-white/5 text-white hover:bg-white/10',
                  )}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>

        <div ref={tableRef} className="overflow-x-auto rounded-2xl border border-white/5 bg-slate-900/60">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5">
                <th className="py-4 pl-6 text-left text-xs font-black uppercase tracking-widest text-slate-500">
                  Recurso
                </th>
                {UNIFIED_PLANS.map((plan) => (
                  <th
                    key={plan.id}
                    className={cn(
                      'py-4 text-center text-xs font-black uppercase tracking-widest',
                      plan.highlighted ? 'text-blue-400' : 'text-slate-400',
                    )}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PLAN_FEATURE_MATRIX.map((row, i) => (
                <React.Fragment key={`row-${i}`}>
                  {row.category && (
                    <tr className="border-t border-white/5">
                      <td
                        colSpan={5}
                        className="bg-white/[0.02] py-2 pl-6 text-[10px] font-black uppercase tracking-widest text-blue-400"
                      >
                        {row.category}
                      </td>
                    </tr>
                  )}
                  <motion.tr
                    initial={tableInView ? { opacity: 0, x: -8 } : {}}
                    animate={tableInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.02 }}
                    className={cn(
                      'border-t border-white/5 transition-colors hover:bg-white/[0.02]',
                      INTERACTIONZ_HIGHLIGHT.some((h) => row.feature.includes(h)) &&
                        'bg-purple-950/20 hover:bg-purple-950/30',
                    )}
                  >
                    <td
                      className={cn(
                        'py-3 pl-6',
                        INTERACTIONZ_HIGHLIGHT.some((h) => row.feature.includes(h))
                          ? 'font-semibold text-purple-300'
                          : 'text-slate-400',
                      )}
                    >
                      {INTERACTIONZ_HIGHLIGHT.some((h) => row.feature.includes(h)) && (
                        <span className="mr-1.5 text-purple-400">✦</span>
                      )}
                      {row.feature}
                    </td>
                    {PLAN_KEYS.map((key) => (
                      <td key={key} className="py-3 text-center">
                        <CheckIcon value={row[key]} />
                      </td>
                    ))}
                  </motion.tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
