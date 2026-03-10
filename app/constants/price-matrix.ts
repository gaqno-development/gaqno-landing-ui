export interface MacroIndicator {
  label: string
  value: string
  note: string
  highlighted?: boolean
  highlightColor?: string
  barValue: number
}

export const MACRO_INDICATORS: MacroIndicator[] = [
  { label: 'IPCA (Inflação)', value: '3,91%', note: 'Base para reajustes anuais', barValue: 3.91 },
  { label: 'Taxa Selic', value: '12,13%', note: 'Favorece OPEX vs CAPEX (Focus Mar/26)', barValue: 12.13 },
  {
    label: 'Câmbio (USD/BRL)',
    value: 'R$ 5,41',
    note: 'Custo de APIs (IA e Meta)',
    highlighted: true,
    highlightColor: 'blue',
    barValue: 54.1,
  },
  { label: 'PIB', value: '1,82%', note: 'Foco em produtividade', barValue: 1.82 },
]

export interface MacroProjection {
  year: number
  selic: number
  ipca: number
  pib: number
  cambio: number
}

export const MACRO_PROJECTIONS: MacroProjection[] = [
  { year: 2026, selic: 12.13, ipca: 3.91, pib: 1.82, cambio: 5.41 },
  { year: 2027, selic: 10.5, ipca: 3.8, pib: 1.8, cambio: 5.5 },
  { year: 2028, selic: 10.0, ipca: 3.5, pib: 2.0, cambio: 5.5 },
  { year: 2029, selic: 9.5, ipca: 3.5, pib: 2.0, cambio: 5.5 },
]

export interface AIModel {
  icon: string
  name: string
  cost: string
  bigTechUsd: number
  interactionzPoints: number
}

export const AI_MODELS: AIModel[] = [
  {
    icon: '📝',
    name: 'Gemini 3 Pro (Texto)',
    cost: '1.200 pts / 1M tokens',
    bigTechUsd: 12.0,
    interactionzPoints: 1200,
  },
  {
    icon: '🖼️',
    name: 'Imagen 4 Standard',
    cost: '40 pts / img',
    bigTechUsd: 0.17,
    interactionzPoints: 40,
  },
  {
    icon: '🎬',
    name: 'Veo 2 (Vídeo)',
    cost: '350 pts / seg',
    bigTechUsd: 0.35,
    interactionzPoints: 350,
  },
]

export interface OmnichannelCategory {
  name: string
  subtitle: string
  pricing: string
  nameColor: 'blue' | 'white' | 'muted'
  pricingColor?: 'green'
}

export const OMNICHANNEL_CATEGORIES: OmnichannelCategory[] = [
  {
    name: 'Marketing',
    subtitle: 'Vendas e Promoção',
    pricing: 'R$ 0,125/msg (+ 15% Taxa)',
    nameColor: 'blue',
  },
  {
    name: 'Utilidade',
    subtitle: 'Notificações ERP (Pix, Boletos)',
    pricing: 'R$ 0,053/msg (Franquia inclusa)',
    nameColor: 'white',
  },
  {
    name: 'Autenticação',
    subtitle: 'Senhas e Segurança (OTP)',
    pricing: 'R$ 0,040/msg (Repasse exato)',
    nameColor: 'white',
  },
  {
    name: 'Serviço',
    subtitle: 'Suporte ao Cliente',
    pricing: 'Grátis (janela 24h)',
    nameColor: 'muted',
    pricingColor: 'green',
  },
]

export interface UnifiedPlan {
  id: string
  name: string
  description: string
  priceMonthly: number
  priceAnnual: number
  annualSavings: number
  users: string
  interactionz: number
  infra: string
  channels: string
  features: string[]
  highlightFeatures: string[]
  highlighted?: boolean
  cta: string
}

export const UNIFIED_PLANS: UnifiedPlan[] = [
  {
    id: 'avance',
    name: 'Avance',
    description: 'Para quem está começando a digitalizar.',
    priceMonthly: 149,
    priceAnnual: 109,
    annualSavings: 480,
    users: 'Até 3',
    interactionz: 500,
    infra: 'VPS Partilhada (1 vCPU / 4GB)',
    channels: '1 canal WhatsApp',
    features: [
      'CRM + ERP + PDV + Omnichannel + AI Studio',
      'Até 3 usuários',
      '500 Interactionz inclusos',
      '1 canal WhatsApp',
    ],
    highlightFeatures: [
      'Emissão de NF-e, NFC-e e NFS-e',
      'Gestão de estoque',
      'Chatbot com IA generativa',
      'Pipeline de vendas visual',
    ],
    cta: 'Começar agora',
  },
  {
    id: 'construa',
    name: 'Construa',
    description: 'Para empresas consolidando a operação.',
    priceMonthly: 349,
    priceAnnual: 259,
    annualSavings: 1080,
    users: 'Até 10',
    interactionz: 2000,
    infra: 'VPS Partilhada (2 vCPU / 8GB)',
    channels: '3 canais WhatsApp',
    highlighted: true,
    features: [
      'CRM + ERP + PDV + Omnichannel + AI Studio',
      'Até 10 usuários',
      '2.000 Interactionz inclusos',
      '3 canais WhatsApp',
    ],
    highlightFeatures: [
      'Multiempresa',
      'Emissão de boletos e cobranças',
      'Conciliação bancária',
      'Relatórios avançados',
    ],
    cta: 'Pilar de Escala',
  },
  {
    id: 'impulsione',
    name: 'Impulsione',
    description: 'Para operações em crescimento acelerado.',
    priceMonthly: 649,
    priceAnnual: 489,
    annualSavings: 1920,
    users: 'Até 25',
    interactionz: 5000,
    infra: 'VPS Dedicada (4 vCPU / 16GB)',
    channels: '5 canais WhatsApp',
    features: [
      'CRM + ERP + PDV + Omnichannel + AI Studio',
      'Até 25 usuários',
      '5.000 Interactionz inclusos',
      '5 canais WhatsApp',
    ],
    highlightFeatures: [
      'Gestor de conta dedicado',
      'Integração com marketplaces',
      'API completa',
      'Modelos IA premium (incl. Vídeo)',
    ],
    cta: 'Escalar operação',
  },
  {
    id: 'domine',
    name: 'Domine',
    description: 'Isolamento de dados e volumes massivos.',
    priceMonthly: 899,
    priceAnnual: 679,
    annualSavings: 2640,
    users: 'Ilimitados',
    interactionz: 10000,
    infra: 'VPS Dedicada (8 vCPU / 32GB)',
    channels: 'Canais ilimitados',
    features: [
      'CRM + ERP + PDV + Omnichannel + AI Studio',
      'Usuários ilimitados',
      '10.000 Interactionz inclusos',
      'Canais ilimitados',
    ],
    highlightFeatures: [
      'Infraestrutura dedicada isolada',
      'SLA premium (30 min)',
      'Onboarding personalizado',
      'Suporte prioritário 24/7',
    ],
    cta: 'Margem e Retenção',
  },
]

