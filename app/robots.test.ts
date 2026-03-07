import { describe, it, expect, vi, beforeEach } from 'vitest'
import robots from './robots'

describe('robots', () => {
  beforeEach(() => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', undefined)
  })

  it('returns robots config', () => {
    const result = robots()
    expect(result.rules).toBeDefined()
    expect(result.sitemap).toBeDefined()
  })

  it('allows all user agents on /', () => {
    const result = robots()
    const rule = result.rules?.find((r) => r.userAgent === '*')
    expect(rule?.allow).toBe('/')
    expect(rule?.disallow).toContain('/api/')
  })

  it('includes sitemap URL', () => {
    const result = robots()
    expect(result.sitemap).toContain('sitemap.xml')
  })
})
