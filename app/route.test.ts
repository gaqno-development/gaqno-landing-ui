import { describe, it, expect } from 'vitest'
import { GET } from './route'

describe('app route', () => {
  it('redirects to /pt', async () => {
    const req = new Request('http://localhost/') as unknown as Request & { nextUrl: { clone: () => URL } }
    req.nextUrl = { clone: () => new URL('http://localhost/') }
    const res = await GET(req)
    expect(res.status).toBe(307)
    expect(res.headers.get('location')).toContain('/pt')
  })
})
