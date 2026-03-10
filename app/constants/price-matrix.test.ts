import { describe, it, expect } from 'vitest'
import {
  MACRO_INDICATORS,
  AI_MODELS,
  OMNICHANNEL_CATEGORIES,
  SAAS_PLANS,
  CALCULATOR,
  UNIT_ECONOMICS,
} from './price-matrix'

describe('price-matrix', () => {
  it('exports MACRO_INDICATORS with expected structure', () => {
    expect(MACRO_INDICATORS).toBeInstanceOf(Array)
    expect(MACRO_INDICATORS.length).toBeGreaterThan(0)
    MACRO_INDICATORS.forEach((ind) => {
      expect(ind).toHaveProperty('label')
      expect(ind).toHaveProperty('value')
      expect(ind).toHaveProperty('note')
    })
  })

  it('exports AI_MODELS with icon, name, cost', () => {
    expect(AI_MODELS).toBeInstanceOf(Array)
    AI_MODELS.forEach((m) => {
      expect(m).toHaveProperty('icon')
      expect(m).toHaveProperty('name')
      expect(m).toHaveProperty('cost')
    })
  })

  it('exports OMNICHANNEL_CATEGORIES with nameColor', () => {
    expect(OMNICHANNEL_CATEGORIES).toBeInstanceOf(Array)
    OMNICHANNEL_CATEGORIES.forEach((c) => {
      expect(['blue', 'white', 'muted']).toContain(c.nameColor)
    })
  })

  it('exports SAAS_PLANS with cta and features', () => {
    expect(SAAS_PLANS).toBeInstanceOf(Array)
    SAAS_PLANS.forEach((p) => {
      expect(p).toHaveProperty('name')
      expect(p).toHaveProperty('cta')
      expect(p.features).toBeInstanceOf(Array)
    })
  })

  it('exports CALCULATOR with numeric constants', () => {
    expect(CALCULATOR.CAMBIO).toBe(5.42)
    expect(CALCULATOR.COST_PER_POINT).toBe(0.0072)
  })

  it('exports UNIT_ECONOMICS', () => {
    expect(UNIT_ECONOMICS).toBeInstanceOf(Array)
    UNIT_ECONOMICS.forEach((u) => {
      expect(u).toHaveProperty('label')
      expect(u).toHaveProperty('value')
    })
  })
})
