'use client'

import { cn } from '@/utils/cn'
import { PLANS, COMPARISON_ROWS, type Plan, type ComparisonRow } from '../constants/pricing'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md',
        plan.highlighted && 'border-primary ring-2 ring-primary/20',
      )}
    >
      {plan.highlighted && (
        <Badge className="absolute -top-2 left-1/2 -translate-x-1/2">Mais Popular</Badge>
      )}
      <div className="mb-4">
        <h3 className="text-lg font-semibold uppercase tracking-wide text-foreground">{plan.name}</h3>
        <p className="text-sm text-muted-foreground">{plan.tagline}</p>
      </div>
      <p className="mb-1 text-2xl font-bold text-foreground">{plan.price}</p>
      <ul className="mb-4 space-y-1 text-sm text-muted-foreground">
        <li>{plan.users}</li>
        <li>{plan.interactionz}</li>
      </ul>
      <p className="mb-4 text-xs text-muted-foreground">{plan.totalNote}</p>
      <Button className="mt-auto w-full" variant={plan.highlighted ? 'default' : 'outline'} asChild>
        <a href="#comparativo">{plan.cta}</a>
      </Button>
      <p className="mt-4 text-center text-xs text-muted-foreground">{plan.description}</p>
    </div>
  )
}

const PLAN_IDS = ['avance', 'construa', 'impulsione', 'domine'] as const
const HEADERS = ['AVANCE', 'CONSTRUA', 'IMPULSIONE', 'DOMINE']

function ComparisonTableLocal() {
  const getCell = (row: ComparisonRow, planId: (typeof PLAN_IDS)[number]) => row[planId]

  let lastCategory = ''
  return (
    <div className="overflow-x-auto rounded-xl border bg-card">
      <table className="w-full min-w-[700px] border-collapse text-sm">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="sticky left-0 z-10 min-w-[220px] border-b border-r bg-muted/50 px-4 py-3 text-left font-semibold text-foreground">
              Recurso
            </th>
            {HEADERS.map((h) => (
              <th
                key={h}
                className="min-w-[120px] border-b px-4 py-3 text-center font-semibold text-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map((row, i) => {
            const showCategory = row.category && row.category !== lastCategory
            if (row.category) lastCategory = row.category
            return (
              <tr key={i}>
                <td
                  className={cn(
                    'sticky left-0 z-10 border-b border-r bg-background px-4 py-2',
                    showCategory && 'bg-muted/30 font-medium',
                  )}
                >
                  {showCategory && (
                    <span className="block text-xs font-semibold uppercase text-muted-foreground">
                      {row.category}
                    </span>
                  )}
                  {row.name}
                </td>
                {PLAN_IDS.map((planId) => (
                  <td
                    key={planId}
                    className="border-b px-4 py-2 text-center text-muted-foreground"
                  >
                    {getCell(row, planId)}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default function CustosPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Planos do Portal
          </h1>
          <p className="text-lg text-muted-foreground">
            CRM, ERP, PDV, Omnichannel e AI Studio em um único pacote.
            Interactionz inclusos — compre pacotes extras sob demanda.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8" id="planos">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12" id="comparativo">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
          Comparativo de recursos
        </h2>
        <ComparisonTableLocal />
      </section>

      <section className="container mx-auto px-4 py-12 text-center">
        <Button size="lg" className="mt-6" asChild>
          <a href="#planos">Ver planos</a>
        </Button>
      </section>
    </main>
  )
}
