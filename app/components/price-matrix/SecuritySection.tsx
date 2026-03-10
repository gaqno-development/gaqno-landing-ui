'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SECURITY_PILLARS, SECURITY_STATS } from '@/app/constants/price-matrix'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function SecuritySection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="seguranca" ref={ref} className="relative px-8 py-20 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
            Segurança & Compliance
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Seus dados protegidos com{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              criptografia militar
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Cada camada do portal — do banco de dados à interface — é blindada com
            criptografia de ponta, controle de acesso granular e conformidade com a LGPD.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {SECURITY_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/5 bg-slate-900/60 p-5 text-center"
            >
              <p className="mb-1 text-2xl font-black text-emerald-400">{stat.value}</p>
              <p className="text-[11px] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {SECURITY_PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 p-6 transition-colors hover:border-white/10"
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${pillar.accentColor}12 0%, transparent 70%)` }}
              />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                    style={{ background: `${pillar.accentColor}22`, border: `1px solid ${pillar.accentColor}44` }}
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="font-bold text-white">{pillar.title}</h3>
                </div>

                <p className="mb-4 text-[13px] leading-relaxed text-slate-400">
                  {pillar.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {pillar.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full px-2.5 py-1 text-[10px] font-black"
                      style={{ background: `${pillar.accentColor}15`, color: pillar.accentColor }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6"
        >
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="shrink-0 text-4xl">🔒</div>
            <div>
              <h3 className="mb-1 font-bold text-white">Compromisso com a LGPD</h3>
              <p className="text-sm text-slate-400">
                Todos os módulos registram audit trails completos — ator, ação, IP, timestamp e contexto.
                Dados pessoais são processados sob consentimento explícito, com retenção configurável por plano
                e criptografia <strong className="text-emerald-300">AES-256-GCM</strong> em repouso.
                Sua operação em conformidade com a Lei Geral de Proteção de Dados.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