export const CALCULATOR = {
  CAMBIO: 5.41,
  COST_PER_POINT: 0.0072,
  API_COST_PER_POINT_USD: 0.0001042,
  BIG_TECH_IMG_USD: 0.17,
  BIG_TECH_VID_USD: 0.35,
  AI_IMG_POINTS: 40,
  AI_VID_POINTS: 350,
} as const

export interface UnitEconomicMetric {
  label: string
  value: string
  color?: string
  numericValue?: number
}

export const UNIT_ECONOMICS: UnitEconomicMetric[] = [
  { label: 'CAC Estimado', value: 'R$ 1.5K - 2.5K', numericValue: 2000 },
  { label: 'Payback', value: '5 a 6 meses', numericValue: 5.5 },
  { label: 'Churn Rate', value: '< 2% a.m.', color: 'green', numericValue: 2 },
  { label: 'NRR', value: '101% mediana', color: 'blue', numericValue: 101 },
]

export type ProductId = 'crm' | 'erp' | 'omnichannel' | 'pdv' | 'ai'

export interface ProductMetric {
  label: string
  value: string
  color: string
}

export interface ProductSection {
  id: ProductId
  title: string
  description: string
  accentColor: string
  metrics: ProductMetric[]
  chartType: 'bar' | 'pie' | 'radial' | 'area'
  chartData: Array<Record<string, string | number>>
  chartKeys: Array<{ key: string; color: string; label: string }>
  xAxisKey?: string
}

