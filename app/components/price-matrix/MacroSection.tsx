'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'
import { MACRO_INDICATORS } from '@/app/constants/price-matrix'
import { cn } from '@/utils/cn'

const MacroChart = dynamic(() => import('./MacroChart'), { ssr: false })

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function MacroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="cenario" ref={ref} className="px-8 py-20 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-sm font-black uppercase tracking-widest text-slate-500"
        >
          Cenário Macroeconômico — Projeções Focus 2026
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-4"
          >
            {MACRO_INDICATORS.map((ind) => (
              <motion.div
                key={ind.label}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
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
                <motion.div
                  className="text-3xl font-black text-white"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {ind.value}
                </motion.div>
                <div className="mt-1 text-[10px] text-slate-500">{ind.note}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-white/5 bg-slate-900/60 p-6"
          >
            <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">
              Comparativo de taxas (%)
            </p>
            <MacroChart />
            <p className="mt-3 text-center text-[10px] text-slate-600">
              A Selic alta favorece OPEX (SaaS) sobre investimentos em infraestrutura própria.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
