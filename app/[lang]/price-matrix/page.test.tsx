import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import PriceMatrix from './page'

describe('PriceMatrix page', () => {
  it('renders PriceMatrixPage', () => {
    const { container } = render(<PriceMatrix />)
    expect(container).toBeTruthy()
  })
})