export const PRODUCT_SECTIONS: ProductSection[] = [
  {
    id: 'crm',
    title: 'CRM',
    description:
      'Pipeline de vendas visual com conversão por etapa. Gerencie leads, oportunidades e histórico do cliente em um único painel.',
    accentColor: '#3b82f6',
    metrics: [
      { label: 'Taxa de Conversão Média', value: '24%', color: '#3b82f6' },
      { label: 'Ciclo de Vendas', value: '14 dias', color: '#60a5fa' },
      { label: 'Pipeline Médio', value: 'R$ 180K', color: '#93c5fd' },
    ],
    chartType: 'bar',
    chartData: [
      { stage: 'Leads', value: 1000, fill: '#1e3a5f' },
      { stage: 'Qualificados', value: 620, fill: '#1d4ed8' },
      { stage: 'Proposta', value: 310, fill: '#2563eb' },
      { stage: 'Negociação', value: 180, fill: '#3b82f6' },
      { stage: 'Fechado', value: 90, fill: '#60a5fa' },
    ],
    chartKeys: [{ key: 'value', color: '#3b82f6', label: 'Contatos' }],
    xAxisKey: 'stage',
  },
  {
    id: 'erp',
    title: 'ERP',
    description:
      'Estoque, fiscal, compras e financeiro integrados. Automatize NF-e, controle entradas/saídas e tome decisões baseadas em dados.',
    accentColor: '#10b981',
    metrics: [
      { label: 'Docs Fiscais / Mês', value: '4.200', color: '#10b981' },
      { label: 'Redução de Rupturas', value: '67%', color: '#34d399' },
      { label: 'Tempo em Compras', value: '−4h/dia', color: '#6ee7b7' },
    ],
    chartType: 'pie',
    chartData: [
      { name: 'Gestão de Estoque', value: 35, fill: '#065f46' },
      { name: 'Emissão Fiscal', value: 28, fill: '#059669' },
      { name: 'Compras', value: 20, fill: '#10b981' },
      { name: 'Financeiro', value: 17, fill: '#34d399' },
    ],
    chartKeys: [{ key: 'value', color: '#10b981', label: '% do tempo salvo' }],
    xAxisKey: 'name',
  },
  {
    id: 'omnichannel',
    title: 'Omnichannel',
    description:
      'Caixa de entrada unificada para WhatsApp, Instagram, E-mail, SMS e Webchat. Chatbots com IA e métricas de SLA em tempo real.',
    accentColor: '#8b5cf6',
    metrics: [
      { label: 'Tempo Médio Resposta', value: '< 2 min', color: '#8b5cf6' },
      { label: 'Resolução por Bot', value: '73%', color: '#a78bfa' },
      { label: 'NPS Médio', value: '78', color: '#c4b5fd' },
    ],
    chartType: 'bar',
    chartData: [
      { channel: 'WhatsApp', gaqno: 182, market: 320, fill: '#7c3aed' },
      { channel: 'E-mail', gaqno: 45, market: 80, fill: '#8b5cf6' },
      { channel: 'Instagram', gaqno: 38, market: 70, fill: '#a78bfa' },
      { channel: 'SMS', gaqno: 24, market: 48, fill: '#c4b5fd' },
      { channel: 'Webchat', gaqno: 15, market: 30, fill: '#ddd6fe' },
    ],
    chartKeys: [
      { key: 'gaqno', color: '#8b5cf6', label: 'Gaqno (R$/1k)' },
      { key: 'market', color: '#374151', label: 'Mercado (R$/1k)' },
    ],
    xAxisKey: 'channel',
  },
  {
    id: 'pdv',
    title: 'PDV',
    description:
      'Ponto de venda integrado ao ERP. Controle de caixa, estoque em tempo real, impressão de cupons e múltiplas formas de pagamento.',
    accentColor: '#f59e0b',
    metrics: [
      { label: 'Tempo por Venda', value: '38s', color: '#f59e0b' },
      { label: 'Acerto de Caixa', value: '99.2%', color: '#fbbf24' },
      { label: 'Vendas / Hora', value: '+22%', color: '#fcd34d' },
    ],
    chartType: 'radial',
    chartData: [
      { name: 'Pix', value: 48, fill: '#78350f' },
      { name: 'Cartão Débito', value: 22, fill: '#b45309' },
      { name: 'Cartão Crédito', value: 19, fill: '#d97706' },
      { name: 'Dinheiro', value: 8, fill: '#f59e0b' },
      { name: 'Link', value: 3, fill: '#fcd34d' },
    ],
    chartKeys: [{ key: 'value', color: '#f59e0b', label: '% das vendas' }],
    xAxisKey: 'name',
  },
  {
    id: 'ai',
    title: 'AI Studio',
    description:
      'Geração de texto, imagens e vídeo com modelos de última geração. Interactionz abstraem câmbio e protegem margens.',
    accentColor: '#ec4899',
    metrics: [
      { label: 'Custo vs Big Tech', value: '−65%', color: '#ec4899' },
      { label: 'Modelos Disponíveis', value: '12+', color: '#f472b6' },
      { label: 'Latência Média', value: '420ms', color: '#f9a8d4' },
    ],
    chartType: 'bar',
    chartData: [
      { model: 'Texto (1M tok)', bigtech: 64.92, gaqno: 8.64, unit: 'R$' },
      { model: 'Imagem (100x)', bigtech: 91.97, gaqno: 28.80, unit: 'R$' },
      { model: 'Vídeo (10seg)', bigtech: 18.94, gaqno: 25.20, unit: 'R$' },
    ],
    chartKeys: [
      { key: 'bigtech', color: '#374151', label: 'Big Tech (R$)' },
      { key: 'gaqno', color: '#ec4899', label: 'Gaqno AI Studio (R$)' },
    ],
    xAxisKey: 'model',
  },
]

export interface CalculatorProduct {
  id: ProductId
  label: string
  unit: string
  min: number
  max: number
  step: number
  defaultValue: number
  gaqnoCostPer: number
  marketCostPer: number
  description: string
}

export const CALCULATOR_PRODUCTS: CalculatorProduct[] = [
  {
    id: 'crm',
    label: 'CRM',
    unit: 'usuários',
    min: 1,
    max: 100,
    step: 1,
    defaultValue: 10,
    gaqnoCostPer: 16,
    marketCostPer: 85,
    description: 'efetivo/usuário (plano flat)',
  },
  {
    id: 'erp',
    label: 'ERP',
    unit: 'NF-e/mês',
    min: 100,
    max: 10000,
    step: 100,
    defaultValue: 1000,
    gaqnoCostPer: 0.04,
    marketCostPer: 0.12,
    description: 'por documento emitido',
  },
  {
    id: 'omnichannel',
    label: 'Omnichannel',
    unit: 'mensagens/mês',
    min: 500,
    max: 50000,
    step: 500,
    defaultValue: 5000,
    gaqnoCostPer: 0.182,
    marketCostPer: 0.32,
    description: 'por mensagem entregue (WhatsApp)',
  },
  {
    id: 'pdv',
    label: 'PDV',
    unit: 'vendas/mês',
    min: 100,
    max: 20000,
    step: 100,
    defaultValue: 2000,
    gaqnoCostPer: 0.015,
    marketCostPer: 0.05,
    description: 'por transação processada',
  },
  {
    id: 'ai',
    label: 'AI Studio',
    unit: 'Interactionz/mês',
    min: 1000,
    max: 100000,
    step: 1000,
    defaultValue: 10000,
    gaqnoCostPer: 0.0072,
    marketCostPer: 0.05,
    description: 'por Interactionz consumido',
  },
]

export interface ModuleConnection {
  id: ProductId
  title: string
  icon: string
  accentColor: string
  aiFeatures: string[]
  interactionzPerAction: number
  actionUnit: string
}

