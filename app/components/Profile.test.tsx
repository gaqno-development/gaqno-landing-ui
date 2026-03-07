import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Profile from './Profile'

vi.mock('@/public/img/profile.jpeg', () => ({ default: '/img/profile.jpeg' }))

describe('Profile', () => {
  it('renders profile content', () => {
    render(<Profile />)
    expect(screen.getAllByText(/Gabriel Aquino/).length).toBeGreaterThan(0)
    expect(screen.getByText(/Entrar em contato/)).toBeInTheDocument()
    expect(screen.getByText(/Projetos/)).toBeInTheDocument()
    expect(screen.getByText(/LinkedIn/)).toBeInTheDocument()
  })

  it('renders contact links with correct hrefs', () => {
    render(<Profile />)
    const whatsapp = screen.getByText('Entrar em contato').closest('a')
    expect(whatsapp).toHaveAttribute('href', 'https://wa.me/5511991610328')
  })
})
