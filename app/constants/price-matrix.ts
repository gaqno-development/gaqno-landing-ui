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
  { label: 'Taxa Selic', value: '12,00%', note: 'Favorece OPEX vs CAPEX', barValue: 12 },
  {
    label: 'Câmbio (USD/BRL)',
    value: 'R$ 5,42',
    note: 'Custo de APIs (IA e Meta)',
    highlighted: true,
    highlightColor: 'blue',
    barValue: 54.2,
  },
  { label: 'PIB', value: '1,82%', note: 'Foco em produtividade', barValue: 1.82 },
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
    cost: '12.000 pts / 1M tokens',
    bigTechUsd: 1.25,
    interactionzPoints: 12000,
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
    pricing: 'Custo + 15% Taxa',
    nameColor: 'blue',
  },
  {
    name: 'Utilidade',
    subtitle: 'Notificações ERP (Pix, Boletos)',
    pricing: 'Franquia + Excedente',
    nameColor: 'white',
  },
  {
    name: 'Autenticação',
    subtitle: 'Senhas e Segurança (OTP)',
    pricing: 'Repasse Exato (Margem 0%)',
    nameColor: 'white',
  },
  {
    name: 'Serviço',
    subtitle: 'Suporte ao Cliente',
    pricing: '1.000 msgs Grátis',
    nameColor: 'muted',
    pricingColor: 'green',
  },
]

export interface SaaSPlan {
  name: string
  description: string
  price: string
  features: string[]
  highlighted?: boolean
  cta: string
}

export const SAAS_PLANS: SaaSPlan[] = [
  {
    name: 'Professional',
    description: 'Para empresas consolidando a operação.',
    price: 'R$ 349',
    features: [
      'Infraestrutura: VPS Partilhada',
      'Até 5 Utilizadores Inclusos',
      '1 Canal Oficial WhatsApp',
      '1.000 Interactionz Inclusos',
    ],
    cta: 'Pilar de Escala',
  },
  {
    name: 'Enterprise / Solo',
    description: 'Isolamento de dados e volumes massivos.',
    price: 'R$ 899',
    features: [
      'Infra: VPS Solo Dedicada (8 vCPU / 32GB)',
      'Utilizadores Ilimitados',
      'Múltiplos Canais Omnichannel',
      '5.000 Interactionz Inclusos',
    ],
    highlighted: true,
    cta: 'Margem e Retenção',
  },
]

export const CALCULATOR = {
  CAMBIO: 5.42,
  COST_PER_POINT: 0.0072,
  API_COST_PER_POINT_USD: 0.0001042,
  BIG_TECH_IMG_USD: 0.17,
  BIG_TECH_VID_USD: 0.35,
  AI_IMG_POINTS: 40,
  AI_VID_POINTS: 350,
  WPP_AVG_COST_BRL: 0.24,
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
      { model: 'Texto (1M tok)', bigtech: 6.78, gaqno: 0.86, unit: 'R$' },
      { model: 'Imagem (100x)', bigtech: 5.21, gaqno: 2.88, unit: 'R$' },
      { model: 'Vídeo (10seg)', bigtech: 18.97, gaqno: 7.56, unit: 'R$' },
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
    gaqnoCostPer: 29,
    marketCostPer: 85,
    description: 'por usuário/mês',
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
    marketCostPer: 0.02,
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
    interactionzPerAction: 12000,
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
    label: 'Starter',
    pointsPerMonth: 100,
    examplesOmnichannel: 100,
    examplesCrmLeads: 12,
    examplesImages: 2,
    color: '#64748b',
  },
  {
    label: 'Specialist',
    pointsPerMonth: 500,
    examplesOmnichannel: 500,
    examplesCrmLeads: 62,
    examplesImages: 12,
    color: '#8b5cf6',
  },
  {
    label: 'Expert',
    pointsPerMonth: 2000,
    examplesOmnichannel: 2000,
    examplesCrmLeads: 250,
    examplesImages: 50,
    color: '#3b82f6',
  },
  {
    label: 'Professional',
    pointsPerMonth: 5000,
    examplesOmnichannel: 5000,
    examplesCrmLeads: 625,
    examplesImages: 125,
    color: '#ec4899',
  },
]

export type LLMTier = 'premium' | 'mid' | 'low' | 'ultra'