export const MODULE_CONNECTIONS: ModuleConnection[] = [
  {
    id: 'crm',
    title: 'CRM',
    icon: '📊',
    accentColor: '#3b82f6',
    aiFeatures: ['Scoring de leads por IA', 'Resumo de oportunidades', 'Sugestão de próxima ação'],
    interactionzPerAction: 8,
    actionUnit: 'por análise de lead',
  },
  {
    id: 'erp',
    title: 'ERP',
    icon: '⚙️',
    accentColor: '#10b981',
    aiFeatures: ['Reconhecimento de NF-e por OCR', 'Previsão de ruptura de estoque', 'Conciliação automática'],
    interactionzPerAction: 12,
    actionUnit: 'por documento processado',
  },
  {
    id: 'pdv',
    title: 'PDV',
    icon: '🏪',
    accentColor: '#f59e0b',
    aiFeatures: ['Sugestão de venda cruzada', 'Detecção de anomalias no caixa', 'Relatório diário IA'],
    interactionzPerAction: 4,
    actionUnit: 'por sessão de venda',
  },
  {
    id: 'omnichannel',
    title: 'Omnichannel',
    icon: '💬',
    accentColor: '#8b5cf6',
    aiFeatures: ['Resposta inteligente por IA generativa', 'Análise de ticket por IA', 'Bot com documento RAG'],
    interactionzPerAction: 1,
    actionUnit: 'por interação com bot',
  },
  {
    id: 'ai',
    title: 'AI Studio',
    icon: '✨',
    accentColor: '#ec4899',
    aiFeatures: ['Geração de texto livre', 'Criação de imagens', 'Síntese de vídeo'],
    interactionzPerAction: 1200,
    actionUnit: 'por 1M tokens (texto)',
  },
]

export interface InteractionzTier {
  label: string
  pointsPerMonth: number
  examplesOmnichannel: number
  examplesCrmLeads: number
  examplesImages: number
  color: string
}

export const INTERACTIONZ_TIERS: InteractionzTier[] = [
  {
    label: 'Avance',
    pointsPerMonth: 500,
    examplesOmnichannel: 500,
    examplesCrmLeads: 62,
    examplesImages: 12,
    color: '#64748b',
  },
  {
    label: 'Construa',
    pointsPerMonth: 2000,
    examplesOmnichannel: 2000,
    examplesCrmLeads: 250,
    examplesImages: 50,
    color: '#3b82f6',
  },
  {
    label: 'Impulsione',
    pointsPerMonth: 5000,
    examplesOmnichannel: 5000,
    examplesCrmLeads: 625,
    examplesImages: 125,
    color: '#8b5cf6',
  },
  {
    label: 'Domine',
    pointsPerMonth: 10000,
    examplesOmnichannel: 10000,
    examplesCrmLeads: 1250,
    examplesImages: 250,
    color: '#ec4899',
  },
]

export type LLMTier = 'reasoning' | 'premium' | 'mid' | 'low' | 'ultra'

export interface LLMProvider {
  provider: string
  model: string
  inputPer1M: number
  outputPer1M: number
  tier: LLMTier
  context: string
}

export const LLM_PROVIDERS: LLMProvider[] = [
  { provider: 'OpenAI', model: 'GPT-5.2 Pro', inputPer1M: 21.00, outputPer1M: 168.00, tier: 'reasoning', context: '128K' },
  { provider: 'DeepSeek', model: 'R1', inputPer1M: 0.55, outputPer1M: 2.19, tier: 'reasoning', context: '128K' },
  { provider: 'OpenAI', model: 'GPT-5.2', inputPer1M: 1.75, outputPer1M: 14.00, tier: 'premium', context: '128K' },
  { provider: 'Anthropic', model: 'Claude Opus 4.6', inputPer1M: 5.00, outputPer1M: 25.00, tier: 'premium', context: '200K' },
  { provider: 'Google', model: 'Gemini 3.1 Pro', inputPer1M: 2.00, outputPer1M: 12.00, tier: 'premium', context: '2M' },
  { provider: 'Alibaba', model: 'Qwen 3 Max', inputPer1M: 0.86, outputPer1M: 3.44, tier: 'premium', context: '252K' },
  { provider: 'Google', model: 'Gemini 2.5 Pro', inputPer1M: 1.25, outputPer1M: 10.00, tier: 'mid', context: '2M' },
  { provider: 'Anthropic', model: 'Claude Sonnet 4.6', inputPer1M: 3.00, outputPer1M: 15.00, tier: 'mid', context: '200K' },
  { provider: 'Moonshot', model: 'Kimi K2', inputPer1M: 0.60, outputPer1M: 2.50, tier: 'mid', context: '128K' },
  { provider: 'Alibaba', model: 'Qwen 3.5 Plus', inputPer1M: 0.26, outputPer1M: 1.56, tier: 'mid', context: '128K' },
  { provider: 'Anthropic', model: 'Claude Haiku 4.5', inputPer1M: 1.00, outputPer1M: 5.00, tier: 'low', context: '200K' },
  { provider: 'Zhipu', model: 'GLM-4-Plus', inputPer1M: 0.70, outputPer1M: 0.70, tier: 'low', context: '128K' },
  { provider: 'xAI', model: 'Grok 4.1 Fast', inputPer1M: 0.20, outputPer1M: 0.50, tier: 'low', context: '131K' },
  { provider: 'OpenAI', model: 'GPT-5 Mini', inputPer1M: 0.25, outputPer1M: 2.00, tier: 'low', context: '128K' },
  { provider: 'Google', model: 'Gemini 3.1 Flash-Lite', inputPer1M: 0.25, outputPer1M: 1.50, tier: 'low', context: '2M' },
  { provider: 'OpenAI', model: 'GPT-5 Nano', inputPer1M: 0.05, outputPer1M: 0.40, tier: 'ultra', context: '128K' },
  { provider: 'DeepSeek', model: 'V3.2-Exp', inputPer1M: 0.28, outputPer1M: 0.42, tier: 'ultra', context: '128K' },
  { provider: 'Alibaba', model: 'Qwen 3.5 Flash', inputPer1M: 0.10, outputPer1M: 0.40, tier: 'ultra', context: '1M' },
]

