'use client'

import React from 'react'
import { cn } from '@/utils/cn'
import { SAAS_PLANS, PLAN_FEATURE_MATRIX } from '@/app/constants/price-matrix'

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

export default function PlanMatrix() {
  return (
    <section id="planos" className="relative px-8 py-16 scroll-mt-20">
      <div className="-z-10 absolute inset-0 skew-y-3 bg-blue-900/10" />
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center text-3xl font-bold text-white">Matriz de Planos</h2>
        <p className="mb-12 text-center text-slate-400">
          Comparativo completo de infraestrutura, recursos e financeiro.
        </p>

        <div className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          {SAAS_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative rounded-3xl border p-8',
                plan.highlighted
                  ? 'border-blue-500 bg-slate-900/60 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]'
                  : 'border-white/5 bg-slate-900/60',
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
                  Alta Performance
                </div>
              )}
              <h3 className="mb-1 text-2xl font-bold text-white">{plan.name}</h3>
              <p className={cn('mb-6 text-xs', plan.highlighted ? 'text-blue-300' : 'text-slate-400')}>
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-slate-500">/mês</span>
              </div>
              <ul className="mb-8 space-y-3 text-sm text-slate-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    {plan.highlighted ? (
                      <span className="text-blue-400">✦</span>
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                    )}
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={cn(
                  'w-full rounded-2xl py-3.5 text-sm font-bold transition-colors',
                  plan.highlighted
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500'
                    : 'border border-white/10 bg-white/5 text-white hover:bg-white/10',
                )}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/5 bg-slate-900/60">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5">
                <th className="py-4 pl-6 text-left text-xs font-black uppercase tracking-widest text-slate-500">
                  Recurso
                </th>
                <th className="py-4 text-center text-xs font-black uppercase tracking-widest text-slate-400">
                  Professional
                </th>
                <th className="py-4 pr-6 text-center text-xs font-black uppercase tracking-widest text-blue-400">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {PLAN_FEATURE_MATRIX.map((row, i) => (
                <React.Fragment key={`row-${i}`}>
                  {row.category && (
                    <tr className="border-t border-white/5">
                      <td
                        colSpan={3}
                        className="bg-white/[0.02] py-2 pl-6 text-[10px] font-black uppercase tracking-widest text-blue-400"
                      >
                        {row.category}
                      </td>
                    </tr>
                  )}
                  <tr className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 pl-6 text-slate-400">{row.feature}</td>
                    <td className="py-3 text-center">
                      <CheckIcon value={row.professional} />
                    </td>
                    <td className="py-3 pr-6 text-center">
                      <CheckIcon value={row.enterprise} />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
