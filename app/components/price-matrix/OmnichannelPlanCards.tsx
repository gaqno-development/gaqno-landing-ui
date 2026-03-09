'use client'

import { cn } from '@/utils/cn'
import { PLANS, type Plan } from '@/app/constants/pricing'

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border p-6 bg-slate-900/60 transition-shadow',
        plan.highlighted
          ? 'border-blue-500 shadow-[0_0_30px_-8px_rgba(59,130,246,0.3)]'
          : 'border-white/5',
      )}
    >
      {plan.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white">
          Mais Vendido
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-sm font-black uppercase tracking-widest text-white">{plan.name}</h3>
        <p className={cn('text-xs mt-1', plan.highlighted ? 'text-blue-300' : 'text-slate-500')}>
          {plan.tagline}
        </p>
      </div>

      <div className="mb-4">
        <span className="text-3xl font-black text-white">{plan.price}</span>
      </div>

      <ul className="mb-5 space-y-1.5 text-sm text-slate-400">
        <li className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-blue-500 shrink-0" />
          {plan.users}
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-blue-500 shrink-0" />
          {plan.interactionz}
        </li>
      </ul>

      <div className="mb-4 rounded-xl border border-white/5 bg-white/[0.03] p-3 text-xs">
        <p className="font-semibold text-slate-300">Pacote de canais</p>
        <p className="mt-1 text-blue-400 font-bold">{plan.channelPackPrice}</p>
        <p className="mt-0.5 text-slate-500">{plan.channelPackNote}</p>
      </div>

      <p className="mb-1 text-sm text-slate-400">
        Total:{' '}
        <span className={cn('font-bold', plan.highlighted ? 'text-blue-400' : 'text-white')}>
          {plan.total}
        </span>
      </p>
      {plan.totalNote && (
        <p className="mb-4 text-xs text-slate-600">{plan.totalNote}</p>
      )}

      <button
        type="button"
        className={cn(
          'mt-auto w-full rounded-xl py-3 text-sm font-bold transition-colors',
          plan.highlighted
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500'
            : 'border border-white/10 bg-white/5 text-white hover:bg-white/10',
        )}
      >
        {plan.cta}
      </button>

      <p className="mt-3 text-center text-xs text-slate-600">{plan.description}</p>
    </div>
  )
}

export default function OmnichannelPlanCards() {
  return (
    <section id="planos-omnichannel" className="relative px-8 py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 text-center text-xs font-black uppercase tracking-[0.3em] text-blue-400">
          Omnichannel
        </p>
        <h2 className="mb-3 text-center text-3xl font-bold text-white">Planos Omnichannel</h2>
        <p className="mb-12 text-center text-slate-400">
          Mensagens em massa, IA generativa e canais integrados. Escolha o que cabe no seu negócio.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-600">
          Setup: R$ 649 no primeiro mês caso necessite habilitar os canais WhatsApp e/ou RCS.
        </p>
      </div>
    </section>
  )
}
