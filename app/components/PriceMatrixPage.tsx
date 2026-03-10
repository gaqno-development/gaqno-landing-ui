'use client'

import dynamic from 'next/dynamic'
import MatrixHero from './price-matrix/MatrixHero'
import MacroSection from './price-matrix/MacroSection'
import ComparisonTable from './price-matrix/ComparisonTable'

const EcosystemHubSection = dynamic(() => import('./price-matrix/EcosystemHubSection'), { ssr: false })
const ProductShowcase = dynamic(() => import('./price-matrix/ProductShowcase'), { ssr: false })
const InteractionzSection = dynamic(() => import('./price-matrix/InteractionzSection'), { ssr: false })
const PricingCalculator = dynamic(() => import('./price-matrix/PricingCalculator'), { ssr: false })
const PlanMatrix = dynamic(() => import('./price-matrix/PlanMatrix'), { ssr: false })
const SecuritySection = dynamic(() => import('./price-matrix/SecuritySection'), { ssr: false })
const UnitEconomicsSection = dynamic(() => import('./price-matrix/UnitEconomicsSection'), { ssr: false })

export default function PriceMatrixPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 antialiased selection:bg-purple-500/30">
      <MatrixHero />
      <MacroSection />
      <EcosystemHubSection />
      <ProductShowcase />
      <InteractionzSection />
      <PricingCalculator />
      <PlanMatrix />
      <ComparisonTable />
      <SecuritySection />
      <UnitEconomicsSection />
    </div>
  )
}
