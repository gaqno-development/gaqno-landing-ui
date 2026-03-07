import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BrandBanner from './BrandBanner'

describe('BrandBanner', () => {
  it('renders title and description', () => {
    render(<BrandBanner />)
    expect(screen.getByText('gaqno development')).toBeInTheDocument()
    expect(
      screen.getByText(/Desenvolvimento de aplicações web e mobile/)
    ).toBeInTheDocument()
  })
})
