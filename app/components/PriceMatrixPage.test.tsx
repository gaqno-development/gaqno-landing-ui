import { describe, it, expect, vi, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'

vi.mock('next/dynamic', () => ({
  default: (_fn: unknown) => function MockDynamic() { return null },
}))

vi.mock('recharts', () => ({
  BarChart: ({ children }: { children: React.ReactNode }) => <div data-testid="bar-chart">{children}</div>,
  Bar: () => null,
  XAxis: () => null,
  YAxis: () => null,
  Tooltip: () => null,
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Cell: () => null,
  PieChart: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Pie: () => null,
  Legend: () => null,
  RadialBarChart: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  RadialBar: () => null,
  AreaChart: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Area: () => null,
}))

import React from 'react'

import PriceMatrixPage from './PriceMatrixPage'
import MatrixHero from './price-matrix/MatrixHero'
import MacroSection from './price-matrix/MacroSection'
import PlanMatrix from './price-matrix/PlanMatrix'
import OmnichannelPlanCards from './price-matrix/OmnichannelPlanCards'
import OmnichannelComparisonTable from './price-matrix/OmnichannelComparisonTable'

describe('PriceMatrixPage', () => {
  it('renders without crashing', () => {
    const { container } = render(<PriceMatrixPage />)
    expect(container).toBeTruthy()
  })
})

describe('MatrixHero', () => {
  it('renders hero headline', () => {
    render(<MatrixHero />)
    expect(screen.getByText(/Um Portal/)).toBeInTheDocument()
  })

  it('renders navigation pill anchors', () => {
    render(<MatrixHero />)
    expect(screen.getByText('Macro')).toBeInTheDocument()
    expect(screen.getByText('Produtos')).toBeInTheDocument()
    expect(screen.getByText('Calculadora')).toBeInTheDocument()
    expect(screen.getByText('Planos')).toBeInTheDocument()
    expect(screen.getByText('Omnichannel')).toBeInTheDocument()
    expect(screen.getAllByText('Interactionz').length).toBeGreaterThan(0)
    expect(screen.getByText('Economics')).toBeInTheDocument()
  })

  it('renders tagline with year', () => {
    render(<MatrixHero />)
    expect(screen.getByText(/Portal SaaS/)).toBeInTheDocument()
  })
})

describe('MacroSection', () => {
  it('renders macro indicator labels', () => {
    render(<MacroSection />)
    expect(screen.getByText(/IPCA/)).toBeInTheDocument()
    expect(screen.getByText(/Taxa Selic/)).toBeInTheDocument()
  })

  it('renders macro indicator values', () => {
    render(<MacroSection />)
    expect(screen.getByText('3,91%')).toBeInTheDocument()
    expect(screen.getByText('15,00%')).toBeInTheDocument()
  })
})

describe('OmnichannelPlanCards', () => {
  it('renders all 5 plan tiers', () => {
    render(<OmnichannelPlanCards />)
    expect(screen.getByText('STARTER')).toBeInTheDocument()
    expect(screen.getByText('SPECIALIST')).toBeInTheDocument()
    expect(screen.getByText('EXPERT')).toBeInTheDocument()
    expect(screen.getByText('PROFESSIONAL')).toBeInTheDocument()
    expect(screen.getByText('ENTERPRISE')).toBeInTheDocument()
  })

  it('renders Mais Vendido badge on highlighted plan', () => {
    render(<OmnichannelPlanCards />)
    expect(screen.getByText('Mais Vendido')).toBeInTheDocument()
  })

  it('renders plan prices', () => {
    render(<OmnichannelPlanCards />)
    expect(screen.getByText('R$ 600/mês')).toBeInTheDocument()
    expect(screen.getByText('R$ 1.800/mês')).toBeInTheDocument()
  })

  it('renders section heading', () => {
    render(<OmnichannelPlanCards />)
    expect(screen.getByText('Planos Omnichannel')).toBeInTheDocument()
  })
})

describe('OmnichannelComparisonTable', () => {
  it('renders section heading', () => {
    render(<OmnichannelComparisonTable />)
    expect(screen.getByText('Comparativo de recursos Omnichannel')).toBeInTheDocument()
  })

  it('renders all plan column headers', () => {
    render(<OmnichannelComparisonTable />)
    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Specialist')).toBeInTheDocument()
    expect(screen.getByText('Expert')).toBeInTheDocument()
    expect(screen.getAllByText('Professional').length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Enterprise/).length).toBeGreaterThan(0)
  })

  it('renders category headers in comparison table', () => {
    render(<OmnichannelComparisonTable />)
    expect(screen.getByText('Resumo')).toBeInTheDocument()
    expect(screen.getByText('Chatbots')).toBeInTheDocument()
  })
})

describe('PlanMatrix', () => {
  it('renders plan prices', () => {
    render(<PlanMatrix />)
    expect(screen.getByText('R$ 349')).toBeInTheDocument()
    expect(screen.getByText('R$ 899')).toBeInTheDocument()
  })

  it('renders feature category headers in comparison table', () => {
    render(<PlanMatrix />)
    const infraRows = screen.getAllByText('Infraestrutura')
    expect(infraRows.length).toBeGreaterThan(0)
  })

  it('renders Alta Performance badge on highlighted plan', () => {
    render(<PlanMatrix />)
    expect(screen.getByText('Alta Performance')).toBeInTheDocument()
  })

  it('renders column headers in table', () => {
    render(<PlanMatrix />)
    const professionalCols = screen.getAllByText('Professional')
    const enterpriseCols = screen.getAllByText(/Enterprise/)
    expect(professionalCols.length).toBeGreaterThan(0)
    expect(enterpriseCols.length).toBeGreaterThan(0)
  })
})
