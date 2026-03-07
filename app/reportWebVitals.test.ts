import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/gtag', () => ({
  get GA_TRACKING_ID() {
    return process.env.NEXT_PUBLIC_GA_ID
  },
}))

import { reportWebVitals } from './reportWebVitals'

describe('reportWebVitals', () => {
  const gtag = vi.fn()
  beforeEach(() => {
    gtag.mockClear()
    ;(window as unknown as { gtag?: ReturnType<typeof vi.fn> }).gtag = gtag
  })

  it('does nothing when GA_TRACKING_ID is falsy', () => {
    process.env.NEXT_PUBLIC_GA_ID = ''
    reportWebVitals({ name: 'FCP', value: 100, id: '1', delta: 100, navigationType: 'navigate' })
    expect(gtag).not.toHaveBeenCalled()
  })

  it('sends CLS with rounded value', () => {
    process.env.NEXT_PUBLIC_GA_ID = 'G-XXX'
    reportWebVitals({
      name: 'CLS',
      value: 0.123456,
      id: '1',
      delta: 0.123456,
      navigationType: 'navigate',
    })
    expect(gtag).toHaveBeenCalledWith('event', 'CLS', expect.objectContaining({ value: 0.123 }))
  })

  it('sends non-CLS with rounded integer', () => {
    process.env.NEXT_PUBLIC_GA_ID = 'G-XXX'
    reportWebVitals({
      name: 'FCP',
      value: 123.7,
      id: '1',
      delta: 123.7,
      navigationType: 'navigate',
    })
    expect(gtag).toHaveBeenCalledWith('event', 'FCP', expect.objectContaining({ value: 124 }))
  })
})
