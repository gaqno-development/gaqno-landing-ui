import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IconContainer } from './IconContainer'

describe('IconContainer', () => {
  it('renders text and icon', () => {
    render(<IconContainer text="Test" delay={0} icon={<span>Icon</span>} />)
    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(screen.getByText('Icon')).toBeInTheDocument()
  })

  it('renders default text when empty', () => {
    render(<IconContainer text="" delay={0} icon={null} />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
  })
})
