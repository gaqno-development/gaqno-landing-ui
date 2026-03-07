import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders contact CTA and links', () => {
    render(<Footer />)
    expect(screen.getByText(/Entre em contato/)).toBeInTheDocument()
    expect(screen.getByText(/Entrar em contato/)).toBeInTheDocument()
    expect(screen.getByText(/gaqno development/)).toBeInTheDocument()
  })
})