export interface InteractionzPointPack {
  points: number
  images: number
  videoSeconds: number
  priceUsd: number
  highlighted?: boolean
}

export const INTERACTIONZ_POINT_PACKS: InteractionzPointPack[] = [
  { points: 2_000, images: 50, videoSeconds: 5, priceUsd: 2.99 },
  { points: 7_000, images: 175, videoSeconds: 20, priceUsd: 9.99 },
  { points: 15_000, images: 375, videoSeconds: 42, priceUsd: 19.99, highlighted: true },
  { points: 75_000, images: 1_875, videoSeconds: 214, priceUsd: 99.99 },
]

export const ROI_CONFIG = {
  ANALYST_HOURLY_RATE_BRL: 50,
  HOURS_SAVED_PER_PRODUCT: {
    crm: 8,
    erp: 12,
    omnichannel: 10,
    pdv: 6,
    ai: 15,
  } as Record<ProductId, number>,
  WORKING_HOURS_MONTH: 160,
} as const


export interface PlanFeatureRow {
  category?: string
  feature: string
  avance: boolean | string
  construa: boolean | string
  impulsione: boolean | string
  domine: boolean | string
}

export const PLAN_FEATURE_MATRIX: PlanFeatureRow[] = [
  { category: 'Infraestrutura', feature: 'Servidor', avance: 'VPS Partilhada', construa: 'VPS Partilhada', impulsione: 'VPS Dedicada', domine: 'VPS Dedicada' },
  { feature: 'vCPU / RAM', avance: '1 vCPU / 4GB', construa: '2 vCPU / 8GB', impulsione: '4 vCPU / 16GB', domine: '8 vCPU / 32GB' },
  { feature: 'Usuários', avance: 'Até 3', construa: 'Até 10', impulsione: 'Até 25', domine: 'Ilimitados' },
  { feature: 'Isolamento de dados', avance: false, construa: false, impulsione: true, domine: true },
  { category: 'Módulos', feature: 'CRM + ERP + PDV', avance: true, construa: true, impulsione: true, domine: true },
  { feature: 'Omnichannel', avance: true, construa: true, impulsione: true, domine: true },
  { feature: 'AI Studio', avance: true, construa: true, impulsione: true, domine: true },
  { feature: 'Canais WhatsApp', avance: '1 canal', construa: '3 canais', impulsione: '5 canais', domine: 'Ilimitados' },
  { category: 'IA & Interactionz', feature: 'Interactionz inclusos', avance: '500', construa: '2.000', impulsione: '5.000', domine: '10.000' },
  { feature: 'IA Generativa', avance: true, construa: true, impulsione: true, domine: true },
  { feature: 'Modelos disponíveis', avance: 'Texto + Imagem', construa: 'Texto + Imagem', impulsione: 'Todos (incl. Vídeo)', domine: 'Todos (incl. Vídeo)' },
  { feature: 'Chatbots IA ativos', avance: 'Até 3', construa: 'Até 10', impulsione: 'Até 50', domine: 'Ilimitados' },
  { feature: 'API de IA', avance: false, construa: true, impulsione: true, domine: true },
  { category: 'Suporte', feature: 'SLA 1ª resposta', avance: 'Até 4h', construa: 'Até 2h', impulsione: 'Até 1h', domine: 'Até 30min' },
  { feature: 'Account manager', avance: false, construa: false, impulsione: true, domine: true },
  { feature: 'Onboarding dedicado', avance: false, construa: false, impulsione: true, domine: true },
  { feature: 'Central de Ajuda', avance: true, construa: true, impulsione: true, domine: true },
  { category: 'Financeiro', feature: 'Mensalidade', avance: 'R$ 149/mês', construa: 'R$ 349/mês', impulsione: 'R$ 649/mês', domine: 'R$ 899/mês' },
  { feature: 'Pix automático', avance: '1,49%', construa: '1,19%', impulsione: '0,99%', domine: '0,99%' },
  { feature: 'Cartão de crédito', avance: '4,49%', construa: '3,99%', impulsione: '3,49%', domine: '3,49%' },
]

