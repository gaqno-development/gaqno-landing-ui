import { describe, it, expect } from 'vitest'
import { PLANS, COMPARISON_ROWS } from './pricing'

describe('pricing', () => {
  it('exports PLANS with 4 unified tiers', () => {
    expect(PLANS).toHaveLength(4)
    PLANS.forEach((p) => {
      expect(p).toHaveProperty('id')
      expect(p).toHaveProperty('name')
      expect(p).toHaveProperty('price')
      expect(p).toHaveProperty('cta')
    })
    expect(PLANS.map((p) => p.id)).toEqual(['avance', 'construa', 'impulsione', 'domine'])
  })

  it('exports COMPARISON_ROWS with 4 plan columns', () => {
    expect(COMPARISON_ROWS).toBeInstanceOf(Array)
    COMPARISON_ROWS.forEach((r) => {
      expect(r).toHaveProperty('name')
      expect(r).toHaveProperty('avance')
      expect(r).toHaveProperty('construa')
      expect(r).toHaveProperty('impulsione')
      expect(r).toHaveProperty('domine')
    })
  })
})
