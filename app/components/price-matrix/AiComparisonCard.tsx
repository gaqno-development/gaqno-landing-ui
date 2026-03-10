'use client'

import { AI_MODELS, CALCULATOR, LLM_PROVIDERS, type LLMTier } from '@/app/constants/price-matrix'
import { cn } from '@/utils/cn'
import { formatBRL } from '@/utils/format'

const TIER_STYLES: Record<LLMTier, { badge: string; label: string }> = {
  reasoning: { badge: 'bg-purple-900/60 text-purple-300', label: 'Reasoning' },
  premium:   { badge: 'bg-slate-700 text-slate-300', label: 'Premium' },
  mid:       { badge: 'bg-blue-900/60 text-blue-300', label: 'Mid-tier' },
  low:       { badge: 'bg-green-900/60 text-green-300', label: 'Low-cost' },
  ultra:     { badge: 'bg-emerald-900/60 text-emerald-300', label: 'Ultra-low' },
}

export default function AiComparisonCard() {
  return (
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
                  <span className="text-pink-400">AI Studio</span>
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

      <div className="mt-8 border-t border-white/5 pt-6">
        <h4 className="mb-1 text-sm font-black uppercase tracking-widest text-slate-500">
          Mercado LLM — Preços API por Provedor
        </h4>
        <p className="mb-4 text-[10px] text-slate-600">
          Preços verificados fev/2026 · Fonte: IntuitionLabs.ai LLM API Pricing Comparison
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/5">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="py-2.5 pl-4 text-left font-black uppercase tracking-widest text-slate-600">Provedor</th>
                <th className="py-2.5 text-left font-black uppercase tracking-widest text-slate-600">Modelo</th>
                <th className="py-2.5 text-right font-black uppercase tracking-widest text-slate-600">Context</th>
                <th className="py-2.5 text-right font-black uppercase tracking-widest text-slate-600">Input / 1M</th>
                <th className="py-2.5 pr-4 text-right font-black uppercase tracking-widest text-slate-600">Output / 1M</th>
                <th className="py-2.5 pr-4 text-center font-black uppercase tracking-widest text-slate-600">Tier</th>
              </tr>
            </thead>
            <tbody>
              {LLM_PROVIDERS.map((p) => (
                <tr key={`${p.provider}-${p.model}`} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="py-2.5 pl-4 font-semibold text-slate-300">{p.provider}</td>
                  <td className="py-2.5 font-mono text-slate-400">{p.model}</td>
                  <td className="py-2.5 text-right font-mono text-slate-500">{p.context}</td>
                  <td className="py-2.5 text-right font-mono text-slate-300">${p.inputPer1M.toFixed(2)}</td>
                  <td className="py-2.5 pr-4 text-right font-mono text-slate-300">${p.outputPer1M.toFixed(2)}</td>
                  <td className="py-2.5 pr-4 text-center">
                    <span className={cn('rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-wide', TIER_STYLES[p.tier].badge)}>
                      {TIER_STYLES[p.tier].label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
