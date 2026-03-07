import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Globe } from './Globe'

describe('Globe', () => {
  it('renders dynamic component', () => {
    render(<Globe />)
    expect(screen.getByTestId('dynamic')).toBeInTheDocument()
  })
})
