import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { Analytics } from './Analytics'

const mockPageview = vi.fn()
const mockEvent = vi.fn()
vi.mock('@/lib/gtag', () => ({
  pageview: (...args: unknown[]) => mockPageview(...args),
  event: (...args: unknown[]) => mockEvent(...args),
  GA_TRACKING_ID: 'G-TEST',
}))

describe('Analytics', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    Object.defineProperty(performance, 'getEntriesByType', {
      value: () => [{ responseStart: 0 }],
      writable: true,
    })
    Object.defineProperty(performance, 'timing', {
      value: { responseStart: 0 },
      writable: true,
    })
  })

  it('renders nothing', () => {
    const { container } = render(<Analytics />)
    expect(container.firstChild).toBeNull()
  })
})
