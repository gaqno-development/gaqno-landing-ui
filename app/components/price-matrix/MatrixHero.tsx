'use client'

const NAV_LINKS = [
  { label: 'Macro', href: '#cenario' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Calculadora', href: '#calculadora' },
  { label: 'Planos', href: '#planos' },
  { label: 'CRM', href: '#planos-crm' },
  { label: 'Omnichannel', href: '#planos-omnichannel' },
  { label: 'Comparativo', href: '#comparativo-omnichannel' },
  { label: 'Economics', href: '#economics' },
]

export default function MatrixHero() {
  return (
    <header className="relative px-8 pb-16 pt-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-full max-w-3xl -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-blue-400">
          Ecossistema SaaS · 2026
        </p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          Arquitetura de{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
            Precificação
          </span>
        </h1>
        <nav className="flex flex-wrap items-center justify-center gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 transition-colors hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
