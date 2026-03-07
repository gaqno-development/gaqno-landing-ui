import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Label } from './label'

describe('Label', () => {
  it('renders label', () => {
    render(<Label>Label text</Label>)
    expect(screen.getByText('Label text')).toBeInTheDocument()
  })
})
