import { describe, it, expect, vi, beforeEach } from 'vitest'
import { middleware, defaultLocale } from './middleware'

const createMockRequest = (pathname: string, acceptLanguage?: string) => {
  const url = new URL(`http://localhost${pathname}`)
  return {
    nextUrl: url,
    headers: new Headers(acceptLanguage ? { 'accept-language': acceptLanguage } : {}),
  } as unknown as Request
}

describe('middleware', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('exports defaultLocale as pt', () => {
    expect(defaultLocale).toBe('pt')
  })

  it('returns undefined when pathname has locale', () => {
    const req = createMockRequest('/pt')
    const res = middleware(req)
    expect(res).toBeUndefined()
  })

  it('returns undefined when pathname has en locale', () => {
    const req = createMockRequest('/en')
    const res = middleware(req)
    expect(res).toBeUndefined()
  })

  it('returns undefined when pathname has locale with subpath', () => {
    const req = createMockRequest('/pt/custos')
    const res = middleware(req)
    expect(res).toBeUndefined()
  })

  it('redirects root to locale path', () => {
    const req = createMockRequest('/', 'pt-BR,pt;q=0.9')
    const res = middleware(req)
    expect(res).toBeDefined()
    expect(res?.status).toBe(307)
    expect(res?.headers.get('location')).toContain('/pt')
  })

  it('redirects path without locale to locale path', () => {
    const req = createMockRequest('/custos', 'en-US,en;q=0.9')
    const res = middleware(req)
    expect(res).toBeDefined()
    expect(res?.headers.get('location')).toContain('/en/custos')
  })
})
