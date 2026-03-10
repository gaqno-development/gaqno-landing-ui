'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  INTERACTIONZ_POINT_PACKS,
  INTERACTIONZ_TIERS,
  MODULE_CONNECTIONS,
  CALCULATOR,
} from '@/app/constants/price-matrix'
import { cn } from '@/utils/cn'
import { formatBRLCurrency } from '@/utils/format'

const CONSUMPTION_EXAMPLES = [
  { action: 'Mensagem respondida por bot IA (Omnichannel)', pts: 1, icon: '💬', color: '#8b5cf6' },
  { action: 'Análise de lead por IA (CRM)', pts: 8, icon: '📊', color: '#3b82f6' },
  { action: 'OCR de NF-e (ERP)', pts: 12, icon: '⚙️', color: '#10b981' },
  { action: 'Sugestão de venda cruzada (PDV)', pts: 4, icon: '🏪', color: '#f59e0b' },
  { action: 'Imagem gerada (AI Studio)', pts: 40, icon: '🖼️', color: '#ec4899' },
  { action: '10k tokens de texto (AI Studio)', pts: 12, icon: '📝', color: '#f472b6' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function InteractionzSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTier, setActiveTier] = useState(1)

  return (
    <section id="interactionz" ref={ref} className="relative px-8 py-20 scroll-mt-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-pink-900/5" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-purple-400">
            Moeda Universal de IA
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Interactionz
            </span>{' '}
            — a moeda do ecossistema
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Um único saldo de Interactionz que alimenta IA em todos os módulos.
            Sem planos separados por ferramenta — você compra Interactionz e usa onde precisar.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CONSUMPTION_EXAMPLES.map((ex) => (
            <motion.div
              key={ex.action}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-900/60 px-5 py-4"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                style={{ background: `${ex.color}22`, border: `1px solid ${ex.color}33` }}
              >
                {ex.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-400 leading-tight">{ex.action}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-lg font-black" style={{ color: ex.color }}>{ex.pts}</p>
                <p className="text-[9px] font-bold uppercase tracking-wide text-slate-600">pts</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 rounded-2xl border border-purple-500/20 bg-slate-900/60 p-6"
        >
          <h3 className="mb-6 text-center text-sm font-black uppercase tracking-widest text-purple-400">
            O que cada plano permite por mês
          </h3>

          <div className="mb-6 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Planos de Interactionz">
            {INTERACTIONZ_TIERS.map((tier, i) => (
              <button
                key={tier.label}
                type="button"
                role="tab"
                aria-selected={activeTier === i}
                aria-controls={`tier-panel-${tier.label}`}
                onClick={() => setActiveTier(i)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-bold transition-all',
                  activeTier === i
                    ? 'text-white shadow-lg'
                    : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white',
                )}
                style={
                  activeTier === i
                    ? { background: `${tier.color}33`, border: `1px solid ${tier.color}`, color: tier.color }
                    : {}
                }
              >
                {tier.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {INTERACTIONZ_TIERS.map((tier, i) =>
              activeTier === i ? (
                <motion.div
                  key={tier.label}
                  id={`tier-panel-${tier.label}`}
                  role="tabpanel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-3"
                >
                  {[
                    {
                      label: 'Interações de bot',
                      value: tier.examplesOmnichannel.toLocaleString('pt-BR'),
                      sub: 'mensagens atendidas por IA (Omnichannel)',
                      icon: '💬',
                      color: '#8b5cf6',
                    },
                    {
                      label: 'Análises de lead',
                      value: tier.examplesCrmLeads.toLocaleString('pt-BR'),
                      sub: 'leads analisados por IA (CRM)',
                      icon: '📊',
                      color: '#3b82f6',
                    },
                    {
                      label: 'Imagens geradas',
                      value: tier.examplesImages.toLocaleString('pt-BR'),
                      sub: 'imagens via AI Studio',
                      icon: '🖼️',
                      color: '#ec4899',
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-white/5 p-5 text-center"
                      style={{ borderTop: `2px solid ${stat.color}44` }}
                    >
                      <div className="mb-2 text-2xl">{stat.icon}</div>
                      <p className="mb-1 text-2xl font-black text-white">{stat.value}</p>
                      <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: stat.color }}>
                        {stat.label}
                      </p>
                      <p className="mt-1 text-[10px] text-slate-600">{stat.sub}</p>
                    </div>
                  ))}
                </motion.div>
              ) : null,
            )}
          </AnimatePresence>

          <p className="mt-4 text-center text-[10px] text-slate-600">
            Saldo de {INTERACTIONZ_TIERS[activeTier]?.pointsPerMonth.toLocaleString('pt-BR')} Interactionz/mês inclusos no plano {INTERACTIONZ_TIERS[activeTier]?.label} ·
            Interactionz adicionais disponíveis
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="mb-6 text-center text-sm font-black uppercase tracking-widest text-pink-400">
            Pacotes de Interactionz
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {INTERACTIONZ_POINT_PACKS.map((pack) => {
              const apiCostUsd = pack.points * CALCULATOR.API_COST_PER_POINT_USD
              const apiCostBrl = apiCostUsd * CALCULATOR.CAMBIO
              const packPriceBrl = pack.priceUsd * CALCULATOR.CAMBIO
              const marginPct = ((pack.priceUsd - apiCostUsd) / pack.priceUsd) * 100

              return (
                <motion.div
                  key={pack.points}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className={cn(
                    'relative rounded-2xl border p-5 text-center transition-shadow',
                    pack.highlighted
                      ? 'border-pink-500/50 bg-pink-950/30 shadow-[0_0_32px_-8px_rgba(236,72,153,0.3)]'
                      : 'border-white/5 bg-slate-900/60 hover:border-white/10',
                  )}
                >
                  {pack.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-pink-500 px-3 py-0.5 text-[9px] font-black uppercase tracking-widest text-white">
                      Mais popular
                    </div>
                  )}

                  <motion.p
                    className="text-3xl font-black text-white"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    {pack.points.toLocaleString('pt-BR')}
                  </motion.p>
                  <p className="mb-4 text-[10px] font-black uppercase tracking-widest text-pink-400">
                    Interactionz
                  </p>

                  <div className="mb-4 space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center justify-center gap-1.5">
                      <span>🖼️</span>
                      <span>{pack.images.toLocaleString('pt-BR')} imagens</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <span>🎬</span>
                      <span>{pack.videoSeconds.toLocaleString('pt-BR')} seg de vídeo</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <span>💬</span>
                      <span>{pack.points.toLocaleString('pt-BR')} msgs bot</span>
                    </div>
                  </div>

                  <div
                    className="mb-3 rounded-xl py-2"
                    style={{ background: pack.highlighted ? 'rgba(236,72,153,0.15)' : 'rgba(255,255,255,0.04)' }}
                  >
                    <p className="text-xl font-black text-white">
                      {formatBRLCurrency(packPriceBrl)}
                    </p>
                    <p className="text-[10px] text-slate-500">${pack.priceUsd.toFixed(2)} USD</p>
                  </div>

                  <div className="border-t border-white/5 pt-3 space-y-1">
                    <p className="text-[10px] text-slate-600">
                      Custo API:{' '}
                      <span className="font-mono text-slate-700">{formatBRLCurrency(apiCostBrl)}</span>
                    </p>
                    <p className="text-xs font-black text-green-400">
                      Margem {marginPct.toFixed(0)}%
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-6 rounded-xl border border-white/5 bg-white/5 p-4">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="space-x-4 text-sm text-slate-500">
                <span>1 imagem = 40 pts</span>
                <span>·</span>
                <span>1 seg de vídeo = 350 pts</span>
                <span>·</span>
                <span>1 msg bot = 1 pt</span>
                <span>·</span>
                <span className="text-purple-400 font-semibold">Interactionz não expiram</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