export const EXTENDED_REFERENCES = [
  { label: 'IPCA 2026', source: 'Banco Central do Brasil — Relatório Focus', year: '2026', url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-03/estimativas-do-mercado-para-inflacao-e-pib-ficam-estaveis-0' },
  { label: 'Taxa Selic', source: 'Banco Central do Brasil — Ata COPOM', year: '2026' },
  { label: 'Câmbio USD/BRL', source: 'B3 / Banco Central do Brasil', year: '2026' },
  { label: 'PIB Brasil', source: 'Correio Braziliense — PIB 2025/2026', year: '2026', url: 'https://www.correiobraziliense.com.br/economia/2026/03/7095091-pib-2025-economia-cresce-3-4-e-supera-expectativas.html' },
  { label: 'Custos WhatsApp Business API', source: 'SpurNow — WhatsApp Business API Pricing', year: '2026', url: 'https://www.spurnow.com/en/blogs/whatsapp-business-api-pricing-explained' },
  { label: 'Modelos Gemini — Preços', source: 'Google AI Studio — Pricing page', year: '2026', url: 'https://ai.google.dev/pricing' },
  { label: 'LLM API Pricing Comparison (2026)', source: 'IntuitionLabs.ai — AI API Pricing Comparison', year: 'Mar 2026', url: 'https://intuitionlabs.ai/articles/ai-api-pricing-comparison-grok-gemini-openai-claude' },
  { label: 'OpenAI API Pricing', source: 'openai.com/api/pricing', year: '2026', url: 'https://openai.com/api/pricing' },
  { label: 'Anthropic Claude Pricing', source: 'platform.claude.com — Pricing', year: '2026', url: 'https://platform.claude.com/docs/en/about-claude/pricing' },
  { label: 'Google Vertex AI Pricing', source: 'cloud.google.com/vertex-ai/generative-ai/pricing', year: '2026', url: 'https://cloud.google.com/vertex-ai/generative-ai/pricing' },
  { label: 'DeepSeek API Pricing', source: 'CostGoat — DeepSeek API', year: '2026', url: 'https://costgoat.com/pricing/deepseek-api' },
  { label: 'xAI Grok API Launch', source: "TechCrunch — Elon Musk's xAI launches an API for Grok", year: 'Abr 2025', url: 'https://techcrunch.com/2025/04/09/elon-musks-ai-company-xai-launches-an-api-for-grok-3/' },
  { label: 'SaaS Benchmarks — CAC e LTV', source: 'High Alpha — SaaS Benchmarks', year: '2025', url: 'https://www.highalpha.com/saas-benchmarks' },
  { label: 'Taxa de churn SaaS B2B', source: 'ChartMogul — SaaS Growth Report', year: '2025', url: 'https://chartmogul.com/reports/saas-growth-the-odds-of-making-it/' },
  { label: 'Mercado Global de ERP', source: 'Gartner — ERP Market Share Analysis', year: '2025', url: 'https://www.gartner.com/en/information-technology/insights/erp' },
  { label: 'CRM Market Share e Tendências', source: 'IDC — Worldwide CRM Applications Market Shares', year: '2025', url: 'https://www.idc.com/getdoc.jsp?containerId=US50389523' },
  { label: 'Transações PDV no Brasil', source: 'ABECS — Associação Brasileira das Empresas de Cartões', year: '2025', url: 'https://www.abecs.org.br/estatisticas-de-meios-de-pagamento' },
  { label: 'Adoção de Pix no varejo', source: 'Banco Central do Brasil — Relatório Pix', year: '2025', url: 'https://www.bcb.gov.br/estabilidadefinanceira/pix' },
  { label: 'Crescimento SaaS B2B no Brasil', source: 'Distrito — Cubo SaaS Report', year: '2025' },
  { label: 'ROI de Automação com IA Generativa', source: 'McKinsey Global Institute — The state of AI', year: '2025', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
]

export interface SecurityPillar {
  icon: string
  title: string
  description: string
  badges: string[]
  accentColor: string
}

export const SECURITY_PILLARS: SecurityPillar[] = [
  {
    icon: '🔐',
    title: 'Criptografia de Ponta',
    description:
      'AES-256-GCM com derivação de chaves por organização (HKDF-SHA256). Dados sensíveis — tokens OAuth, eventos de billing e payloads de IA — são cifrados em repouso com IV aleatório e auth tags.',
    badges: ['AES-256-GCM', 'HKDF-SHA256', 'bcrypt', 'pgcrypto'],
    accentColor: '#3b82f6',
  },
  {
    icon: '🛡️',
    title: 'Autenticação & Controle de Acesso',
    description:
      'JWT com tokens de acesso (1h) e refresh (7d) em cookies httpOnly + secure + sameSite. RBAC granular com guards de permissão, feature flags e isolamento multi-tenant por organização.',
    badges: ['JWT httpOnly', 'RBAC', 'Multi-Tenant', 'Feature Flags'],
    accentColor: '#8b5cf6',
  },
  {
    icon: '📜',
    title: 'LGPD & Privacidade',
    description:
      'Consentimento explícito antes de coleta de dados, política de proteção de dados acessível, retenção configurável por plano (3-6 meses) e audit logs completos com IP, user-agent e ator.',
    badges: ['LGPD', 'Consentimento', 'Retenção', 'Audit Logs'],
    accentColor: '#10b981',
  },
  {
    icon: '☁️',
    title: 'Cloudflare Zero Trust & Tunnel',
    description:
      'Todo o tráfego passa por Cloudflare Tunnel (cloudflared) — sem portas expostas na internet. DDoS mitigado na edge, SSL/TLS Full (Strict), proxy reverso com HSTS e métricas do túnel monitoradas via Prometheus + Grafana.',
    badges: ['Zero Trust', 'Cloudflare Tunnel', 'Anti-DDoS', 'Edge SSL'],
    accentColor: '#f97316',
  },
  {
    icon: '🌐',
    title: 'Infraestrutura Segura',
    description:
      'HTTPS forçado com Let\'s Encrypt e HSTS. Helmet.js para headers de segurança, CORS restrito por domínio, rate limiting global (60 req/min) e por organização para endpoints de IA.',
    badges: ['HTTPS/TLS', 'Helmet.js', 'Rate Limiting', 'CORS'],
    accentColor: '#f59e0b',
  },
  {
    icon: '✅',
    title: 'Validação & Proteção de API',
    description:
      'class-validator com whitelist e rejeição de campos desconhecidos em todos os DTOs. HMAC-SHA256 para webhooks do WhatsApp, API keys internas e guards service-to-service.',
    badges: ['class-validator', 'HMAC-SHA256', 'API Keys', 'DTO Strict'],
    accentColor: '#ec4899',
  },
  {
    icon: '📊',
    title: 'Auditoria & Compliance',
    description:
      'Registro de auditoria para toda ação sensível (criação, alteração, exclusão) com rastreio de ator, IP e contexto. Backups criptografados e variáveis de ambiente isoladas por serviço.',
    badges: ['ISO 27001', 'Audit Trail', 'Backups Cifrados', 'Env Isolation'],
    accentColor: '#06b6d4',
  },
]

export interface SecurityStat {
  value: string
  label: string
}

export const SECURITY_STATS: SecurityStat[] = [
  { value: 'AES-256', label: 'Criptografia em Repouso' },
  { value: 'Zero Trust', label: 'Cloudflare Tunnel' },
  { value: 'RBAC', label: 'Controle de Acesso Granular' },
  { value: '100%', label: 'HTTPS com HSTS' },
]

export type NexOrigin = 'openai' | 'google' | 'xai' | 'western' | 'chinese'
export type NexMediaType = 'image' | 'video' | 'audio'

export interface NexAiModel {
  name: string
  origin: NexOrigin
  mediaType: NexMediaType
  provider: string
  baseCredits: number | null
  pricingNote: string
  exampleCost: string
}

export const NEX_AI_MODELS: NexAiModel[] = [
  // ── OpenAI ──
  { name: 'Sora 2 Pub', origin: 'openai', mediaType: 'video', provider: 'OpenAI', baseCredits: 20, pricingNote: 'Fixo 20 pts/vídeo', exampleCost: '20 pts' },
  { name: 'Sora 2 Standard', origin: 'openai', mediaType: 'video', provider: 'OpenAI', baseCredits: 160, pricingNote: 'Por duração: 160 pts base (4s-12s)', exampleCost: '4s: 160 | 8s: 320 | 12s: 480' },
  { name: 'Sora 2 Pro', origin: 'openai', mediaType: 'video', provider: 'OpenAI', baseCredits: 480, pricingNote: 'Pro quality, por duração', exampleCost: '4s: 480 | 8s: 960 | 12s: 1.440' },
  { name: 'Sora 2 VIP', origin: 'openai', mediaType: 'video', provider: 'OpenAI', baseCredits: 100, pricingNote: 'Fixo 100 pts/vídeo', exampleCost: '100 pts' },

  // ── Google ──
  { name: 'Gemini 3 Pro Image', origin: 'google', mediaType: 'image', provider: 'Google', baseCredits: 25, pricingNote: 'Por resolução: 1K/2K: 25 | 4K: 30', exampleCost: '1K: 25 | 2K: 25 | 4K: 30' },
  { name: 'Nano Banana 2', origin: 'google', mediaType: 'image', provider: 'Google', baseCredits: 32, pricingNote: 'Por resolução: 0.5K-4K', exampleCost: '0.5K: 24 | 1K: 32 | 2K: 48 | 4K: 64' },
  { name: 'Nano Banana Pro', origin: 'google', mediaType: 'image', provider: 'Google', baseCredits: 60, pricingNote: 'Por resolução: 0.5K-4K', exampleCost: '0.5K: 45 | 1K: 60 | 2K: 90 | 4K: 120' },
  { name: 'Veo 3.1 Standard', origin: 'google', mediaType: 'video', provider: 'Google', baseCredits: 640, pricingNote: 't2v / i2v / extend / ref', exampleCost: '5s: 640 | 10s: 1.280 | 15s: 1.920' },
  { name: 'Veo 3.1 Fast', origin: 'google', mediaType: 'video', provider: 'Google', baseCredits: 320, pricingNote: 't2v / i2v / extend / first-last', exampleCost: '5s: 320 | 7s: 480 | 15s: 1.120' },

  // ── xAI ──
  { name: 'Grok Imagine Video', origin: 'xai', mediaType: 'video', provider: 'xAI', baseCredits: null, pricingNote: 't2v / i2v / edit — por segundo', exampleCost: '5s: 100 | 10s: 200 | 15s: 300' },

  // ── Western ──
  { name: 'Flux 2 Flash', origin: 'western', mediaType: 'image', provider: 'Black Forest Labs', baseCredits: 2, pricingNote: '2 pts/imagem', exampleCost: '1 img: 2 | 4 imgs: 8' },
  { name: 'ElevenLabs Scribe V2', origin: 'western', mediaType: 'audio', provider: 'ElevenLabs', baseCredits: null, pricingNote: '4 pts/min (máx 120 min)', exampleCost: '1min: 4 | 5min: 20 | 30min: 120' },

  // ── Chinese: ByteDance (Jimeng / Seedance / Seedream) ──
  { name: 'Jimeng 5.0 Flagship', origin: 'chinese', mediaType: 'image', provider: 'ByteDance', baseCredits: 2, pricingNote: '2 pts/imagem', exampleCost: '1 img: 2 | 4 imgs: 8' },
  { name: 'Jimeng 4.5 / 4.6', origin: 'chinese', mediaType: 'image', provider: 'ByteDance', baseCredits: 2, pricingNote: '2 pts/imagem', exampleCost: '1 img: 2 | 4 imgs: 8' },
  { name: 'Jimeng Agent', origin: 'chinese', mediaType: 'image', provider: 'ByteDance', baseCredits: 3, pricingNote: 'Criação inteligente', exampleCost: '3 pts base' },
  { name: 'Seedream 5.0 Lite', origin: 'chinese', mediaType: 'image', provider: 'ByteDance', baseCredits: 14, pricingNote: 't2i + edit, 14 pts/img', exampleCost: '1 img: 14 | 4 imgs: 56' },
  { name: 'Seedream 4.5', origin: 'chinese', mediaType: 'image', provider: 'ByteDance', baseCredits: 16, pricingNote: 't2i + edit, 16 pts/img', exampleCost: '1 img: 16 | 4 imgs: 64' },
  { name: 'Qwen Multi-Angle Image', origin: 'chinese', mediaType: 'image', provider: 'Alibaba', baseCredits: 14, pricingNote: '14 pts/imagem', exampleCost: '1 img: 14 | 4 imgs: 56' },
  { name: 'Jimeng 3.5 Pro Video', origin: 'chinese', mediaType: 'video', provider: 'ByteDance', baseCredits: 10, pricingNote: '5s: 10 | 10s: 20 | 12s: 30', exampleCost: '5s: 10 | 10s: 20 | 12s: 30' },
  { name: 'Seedance 1.5 Pro', origin: 'chinese', mediaType: 'video', provider: 'ByteDance', baseCredits: 105, pricingNote: '480p-1080p, por duração e resolução', exampleCost: '2s 480p: 20 | 3s 720p: 63 | 3s 1080p: 141' },
  { name: 'Seedance Lite', origin: 'chinese', mediaType: 'video', provider: 'ByteDance', baseCredits: 26, pricingNote: 't2v / i2v / ref', exampleCost: 't2v: 26 | i2v: 40 | ref: 75' },
  { name: 'Seedance Pro Fast', origin: 'chinese', mediaType: 'video', provider: 'ByteDance', baseCredits: 100, pricingNote: 't2v / i2v rápido', exampleCost: '2s: 10 | 5s: 20 | 10s: 40' },
  { name: 'OmniHuman v1.5', origin: 'chinese', mediaType: 'video', provider: 'ByteDance', baseCredits: 64, pricingNote: 'Áudio → vídeo (avatar)', exampleCost: '64 pts base' },
  { name: 'Dreamactor V2', origin: 'chinese', mediaType: 'video', provider: 'ByteDance', baseCredits: null, pricingNote: 'Motion transfer, por duração', exampleCost: '5s: 100 | 10s: 200 | 15s: 300' },

  // ── Chinese: Kuaishou (Kling) ──
  { name: 'Kling O3 Standard', origin: 'chinese', mediaType: 'video', provider: 'Kuaishou', baseCredits: 336, pricingNote: 't2v / i2v / ref — por duração', exampleCost: '3s: 202 | 5s: 336 | 10s: 672' },
  { name: 'Kling O3 Pro', origin: 'chinese', mediaType: 'video', provider: 'Kuaishou', baseCredits: 448, pricingNote: 't2v / i2v / ref — por duração', exampleCost: '3s: 269 | 5s: 448 | 10s: 896' },
  { name: 'Kling Motion Control', origin: 'chinese', mediaType: 'video', provider: 'Kuaishou', baseCredits: 28, pricingNote: 'Transferência de movimento', exampleCost: '3s: 84 | 5s: 140 | 10s: 280' },

  // ── Chinese: MiniMax (Hailuo / Conch) ──
  { name: 'Hailuo 2.3 Standard', origin: 'chinese', mediaType: 'video', provider: 'MiniMax', baseCredits: 112, pricingNote: 't2v / i2v', exampleCost: '1x: 112 | 2x: 224' },
  { name: 'Hailuo 2.3 Pro', origin: 'chinese', mediaType: 'video', provider: 'MiniMax', baseCredits: 196, pricingNote: 't2v / i2v', exampleCost: '196 pts fixo' },
  { name: 'Hailuo 2.3 Fast', origin: 'chinese', mediaType: 'video', provider: 'MiniMax', baseCredits: 76, pricingNote: 'Standard: 76 | Pro: 132', exampleCost: 'Std: 76 | Pro: 132' },
  { name: 'Conch TTS', origin: 'chinese', mediaType: 'audio', provider: 'MiniMax', baseCredits: 350, pricingNote: 'Síntese de voz', exampleCost: '100 chars: 35 | 1000 chars: 350' },
  { name: 'Conch Voice Clone', origin: 'chinese', mediaType: 'audio', provider: 'MiniMax', baseCredits: 400, pricingNote: 'Clonagem de voz', exampleCost: '400 pts fixo' },
  { name: 'Conch Voice Design', origin: 'chinese', mediaType: 'audio', provider: 'MiniMax', baseCredits: 400, pricingNote: 'Design de voz personalizada', exampleCost: '400 pts fixo' },
  { name: 'Conch Music Gen', origin: 'chinese', mediaType: 'audio', provider: 'MiniMax', baseCredits: 25, pricingNote: 'Geração de música', exampleCost: '25 pts fixo' },

  // ── Chinese: Alibaba (Wan) ──
  { name: 'Wan 2.6', origin: 'chinese', mediaType: 'video', provider: 'Alibaba', baseCredits: 300, pricingNote: 't2v / i2v / ref — por duração e resolução', exampleCost: '5s 480p: 200 | 5s 720p: 300' },
  { name: 'Wan 2.6 Flash', origin: 'chinese', mediaType: 'video', provider: 'Alibaba', baseCredits: 150, pricingNote: 'i2v rápido', exampleCost: '5s 480p: 100 | 5s 720p: 150' },

  // ── Chinese: Shengshu (Vidu) ──
  { name: 'Vidu Q3', origin: 'chinese', mediaType: 'video', provider: 'Shengshu', baseCredits: 28, pricingNote: 't2v / i2v — por duração', exampleCost: '4s: 28 | 8s: 56 | 12s: 84' },
]
