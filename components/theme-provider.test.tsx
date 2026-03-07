import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from './theme-provider'

describe('ThemeProvider', () => {
  it('renders children', () => {
    render(
      <ThemeProvider>
        <span>child</span>
      </ThemeProvider>
    )
    expect(screen.getByText('child')).toBeInTheDocument()
  })
})
