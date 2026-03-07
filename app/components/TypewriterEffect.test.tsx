import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TypewriterEffectSmoothDemo } from './TypewriterEffect'

describe('TypewriterEffectSmoothDemo', () => {
  it('renders demo content', () => {
    render(<TypewriterEffectSmoothDemo />)
    expect(screen.getByText('The road to freedom starts from here')).toBeInTheDocument()
    expect(screen.getByText('Join now')).toBeInTheDocument()
    expect(screen.getByText('Signup')).toBeInTheDocument()
  })
})
