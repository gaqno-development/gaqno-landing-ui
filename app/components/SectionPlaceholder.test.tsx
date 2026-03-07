import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { SectionPlaceholder } from './SectionPlaceholder'

describe('SectionPlaceholder', () => {
  it('renders with default height', () => {
    const { container } = render(<SectionPlaceholder />)
    const el = container.firstChild as HTMLElement
    expect(el).toHaveStyle({ minHeight: '320px' })
  })

  it('renders with custom height', () => {
    const { container } = render(<SectionPlaceholder height="200px" />)
    const el = container.firstChild as HTMLElement
    expect(el).toHaveStyle({ minHeight: '200px' })
  })
})
