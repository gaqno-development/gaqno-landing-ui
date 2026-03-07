import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import RadarComponent from './RadarComponent'

describe('RadarComponent', () => {
  it('renders heading and icons', () => {
    render(<RadarComponent />)
    expect(screen.getByText('Projetos em andamento')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
  })
})
