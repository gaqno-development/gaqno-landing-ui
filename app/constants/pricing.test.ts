import { describe, it, expect } from 'vitest'
import { PLANS, COMPARISON_ROWS } from './pricing'

describe('pricing', () => {
  it('exports PLANS with expected structure', () => {
    expect(PLANS).toBeInstanceOf(Array)
    PLANS.forEach((p) => {
      expect(p).toHaveProperty('id')
      expect(p).toHaveProperty('name')
      expect(p).toHaveProperty('price')
      expect(p).toHaveProperty('cta')
    })
  })

  it('exports COMPARISON_ROWS with plan columns', () => {
    expect(COMPARISON_ROWS).toBeInstanceOf(Array)
    COMPARISON_ROWS.forEach((r) => {
      expect(r).toHaveProperty('name')
      expect(r).toHaveProperty('starter')
      expect(r).toHaveProperty('enterprise')
    })
  })
})
