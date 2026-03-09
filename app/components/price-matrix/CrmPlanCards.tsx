'use client'

import { cn } from '@/utils/cn'
import { CRM_PLANS, type CrmPlan } from '@/app/constants/price-matrix'
import { useState } from 'react'

type Billing = 'monthly' | 'annual'

function PlanCard({ plan, billing }: { plan: CrmPlan; billing: Billing }) {
  const price = billing === 'annual' ? plan.priceAnnual : plan.priceMonthly

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
          Popular
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-sm font-black uppercase tracking-widest text-white">{plan.name}</h3>
      </div>

      <div className="mb-1">
        <span className="text-3xl font-black text-white">R$ {price}</span>
        <span className="text-slate-500 text-sm">/mês</span>
      </div>
      {billing === 'annual' && (
        <p className="mb-4 text-xs text-blue-400">
          Economize R$ {plan.annualSavings} no ano
        </p>
      )}

      <ul className="mb-5 space-y-1.5 text-sm text-slate-400">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-blue-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {plan.highlightFeatures.length > 0 && (
        <div className="border-t border-white/5 pt-4 space-y-1.5">
          {plan.highlightFeatures.map((f) => (
            <p key={f} className="flex items-center gap-2 text-xs text-slate-300">
              <span className="text-blue-400">✦</span>
              {f}
            </p>
          ))}
        </div>
      )}

      <button
        type="button"
        className={cn(
          'mt-auto w-full rounded-xl py-3 text-sm font-bold transition-colors mt-6',
          plan.highlighted
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500'
            : 'border border-white/10 bg-white/5 text-white hover:bg-white/10',
        )}
      >
        Começar agora
      </button>
    </div>
  )
}

export default function CrmPlanCards() {
  const [billing, setBilling] = useState<Billing>('annual')

  return (
    <section id="planos-crm" className="relative px-8 py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 text-center text-xs font-black uppercase tracking-[0.3em] text-blue-400">
          CRM · ERP · PDV
        </p>
        <h2 className="mb-3 text-center text-3xl font-bold text-white">Planos CRM</h2>
        <p className="mb-8 text-center text-slate-400">
          Gestão de vendas, estoque, fiscal e marketplaces em um único sistema.
        </p>

        <div className="flex items-center justify-center gap-2 mb-10">
          {(['monthly', 'annual'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setBilling(mode)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-semibold transition-colors',
                billing === mode
                  ? 'bg-blue-600 text-white'
                  : 'border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10',
              )}
            >
              {mode === 'monthly' ? 'Mensal' : 'Anual'}
            </button>
          ))}
          {billing === 'annual' && (
            <span className="ml-2 rounded-full bg-blue-500/20 border border-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-300">
              Economize até 3 meses
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CRM_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} billing={billing} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-600">
          Todos os planos incluem teste grátis por 30 dias. Sem cartão de crédito.
        </p>
      </div>
    </section>
  )
}
