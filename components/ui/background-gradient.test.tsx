import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BackgroundGradient } from './background-gradient'

describe('BackgroundGradient', () => {
  it('renders children', () => {
    render(<BackgroundGradient>Child</BackgroundGradient>)
    expect(screen.getByText('Child')).toBeInTheDocument()
  })

  it('renders without animation when animate is false', () => {
    const { container } = render(
      <BackgroundGradient animate={false}>Child</BackgroundGradient>
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})
