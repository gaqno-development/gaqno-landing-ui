'use client'

import { useState } from 'react'
import { NEX_AI_MODELS, type NexOrigin, type NexMediaType } from '@/app/constants/price-matrix'
import { cn } from '@/utils/cn'

const ORIGIN_TABS: { id: NexOrigin; label: string; badge: string }[] = [
  { id: 'openai', label: 'OpenAI', badge: 'bg-green-900/60 text-green-300' },
  { id: 'google', label: 'Google', badge: 'bg-blue-900/60 text-blue-300' },
  { id: 'xai', label: 'xAI', badge: 'bg-slate-700 text-slate-300' },
  { id: 'western', label: 'Western', badge: 'bg-violet-900/60 text-violet-300' },
  { id: 'chinese', label: 'Chinese', badge: 'bg-amber-900/60 text-amber-300' },
]

const MEDIA_LABELS: Record<NexMediaType, { icon: string; label: string }> = {
  image: { icon: '🖼️', label: 'Image' },
  video: { icon: '🎬', label: 'Video' },
  audio: { icon: '🔊', label: 'Audio' },
}

const MEDIA_ORDER: NexMediaType[] = ['image', 'video', 'audio']

export default function NexAiCatalog() {
  const [active, setActive] = useState<NexOrigin>('chinese')

  const filtered = NEX_AI_MODELS.filter((m) => m.origin === active)
  const grouped = MEDIA_ORDER.reduce<Record<NexMediaType, typeof filtered>>((acc, mt) => {
    const items = filtered.filter((m) => m.mediaType === mt)
    if (items.length > 0) acc[mt] = items
    return acc
  }, {} as Record<NexMediaType, typeof filtered>)

  const activeTab = ORIGIN_TABS.find((t) => t.id === active)!

  return (
    <section id="nex-ai" className="scroll-mt-20">
      <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
        <h3 className="mb-1 text-lg font-bold text-white">
          NEX AI — Catálogo Multimodal Completo
        </h3>
        <p className="mb-5 text-[10px] text-slate-600">
          75 modelos · Preços em créditos NEX AI (积分) · Fonte: api.xskill.ai · Mar/2026
        </p>

        <div className="mb-5 flex flex-wrap gap-2" role="tablist" aria-label="NEX AI origin tabs">
          {ORIGIN_TABS.map((tab) => {
            const count = NEX_AI_MODELS.filter((m) => m.origin === tab.id).length
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className={cn(
                  'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all',
                  active === tab.id
                    ? 'bg-white/10 text-white ring-1 ring-white/20'
                    : 'text-slate-500 hover:bg-white/5 hover:text-slate-300',
                )}
              >
                {tab.label}
                <span
                  className={cn(
                    'rounded-md px-1.5 py-0.5 text-[9px] font-black',
                    active === tab.id ? tab.badge : 'bg-white/5 text-slate-600',
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {(Object.entries(grouped) as [NexMediaType, typeof filtered][]).map(([mt, models]) => (
          <div key={mt} className="mb-6 last:mb-0">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-sm">{MEDIA_LABELS[mt].icon}</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                {MEDIA_LABELS[mt].label} ({models.length})
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/5">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="py-2 pl-4 text-left font-black uppercase tracking-widest text-slate-600">
                      Modelo
                    </th>
                    <th className="py-2 text-left font-black uppercase tracking-widest text-slate-600">
                      Provider
                    </th>
                    <th className="py-2 text-right font-black uppercase tracking-widest text-slate-600">
                      Base (pts)
                    </th>
                    <th className="py-2 text-left font-black uppercase tracking-widest text-slate-600 pl-4">
                      Regra de Preço
                    </th>
                    <th className="py-2 pr-4 text-left font-black uppercase tracking-widest text-slate-600">
                      Exemplos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((m) => (
                    <tr
                      key={m.name}
                      className="border-t border-white/5 transition-colors hover:bg-white/[0.02]"
                    >
                      <td className="py-2 pl-4 font-semibold text-slate-300">{m.name}</td>
                      <td className="py-2 text-slate-400">{m.provider}</td>
                      <td className="py-2 text-right font-mono text-slate-300">
                        {m.baseCredits !== null ? m.baseCredits : '—'}
                      </td>
                      <td className="py-2 pl-4 text-slate-500">{m.pricingNote}</td>
                      <td className="py-2 pr-4 font-mono text-[10px] text-slate-500">
                        {m.exampleCost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="py-8 text-center text-xs text-slate-600">
            Nenhum modelo nesta categoria.
          </p>
        )}

        <p className="mt-4 text-center text-[10px] text-slate-600">
          Preços em créditos NEX AI · Pacotes de créditos em USD disponíveis em xskill.ai
        </p>
      </div>
    </section>
  )
}
