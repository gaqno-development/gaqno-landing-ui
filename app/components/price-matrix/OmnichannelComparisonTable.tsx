'use client'

import React from 'react'
import { COMPARISON_ROWS, type ComparisonRow } from '@/app/constants/pricing'

const PLAN_KEYS: Array<keyof ComparisonRow & ('starter' | 'specialist' | 'expert' | 'professional' | 'enterprise')> =
  ['starter', 'specialist', 'expert', 'professional', 'enterprise']

const PLAN_LABELS: Record<typeof PLAN_KEYS[number], string> = {
  starter: 'Starter',
  specialist: 'Specialist',
  expert: 'Expert',
  professional: 'Professional',
  enterprise: 'Enterprise',
}

function CellValue({ value }: { value: string }) {
  if (value === '✓') return <span className="text-blue-400 text-base">✓</span>
  if (value === '—') return <span className="text-slate-700">—</span>
  return <span className="text-xs text-slate-300">{value}</span>
}

export default function OmnichannelComparisonTable() {
  return (
    <section id="comparativo-omnichannel" className="px-8 py-20 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 text-center text-xs font-black uppercase tracking-[0.3em] text-blue-400">
          Comparativo
        </p>
        <h2 className="mb-3 text-center text-3xl font-bold text-white">
          Comparativo de recursos Omnichannel
        </h2>
        <p className="mb-12 text-center text-slate-400">
          Veja em detalhe o que cada plano inclui em recursos, canais e integrações.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-white/5 bg-slate-900/60">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-white/5">
                <th className="py-4 pl-6 text-left text-xs font-black uppercase tracking-widest text-slate-500 sticky left-0 bg-slate-900/60 backdrop-blur-sm min-w-[180px]">
                  Recurso
                </th>
                {PLAN_KEYS.map((key) => (
                  <th
                    key={key}
                    className="py-4 px-3 text-center text-xs font-black uppercase tracking-widest text-slate-400"
                  >
                    {PLAN_LABELS[key]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <React.Fragment key={`row-${i}`}>
                  {row.category && (
                    <tr className="border-t border-white/5">
                      <td
                        colSpan={6}
                        className="bg-white/[0.02] py-2 pl-6 text-[10px] font-black uppercase tracking-widest text-blue-400 sticky left-0"
                      >
                        {row.category}
                      </td>
                    </tr>
                  )}
                  <tr className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 pl-6 pr-4 text-slate-400 sticky left-0 bg-slate-900/60 backdrop-blur-sm">
                      {row.name}
                    </td>
                    {PLAN_KEYS.map((key) => (
                      <td key={key} className="py-3 px-3 text-center">
                        <CellValue value={row[key]} />
                      </td>
                    ))}
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
