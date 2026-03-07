export interface MacroIndicator {
  label: string
  value: string
  note: string
  highlighted?: boolean
  highlightColor?: string
}

export const MACRO_INDICATORS: MacroIndicator[] = [
  { label: 'IPCA (Inflação)', value: '3,91%', note: 'Base para reajustes anuais' },
  { label: 'Taxa Selic', value: '12,00%', note: 'Favorece OPEX vs CAPEX' },
  {
    label: 'Câmbio (USD/BRL)',
    value: 'R$ 5,42',
    note: 'Custo de APIs (IA e Meta)',
    highlighted: true,
    highlightColor: 'blue',
  },
  { label: 'PIB', value: '1,82%', note: 'Foco em produtividade' },
]

export interface AIModel {
  icon: string
  name: string
  cost: string
}

export const AI_MODELS: AIModel[] = [
  { icon: '📝', name: 'Gemini 3 Pro (Texto)', cost: '12.000 pts / 1M tokens' },
  { icon: '🖼️', name: 'Imagen 4 Standard', cost: '40 pts / img' },
  { icon: '🎬', name: 'Veo 2 (Vídeo)', cost: '350 pts / seg' },
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
    subtitle: 'Palavras-passe e Segurança (OTP)',
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
      '1.000 Pontos AI Inclusos',
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
      '5.000 Pontos AI Inclusos',
    ],
    highlighted: true,
    cta: 'Margem e Retenção',
  },
]

export const CALCULATOR = {
  CAMBIO: 5.42,
  COST_PER_POINT: 0.0072,
  BIG_TECH_IMG_USD: 0.17,
  BIG_TECH_VID_USD: 0.35,
  NEXAI_IMG_POINTS: 40,
  NEXAI_VID_POINTS: 350,
  WPP_AVG_COST_BRL: 0.24,
} as const

export interface UnitEconomicMetric {
  label: string
  value: string
  color?: string
}

export const UNIT_ECONOMICS: UnitEconomicMetric[] = [
  { label: 'CAC Estimado', value: 'R$ 1.5K - 2.5K' },
  { label: 'Payback', value: '5 a 6 meses' },
  { label: 'Churn Rate', value: '< 2% a.m.', color: 'green' },
]
