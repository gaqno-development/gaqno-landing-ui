import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CustosPage from './CustosPage'

describe('CustosPage', () => {
  it('renders heading', () => {
    render(<CustosPage />)
    expect(screen.getByRole('heading', { name: /Planos do Portal/ })).toBeInTheDocument()
  })

  it('renders plan cards', () => {
    render(<CustosPage />)
    expect(screen.getByRole('heading', { name: 'AVANCE' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'CONSTRUA' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'IMPULSIONE' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'DOMINE' })).toBeInTheDocument()
  })

  it('renders comparison section', () => {
    render(<CustosPage />)
    expect(screen.getByRole('heading', { name: /Comparativo/ })).toBeInTheDocument()
  })
})
