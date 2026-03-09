'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MODULE_CONNECTIONS } from '@/app/constants/price-matrix'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const pulseVariants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.6, 1, 0.6],
    transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
  },
}

const orbitVariants = (delay: number) => ({
  animate: {
    rotate: [0, 360],
    transition: { duration: 20 + delay * 4, repeat: Infinity, ease: 'linear', delay },
  },
})

export default function EcosystemHubSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ecossistema" ref={ref} className="relative px-8 py-20 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-purple-400">
            Arquitetura do Ecossistema
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ferramentas que se{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              conversam
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Cada módulo amplifica os outros. A IA flui entre todos, consumindo
            <span className="font-semibold text-purple-300"> Interactionz</span> — uma moeda unificada
            que elimina cobranças por uso por módulo.
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:w-2/5 lg:grid-cols-1"
          >
            {MODULE_CONNECTIONS.slice(0, 3).map((mod) => (
              <motion.div
                key={mod.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02, x: 4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 p-5 transition-colors hover:border-white/10"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at 0% 50%, ${mod.accentColor}12 0%, transparent 70%)` }}
                />
                <div className="relative flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                    style={{ background: `${mod.accentColor}22`, border: `1px solid ${mod.accentColor}44` }}
                  >
                    {mod.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <h3 className="font-bold text-white">{mod.title}</h3>
                      <span
                        className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-black"
                        style={{ background: `${mod.accentColor}22`, color: mod.accentColor }}
                      >
                        {mod.interactionzPerAction} pts/{mod.actionUnit.split(' ')[0]}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {mod.aiFeatures.map((f) => (
                        <li key={f} className="flex items-center gap-1.5 text-[11px] text-slate-500">
                          <span style={{ color: mod.accentColor }}>›</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="relative flex shrink-0 items-center justify-center lg:w-1/5">
            <motion.div
              className="relative flex h-36 w-36 items-center justify-center rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(236,72,153,0.1) 60%, transparent 100%)' }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border border-purple-500/20"
                variants={pulseVariants}
                animate="animate"
              />
              <motion.div
                className="absolute inset-[-16px] rounded-full border border-purple-500/10"
                variants={orbitVariants(0)}
                animate="animate"
              >
                <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-purple-400" />
              </motion.div>
              <motion.div
                className="absolute inset-[-32px] rounded-full border border-pink-500/10"
                variants={orbitVariants(2)}
                animate="animate"
              >
                <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-pink-400" />
              </motion.div>
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-3xl"
                >
                  ✦
                </motion.div>
                <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-purple-300">
                  Interactionz
                </p>
              </div>
            </motion.div>

            <div className="hidden lg:flex absolute inset-y-0 left-0 w-px items-center justify-center">
              <motion.div
                className="h-full w-px"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.4), transparent)' }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="hidden lg:flex absolute inset-y-0 right-0 w-px items-center justify-center">
              <motion.div
                className="h-full w-px"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(236,72,153,0.4), transparent)' }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:w-2/5 lg:grid-cols-1"
          >
            {MODULE_CONNECTIONS.slice(3).map((mod) => (
              <motion.div
                key={mod.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02, x: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 p-5 transition-colors hover:border-white/10"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at 100% 50%, ${mod.accentColor}12 0%, transparent 70%)` }}
                />
                <div className="relative flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                    style={{ background: `${mod.accentColor}22`, border: `1px solid ${mod.accentColor}44` }}
                  >
                    {mod.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <h3 className="font-bold text-white">{mod.title}</h3>
                      <span
                        className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-black"
                        style={{ background: `${mod.accentColor}22`, color: mod.accentColor }}
                      >
                        {mod.interactionzPerAction >= 1000
                          ? `${(mod.interactionzPerAction / 1000).toFixed(0)}k pts`
                          : `${mod.interactionzPerAction} pts`}/{mod.actionUnit.split(' ')[0]}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {mod.aiFeatures.map((f) => (
                        <li key={f} className="flex items-center gap-1.5 text-[11px] text-slate-500">
                          <span style={{ color: mod.accentColor }}>›</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 rounded-2xl border border-purple-500/20 bg-purple-950/20 p-6"
        >
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="shrink-0 text-4xl">🔗</div>
            <div>
              <h3 className="mb-1 font-bold text-white">Interoperabilidade nativa</h3>
              <p className="text-sm text-slate-400">
                Um lead captado pelo Omnichannel vira contato no CRM, gera ordem no ERP, é registrado no PDV —
                e a IA age em cada etapa consumindo <strong className="text-purple-300">Interactionz</strong> do
                mesmo saldo compartilhado. Sem silos. Sem cobranças surpresa por módulo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
