import { describe, it, expect, vi, beforeEach } from 'vitest'
import sitemap from './sitemap'

describe('sitemap', () => {
  beforeEach(() => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', undefined)
  })

  it('returns sitemap entries', () => {
    const result = sitemap()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(0)
  })

  it('uses NEXT_PUBLIC_SITE_URL when set', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://custom.gaqno.dev')
    const result = sitemap()
    expect(result.some((e) => e.url.startsWith('https://custom.gaqno.dev'))).toBe(true)
  })

  it('includes pt and en routes', () => {
    const result = sitemap()
    const urls = result.map((e) => e.url)
    expect(urls.some((u) => u.endsWith('/pt'))).toBe(true)
    expect(urls.some((u) => u.endsWith('/en'))).toBe(true)
  })

  it('includes price-matrix and custos routes', () => {
    const result = sitemap()
    const urls = result.map((e) => e.url)
    expect(urls.some((u) => u.includes('price-matrix'))).toBe(true)
    expect(urls.some((u) => u.includes('custos'))).toBe(true)
  })
})
