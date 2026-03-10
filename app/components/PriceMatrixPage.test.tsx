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
import ComparisonTable from './price-matrix/ComparisonTable'

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
    expect(screen.getByText('Automação')).toBeInTheDocument()
    expect(screen.getByText('Produtos')).toBeInTheDocument()
    expect(screen.getByText('Calculadora')).toBeInTheDocument()
    expect(screen.getByText('Planos')).toBeInTheDocument()
    expect(screen.getByText('Comparativo')).toBeInTheDocument()
    expect(screen.getAllByText('Interactionz').length).toBeGreaterThan(0)
    expect(screen.getByText('NEX AI')).toBeInTheDocument()
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
    expect(screen.getByText('12,13%')).toBeInTheDocument()
  })
})

describe('PlanMatrix', () => {
  it('renders all 4 unified plan tiers', () => {
    render(<PlanMatrix />)
    expect(screen.getAllByText('Avance').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Construa').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Impulsione').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Domine').length).toBeGreaterThan(0)
  })

  it('renders Mais Popular badge on highlighted plan', () => {
    render(<PlanMatrix />)
    expect(screen.getByText('Mais Popular')).toBeInTheDocument()
  })

  it('renders plan prices', () => {
    render(<PlanMatrix />)
    expect(screen.getAllByText(/R\$ 349/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/R\$ 899/).length).toBeGreaterThan(0)
  })

  it('renders feature category headers in table', () => {
    render(<PlanMatrix />)
    const infraRows = screen.getAllByText('Infraestrutura')
    expect(infraRows.length).toBeGreaterThan(0)
  })
})

describe('ComparisonTable', () => {
  it('renders section heading', () => {
    render(<ComparisonTable />)
    expect(screen.getByText('Comparativo de recursos')).toBeInTheDocument()
  })

  it('renders all 4 plan column headers', () => {
    render(<ComparisonTable />)
    expect(screen.getAllByText('Avance').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Construa').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Impulsione').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Domine').length).toBeGreaterThan(0)
  })

  it('renders cross-module category headers', () => {
    render(<ComparisonTable />)
    expect(screen.getByText('Resumo')).toBeInTheDocument()
    expect(screen.getByText('Chatbots')).toBeInTheDocument()
    expect(screen.getByText('CRM')).toBeInTheDocument()
  })
})
