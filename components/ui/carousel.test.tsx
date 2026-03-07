import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Carousel } from './carousel'

describe('Carousel', () => {
  it('returns null when items empty', () => {
    const { container } = render(<Carousel items={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders single item', () => {
    render(<Carousel items={[{ quote: 'Test quote' }]} />)
    expect(screen.getByText(/Test quote/)).toBeInTheDocument()
  })

  it('renders with title', () => {
    render(
      <Carousel items={[{ quote: 'Q' }]} title="Test Title" />
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders author and role', () => {
    render(
      <Carousel
        items={[{ quote: 'Q', author: 'John', role: 'Dev' }]}
      />
    )
    expect(screen.getByText(/John/)).toBeInTheDocument()
    expect(screen.getByText(/Dev/)).toBeInTheDocument()
  })
})
