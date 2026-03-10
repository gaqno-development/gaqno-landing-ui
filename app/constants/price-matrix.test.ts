import { describe, it, expect } from 'vitest'
import {
  MACRO_INDICATORS,
  MACRO_PROJECTIONS,
  AI_MODELS,
  OMNICHANNEL_CATEGORIES,
  UNIFIED_PLANS,
  CALCULATOR,
  UNIT_ECONOMICS,
  LLM_PROVIDERS,
  NEX_AI_MODELS,
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

  it('exports UNIFIED_PLANS with 4 tiers and all modules', () => {
    expect(UNIFIED_PLANS).toHaveLength(4)
    UNIFIED_PLANS.forEach((p) => {
      expect(p).toHaveProperty('id')
      expect(p).toHaveProperty('name')
      expect(p).toHaveProperty('cta')
      expect(p).toHaveProperty('priceMonthly')
      expect(p).toHaveProperty('priceAnnual')
      expect(p).toHaveProperty('interactionz')
      expect(p.features).toBeInstanceOf(Array)
      expect(p.highlightFeatures).toBeInstanceOf(Array)
    })
    expect(UNIFIED_PLANS.map((p) => p.id)).toEqual(['avance', 'construa', 'impulsione', 'domine'])
  })

  it('exports CALCULATOR with numeric constants', () => {
    expect(CALCULATOR.CAMBIO).toBe(5.41)
    expect(CALCULATOR.COST_PER_POINT).toBe(0.0072)
  })

  it('exports MACRO_PROJECTIONS with 4 years (2026-2029)', () => {
    expect(MACRO_PROJECTIONS).toHaveLength(4)
    expect(MACRO_PROJECTIONS[0].year).toBe(2026)
    expect(MACRO_PROJECTIONS[3].year).toBe(2029)
    MACRO_PROJECTIONS.forEach((p) => {
      expect(p).toHaveProperty('selic')
      expect(p).toHaveProperty('ipca')
      expect(p).toHaveProperty('pib')
      expect(p).toHaveProperty('cambio')
    })
  })

  it('exports LLM_PROVIDERS with 18 models across 5 tiers', () => {
    expect(LLM_PROVIDERS).toHaveLength(18)
    const tiers = new Set(LLM_PROVIDERS.map((p) => p.tier))
    expect(tiers).toContain('reasoning')
    expect(tiers).toContain('premium')
    expect(tiers).toContain('mid')
    expect(tiers).toContain('low')
    expect(tiers).toContain('ultra')
    const providers = new Set(LLM_PROVIDERS.map((p) => p.provider))
    expect(providers).toContain('DeepSeek')
    expect(providers).toContain('Alibaba')
    expect(providers).toContain('Zhipu')
    expect(providers).toContain('Moonshot')
  })

  it('exports NEX_AI_MODELS with all origin categories', () => {
    expect(NEX_AI_MODELS.length).toBeGreaterThanOrEqual(30)
    const origins = new Set(NEX_AI_MODELS.map((m) => m.origin))
    expect(origins).toContain('openai')
    expect(origins).toContain('google')
    expect(origins).toContain('xai')
    expect(origins).toContain('western')
    expect(origins).toContain('chinese')
    const mediaTypes = new Set(NEX_AI_MODELS.map((m) => m.mediaType))
    expect(mediaTypes).toContain('image')
    expect(mediaTypes).toContain('video')
    expect(mediaTypes).toContain('audio')
  })

  it('exports UNIT_ECONOMICS', () => {
    expect(UNIT_ECONOMICS).toBeInstanceOf(Array)
    UNIT_ECONOMICS.forEach((u) => {
      expect(u).toHaveProperty('label')
      expect(u).toHaveProperty('value')
    })
  })
})
