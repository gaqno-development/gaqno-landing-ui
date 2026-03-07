import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Radar } from './Radar'

describe('Radar', () => {
  it('renders radar circles', () => {
    const { container } = render(<Radar />)
    expect(container.querySelector('.animate-radar-spin')).toBeInTheDocument()
  })

  it('accepts className', () => {
    const { container } = render(<Radar className="custom" />)
    expect(container.firstChild).toHaveClass('custom')
  })
})
