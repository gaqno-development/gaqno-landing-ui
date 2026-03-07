import { describe, it, expect, vi, beforeEach } from 'vitest'
import { pageview, event } from './gtag'

describe('gtag', () => {
  beforeEach(() => {
    vi.stubEnv('NEXT_PUBLIC_GA_ID', 'G-XXX')
    ;(window as unknown as { gtag?: ReturnType<typeof vi.fn> }).gtag = vi.fn()
  })

  it('pageview calls gtag when GA_TRACKING_ID is set', () => {
    const gtag = (window as unknown as { gtag: ReturnType<typeof vi.fn> }).gtag
    pageview('/test')
    expect(gtag).toHaveBeenCalledWith('config', expect.any(String), { page_path: '/test' })
  })

  it('event calls gtag with action and category', () => {
    const gtag = (window as unknown as { gtag: ReturnType<typeof vi.fn> }).gtag
    event({ action: 'click', category: 'test' })
    expect(gtag).toHaveBeenCalledWith('event', 'click', expect.objectContaining({ event_category: 'test' }))
  })
})
