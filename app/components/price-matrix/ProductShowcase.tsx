'use client'

import { useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { PRODUCT_SECTIONS, MODULE_CONNECTIONS, type ProductId } from '@/app/constants/price-matrix'
import { cn } from '@/utils/cn'

const ProductChart = dynamic(() => import('./ProductChart'), { ssr: false })

const tabVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

const contentVariants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
}

const metricsVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const metricItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
}

export default function ProductShowcase() {
  const [active, setActive] = useState<ProductId>('crm')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const product = PRODUCT_SECTIONS.find((p) => p.id === active)!
  const moduleConnection = MODULE_CONNECTIONS.find((m) => m.id === active)

  return (
    <section id="produtos" ref={ref} className="px-8 py-20 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-white">Produtos do Ecossistema</h2>
          <p className="text-slate-400">
            Cada produto opera de forma independente e se potencializa quando integrado.
          </p>
        </motion.div>

        <motion.div
          className="mb-8 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Produtos do ecossistema"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {PRODUCT_SECTIONS.map((p) => (
            <motion.button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={active === p.id}
              aria-controls={`panel-${p.id}`}
              onClick={() => setActive(p.id)}
              variants={tabVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-semibold transition-all',
                active === p.id
                  ? 'text-white shadow-lg'
                  : 'border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white',
              )}
              style={
                active === p.id
                  ? {
                      background: product.accentColor + '33',
                      border: `1px solid ${product.accentColor}`,
                      color: product.accentColor,
                    }
                  : {}
              }
            >
              {p.title}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`panel-${active}`}
            role="tabpanel"
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 gap-6 lg:grid-cols-5"
          >
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div
                className="rounded-2xl border border-white/5 bg-slate-900/60 p-6"
                style={{ borderTop: `2px solid ${product.accentColor}44` }}
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold" style={{ color: product.accentColor }}>
                    {product.title}
                  </h3>
                  {moduleConnection && (
                    <div
                      className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wide"
                      style={{
                        background: `${product.accentColor}18`,
                        border: `1px solid ${product.accentColor}33`,
                        color: product.accentColor,
                      }}
                    >
                      <span>✦</span>
                      <span>
                        {moduleConnection.interactionzPerAction >= 1000
                          ? `${(moduleConnection.interactionzPerAction / 1000).toFixed(0)}k`
                          : moduleConnection.interactionzPerAction}{' '}
                        pts IA
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{product.description}</p>

                {moduleConnection && (
                  <div className="mt-4 border-t border-white/5 pt-4">
                    <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-slate-600">
                      Recursos de IA integrados
                    </p>
                    <ul className="space-y-1.5">
                      {moduleConnection.aiFeatures.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                          <span style={{ color: product.accentColor }}>›</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <motion.div
                className="grid grid-cols-1 gap-3"
                variants={metricsVariants}
                initial="hidden"
                animate="visible"
              >
                {product.metrics.map((m) => (
                  <motion.div
                    key={m.label}
                    variants={metricItemVariants}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3 hover:border-white/10 transition-colors"
                  >
                    <span className="text-xs text-slate-400">{m.label}</span>
                    <span className="text-sm font-bold" style={{ color: m.color }}>
                      {m.value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="lg:col-span-3 rounded-2xl border border-white/5 bg-slate-900/60 p-6">
              <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">
                {product.chartKeys.map((k) => k.label).join(' vs ')}
              </p>
              <ProductChart product={product} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
