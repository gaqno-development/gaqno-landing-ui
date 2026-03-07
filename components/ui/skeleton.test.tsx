import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Skeleton } from './skeleton'

describe('Skeleton', () => {
  it('renders with default class', () => {
    const { container } = render(<Skeleton />)
    expect(container.firstChild).toHaveClass('animate-pulse')
  })

  it('accepts className', () => {
    const { container } = render(<Skeleton className="custom" />)
    expect(container.firstChild).toHaveClass('custom')
  })
})
