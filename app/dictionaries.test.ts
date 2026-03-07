import { describe, it, expect } from 'vitest'
import { getDictionary } from './dictionaries'

describe('getDictionary', () => {
  it('returns en dictionary', async () => {
    const dict = await getDictionary('en')
    expect(dict).toBeDefined()
    expect(dict.platform).toBeDefined()
    expect(dict.landing).toBeDefined()
    expect(dict.navbar).toBeDefined()
  })

  it('returns pt dictionary', async () => {
    const dict = await getDictionary('pt')
    expect(dict).toBeDefined()
    expect(dict.platform).toBeDefined()
    expect(dict.landing).toBeDefined()
  })
})
