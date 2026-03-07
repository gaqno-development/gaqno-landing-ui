import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CustosPage from './CustosPage'

describe('CustosPage', () => {
  it('renders heading', () => {
    render(<CustosPage />)
    expect(screen.getByRole('heading', { name: /Custos WhatsApp/ })).toBeInTheDocument()
  })

  it('renders plan cards', () => {
    render(<CustosPage />)
    expect(screen.getByRole('heading', { name: 'STARTER' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'SPECIALIST' })).toBeInTheDocument()
  })

  it('renders comparison section', () => {
    render(<CustosPage />)
    expect(screen.getByRole('heading', { name: /Comparativo/ })).toBeInTheDocument()
  })
})
