'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { N8N_WORKFLOWS, N8N_STATS, type N8nCategory } from '@/app/constants/price-matrix'
import { cn } from '@/utils/cn'

const CATEGORY_FILTERS: { id: N8nCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'monitoring', label: 'Monitoramento' },
  { id: 'sales', label: 'Vendas' },
  { id: 'finance', label: 'Financeiro' },
  { id: 'ai', label: 'IA' },
  { id: 'sync', label: 'Sincronização' },
]

const TRIGGER_BADGE: Record<string, { bg: string; text: string }> = {
  cron: { bg: 'bg-blue-900/60', text: 'text-blue-300' },
  webhook: { bg: 'bg-purple-900/60', text: 'text-purple-300' },
  event: { bg: 'bg-amber-900/60', text: 'text-amber-300' },
}

const CATEGORY_ACCENT: Record<N8nCategory, string> = {
  monitoring: '#3b82f6',
  sales: '#10b981',
  finance: '#f59e0b',
  ai: '#ec4899',
  sync: '#8b5cf6',
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function N8nIntegrationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<N8nCategory | 'all'>('all')

  const filtered = active === 'all'
    ? N8N_WORKFLOWS
    : N8N_WORKFLOWS.filter((w) => w.category === active)

  return (
    <section id="automacao" ref={ref} className="relative px-8 py-20 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-orange-400">
            Automação Integrada
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Fluxos visuais com{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              n8n
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            12 automações pré-configuradas conectam todos os serviços Gaqno — CRM, ERP, PDV, Omnichannel, AI Studio.
            Cada fluxo é exibido como uma interface visual integrada ao painel, com histórico, alertas e retorno em tempo real — sem sair da plataforma.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8 grid grid-cols-3 gap-4"
        >
          {N8N_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/5 bg-slate-900/60 p-5 text-center"
            >
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mb-6 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Workflow category filter"
        >
          {CATEGORY_FILTERS.map((cat) => {
            const count = cat.id === 'all'
              ? N8N_WORKFLOWS.length
              : N8N_WORKFLOWS.filter((w) => w.category === cat.id).length
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all',
                  active === cat.id
                    ? 'bg-white/10 text-white ring-1 ring-white/20'
                    : 'text-slate-500 hover:bg-white/5 hover:text-slate-300',
                )}
              >
                {cat.label}
                <span
                  className={cn(
                    'rounded-md px-1.5 py-0.5 text-[9px] font-black',
                    active === cat.id ? 'bg-orange-900/60 text-orange-300' : 'bg-white/5 text-slate-600',
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((wf) => {
            const badge = TRIGGER_BADGE[wf.triggerType]
            const accent = CATEGORY_ACCENT[wf.category]
            return (
              <motion.div
                key={wf.id}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 p-5 transition-colors hover:border-white/10"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at 0% 0%, ${accent}12 0%, transparent 70%)` }}
                />
                <div className="relative">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black text-slate-600">#{wf.id}</span>
                    <span className={cn('rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-wide', badge.bg, badge.text)}>
                      {wf.trigger}
                    </span>
                  </div>
                  <h3 className="mb-2 font-bold text-white">{wf.name}</h3>
                  <p className="mb-3 text-[11px] leading-relaxed text-slate-500">{wf.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {wf.services.map((svc) => (
                      <span
                        key={svc}
                        className="rounded-full px-2 py-0.5 text-[9px] font-bold"
                        style={{ background: `${accent}18`, color: accent }}
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 rounded-2xl border border-orange-500/20 bg-orange-950/20 p-6"
        >
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="shrink-0 text-4xl">n8n</div>
            <div>
              <h3 className="mb-1 font-bold text-white">Fluxos visuais direto no painel</h3>
              <p className="text-sm text-slate-400">
                Ao contrário de acessar o n8n diretamente — onde não há retorno visual integrado — cada automação
                do ecossistema Gaqno gera <strong className="text-orange-300">fluxos de UI nativos</strong>:
                acompanhe execuções, veja métricas e receba alertas diretamente no contexto de cada módulo.
                Tudo dentro da plataforma.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