export interface LLMProvider {
  provider: string
  model: string
  inputPer1M: number
  outputPer1M: number
  tier: LLMTier
  context: string
}

export const LLM_PROVIDERS: LLMProvider[] = [
  { provider: 'OpenAI', model: 'GPT-5.2', inputPer1M: 1.75, outputPer1M: 14.00, tier: 'premium', context: '128K' },
  { provider: 'Google', model: 'Gemini 3.1 Pro', inputPer1M: 2.00, outputPer1M: 12.00, tier: 'premium', context: '2M' },
  { provider: 'Google', model: 'Gemini 2.5 Pro', inputPer1M: 1.25, outputPer1M: 10.00, tier: 'mid', context: '2M' },
  { provider: 'Anthropic', model: 'Claude Sonnet 4.6', inputPer1M: 3.00, outputPer1M: 15.00, tier: 'mid', context: '200K' },
  { provider: 'Anthropic', model: 'Claude Haiku 4.5', inputPer1M: 1.00, outputPer1M: 5.00, tier: 'low', context: '200K' },
  { provider: 'xAI', model: 'Grok 4 Fast', inputPer1M: 0.20, outputPer1M: 0.50, tier: 'low', context: '131K' },
  { provider: 'DeepSeek', model: 'V3.2-Exp', inputPer1M: 0.28, outputPer1M: 0.42, tier: 'ultra', context: '128K' },
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

export interface CrmPlan {
  id: string
  name: string
  priceMonthly: number
  priceAnnual: number
  annualSavings: number
  features: string[]
  highlightFeatures: string[]
  highlighted?: boolean
}

export const CRM_PLANS: CrmPlan[] = [
  {
    id: 'avance',
    name: 'Avance',
    priceMonthly: 59,
    priceAnnual: 49,
    annualSavings: 120,
    features: [
      'Vendas e pedidos ilimitado',
      'Usuários ilimitados',
      'Armazenamento ilimitado',
      'OMS ilimitado',
    ],
    highlightFeatures: [
      'Emissão de NF-e, NFC-e e NFS-e',
      'Gestão de estoque',
      'Cotação de frete',
      'Controle de expedição',
    ],
  },
  {
    id: 'construa',
    name: 'Construa',
    priceMonthly: 159,
    priceAnnual: 119,
    annualSavings: 480,
    highlighted: true,
    features: [
      'Vendas e pedidos ilimitado',
      'Usuários ilimitados',
      'Armazenamento ilimitado',
      'OMS ilimitado',
    ],
    highlightFeatures: [
      'Consultoria de ativação',
      'Multiempresa',
      'Emissão de boletos e cobranças',
      'Conciliação bancária',
    ],
  },
  {
    id: 'impulsione',
    name: 'Impulsione',
    priceMonthly: 349,
    priceAnnual: 259,
    annualSavings: 1080,
    features: [
      'Vendas e pedidos ilimitado',
      'Usuários ilimitados',
      'Armazenamento ilimitado',
      'OMS ilimitado',
    ],
    highlightFeatures: [
      'Gestor de conta dedicado',
      'Integração com marketplaces',
      'Relatórios avançados',
      'API completa',
    ],
  },
  {
    id: 'domine',
    name: 'Domine',
    priceMonthly: 849,
    priceAnnual: 639,
    annualSavings: 2520,
    features: [
      'Vendas e pedidos ilimitado',
      'Usuários ilimitados',
      'Armazenamento ilimitado',
      'OMS ilimitado',
    ],
    highlightFeatures: [
      'Infraestrutura dedicada',
      'SLA premium',
      'Onboarding personalizado',
      'Suporte prioritário 24/7',
    ],
  },
]

export interface PlanFeatureRow {
  category?: string
  feature: string
  professional: boolean | string
  enterprise: boolean | string
}

export const PLAN_FEATURE_MATRIX: PlanFeatureRow[] = [
  { category: 'Infraestrutura', feature: 'Servidor', professional: 'VPS Partilhada', enterprise: 'VPS Solo Dedicada' },
  { feature: 'vCPU / RAM', professional: '2 vCPU / 8GB', enterprise: '8 vCPU / 32GB' },
  { feature: 'Usuários', professional: 'Até 5', enterprise: 'Ilimitados' },
  { feature: 'Isolamento de dados', professional: false, enterprise: true },
  { category: 'Omnichannel', feature: 'Canais WhatsApp', professional: '1 canal', enterprise: 'Múltiplos canais' },
  { feature: 'Chatbots ativos', professional: 'Até 5', enterprise: 'Ilimitados' },
  { feature: 'Interactionz de IA (todos os módulos)', professional: '1.000', enterprise: '5.000+' },
  { feature: 'IA Generativa', professional: true, enterprise: true },
  { category: 'AI Studio', feature: 'Modelos disponíveis', professional: 'Texto + Imagem', enterprise: 'Todos (incl. Vídeo)' },
  { feature: 'API de IA', professional: true, enterprise: true },
  { category: 'Suporte', feature: 'SLA 1ª resposta', professional: 'Até 2h', enterprise: 'Até 30min' },
  { feature: 'Account manager', professional: false, enterprise: true },
  { feature: 'Onboarding dedicado', professional: false, enterprise: true },
  { feature: 'Central de Ajuda', professional: true, enterprise: true },
  { category: 'Financeiro', feature: 'Mensalidade', professional: 'R$ 349/mês', enterprise: 'R$ 899/mês' },
  { feature: 'Pix automático', professional: '1,19%', enterprise: '0,99%' },
  { feature: 'Cartão de crédito', professional: '3,99%', enterprise: '3,49%' },
]

export const EXTENDED_REFERENCES = [
  { label: 'IPCA 2026', source: 'Banco Central do Brasil — Relatório Focus', year: '2026' },
  { label: 'Taxa Selic', source: 'Banco Central do Brasil — Ata COPOM', year: '2026' },
  { label: 'Câmbio USD/BRL', source: 'B3 / Banco Central do Brasil', year: '2026' },
  { label: 'PIB Brasil', source: 'IBGE / FGV — Projeção anual', year: '2026' },
  { label: 'Custos WhatsApp Business API', source: 'Meta for Developers — WhatsApp Business Pricing', year: '2026', url: 'https://developers.facebook.com/docs/whatsapp/pricing' },
  { label: 'Modelos Gemini — Preços', source: 'Google AI Studio — Pricing page', year: '2026', url: 'https://ai.google.dev/pricing' },
  { label: 'LLM API Pricing Comparison (2026)', source: 'IntuitionLabs.ai · Adrien Laurent', year: 'Fev 2026', url: 'https://intuitionlabs.ai/pdfs/llm-api-pricing-comparison-2025-openai-gemini-claude.pdf' },
  { label: 'OpenAI API Pricing', source: 'openai.com/api/pricing', year: '2026', url: 'https://openai.com/api/pricing' },
  { label: 'Anthropic Claude Pricing', source: 'docs.anthropic.com/en/docs/about-claude/pricing', year: '2026', url: 'https://docs.anthropic.com/en/docs/about-claude/pricing' },
  { label: 'Google Vertex AI Pricing', source: 'cloud.google.com/vertex-ai/generative-ai/pricing', year: '2026', url: 'https://cloud.google.com/vertex-ai/generative-ai/pricing' },
  { label: 'DeepSeek API Docs', source: 'api-docs.deepseek.com/quick_start/pricing', year: '2026', url: 'https://api-docs.deepseek.com/quick_start/pricing' },
  { label: 'xAI Grok API Launch', source: "TechCrunch — Elon Musk's xAI launches an API for Grok", year: 'Abr 2025', url: 'https://techcrunch.com/2025/04/09/elon-musks-ai-company-xai-launches-an-api-for-grok-3/' },
  { label: 'SaaS Benchmarks — CAC e LTV', source: 'OpenView Partners — SaaS Benchmarks Report', year: '2025', url: 'https://openviewpartners.com/saas-benchmarks-report/' },
  { label: 'Taxa de churn SaaS B2B', source: 'ChartMogul — SaaS Metrics Report', year: '2025', url: 'https://chartmogul.com/reports/saas-benchmarks/' },
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
  { value: 'RBAC', label: 'Controle de Acesso Granular' },
  { value: '< 2h', label: 'SLA 1ª Resposta de Segurança' },
  { value: '100%', label: 'HTTPS com HSTS' },
]
