import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PriceMatrixPage from './PriceMatrixPage'

describe('PriceMatrixPage', () => {
  it('renders hero section', () => {
    render(<PriceMatrixPage />)
    expect(screen.getByText(/Arquitetura de/)).toBeInTheDocument()
    expect(screen.getByText(/Precificação/)).toBeInTheDocument()
  })

  it('renders macro indicators', () => {
    render(<PriceMatrixPage />)
    expect(screen.getByText(/IPCA/)).toBeInTheDocument()
    expect(screen.getByText(/Taxa Selic/)).toBeInTheDocument()
  })

  it('renders AI calculator inputs', () => {
    render(<PriceMatrixPage />)
    const inputs = screen.getAllByRole('spinbutton')
    expect(inputs.length).toBeGreaterThan(0)
  })
})
