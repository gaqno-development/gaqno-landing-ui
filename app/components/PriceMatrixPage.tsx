'use client'

import dynamic from 'next/dynamic'
import MatrixHero from './price-matrix/MatrixHero'
import MacroSection from './price-matrix/MacroSection'
import PlanMatrix from './price-matrix/PlanMatrix'
import OmnichannelPlanCards from './price-matrix/OmnichannelPlanCards'
import OmnichannelComparisonTable from './price-matrix/OmnichannelComparisonTable'

const ProductShowcase = dynamic(() => import('./price-matrix/ProductShowcase'), { ssr: false })
const PricingCalculator = dynamic(() => import('./price-matrix/PricingCalculator'), { ssr: false })
const UnitEconomicsSection = dynamic(() => import('./price-matrix/UnitEconomicsSection'), { ssr: false })

export default function PriceMatrixPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 antialiased selection:bg-pink-500/30">
      <MatrixHero />
      <MacroSection />
      <ProductShowcase />
      <PricingCalculator />
      <PlanMatrix />
      <OmnichannelPlanCards />
      <OmnichannelComparisonTable />
      <UnitEconomicsSection />
    </div>
  )
}
