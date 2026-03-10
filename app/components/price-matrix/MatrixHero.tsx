'use client'

import { motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Macro', href: '#cenario' },
  { label: 'Ecossistema', href: '#ecossistema' },
  { label: 'Automação', href: '#automacao' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Interactionz', href: '#interactionz' },
  { label: 'Calculadora', href: '#calculadora' },
  { label: 'Planos', href: '#planos' },
  { label: 'Comparativo', href: '#comparativo' },
  { label: 'NEX AI', href: '#nex-ai' },
  { label: 'Segurança', href: '#seguranca' },
  { label: 'Economics', href: '#economics' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.6 },
  },
}

const navItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export default function MatrixHero() {
  return (
    <header className="relative px-8 pb-16 pt-32 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-full max-w-4xl -translate-x-1/2 rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)' }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/4 top-20 h-32 w-32 rounded-full bg-blue-600/10 blur-[60px]"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute right-1/4 top-40 h-24 w-24 rounded-full bg-purple-600/10 blur-[40px]"
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div
        className="mx-auto max-w-7xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-blue-400"
        >
          Portal SaaS · 2026 · Powered by Interactionz
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Um Portal.{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ferramentas Integradas.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg"
        >
          CRM · ERP · PDV · Omnichannel · AI Studio — todos conectados em um único ecossistema.
          IA precificada universalmente por{' '}
          <span className="font-bold text-purple-400">Interactionz</span>, sem cobranças por módulo.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mx-auto mb-10 flex max-w-sm flex-col items-center gap-3 sm:flex-row sm:max-w-none sm:justify-center"
        >
          <div className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-bold text-purple-300">1 ponto = 1 Interactionz de IA</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-bold text-blue-300">Módulos ilimitados inclusos</span>
          </div>
        </motion.div>

        <motion.nav
          className="flex flex-wrap items-center justify-center gap-2"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 transition-colors hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>
    </header>
  )
}
