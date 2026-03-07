import { describe, it, expect } from 'vitest'
import { PLATFORM_PRODUCTS } from './products'

describe('products', () => {
  it('exports PLATFORM_PRODUCTS array', () => {
    expect(PLATFORM_PRODUCTS).toBeDefined()
    expect(Array.isArray(PLATFORM_PRODUCTS)).toBe(true)
  })

  it('each product has required fields', () => {
    PLATFORM_PRODUCTS.forEach((p) => {
      expect(p).toHaveProperty('id')
      expect(p).toHaveProperty('name')
      expect(p).toHaveProperty('shortDescription')
      expect(p).toHaveProperty('icon')
      expect(typeof p.id).toBe('string')
      expect(typeof p.name).toBe('string')
      expect(typeof p.shortDescription).toBe('string')
      expect(typeof p.icon).toBe('string')
    })
  })

  it('has expected product ids', () => {
    const ids = PLATFORM_PRODUCTS.map((p) => p.id)
    expect(ids).toContain('crm')
    expect(ids).toContain('erp')
    expect(ids).toContain('ia')
  })
})
