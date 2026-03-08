'use client'

import dynamic from 'next/dynamic'
import { MACRO_INDICATORS } from '@/app/constants/price-matrix'
import { cn } from '@/utils/cn'

const MacroChart = dynamic(() => import('./MacroChart'), { ssr: false })

export default function MacroSection() {
  return (
    <section id="cenario" className="px-8 py-10 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-sm font-black uppercase tracking-widest text-slate-500">
          Cenário Macroeconômico — Projeções Focus 2026
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {MACRO_INDICATORS.map((ind) => (
              <div
                key={ind.label}
                className={cn(
                  'rounded-2xl border border-white/5 bg-slate-900/60 p-5 text-center transition-colors hover:border-white/10',
                  ind.highlighted && 'border-b-2 border-blue-500',
                )}
              >
                <div
                  className={cn(
                    'mb-1 text-xs font-bold uppercase',
                    ind.highlighted ? 'text-blue-400' : 'text-slate-400',
                  )}
                >
                  {ind.label}
                </div>
                <div className="text-3xl font-black text-white">{ind.value}</div>
                <div className="mt-1 text-[10px] text-slate-500">{ind.note}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
            <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">
              Comparativo de taxas (%)
            </p>
            <MacroChart />
            <p className="mt-3 text-center text-[10px] text-slate-600">
              A Selic alta favorece OPEX (SaaS) sobre investimentos em infraestrutura própria.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
