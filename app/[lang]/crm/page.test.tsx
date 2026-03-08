import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

const mockCrmDict = {
  hero: {
    tagline: 'CRM · ERP · PDV',
    title: 'Gaqno integra seu negócio de ponta a ponta.',
    description: 'Descrição de teste.',
    trial_badge: '30 dias grátis',
    cta_primary: 'Começar teste',
  },
  form: {
    coupon_label: 'Tenho um cupom',
    coupon_placeholder: 'gaqno_30dias',
    name_label: 'Nome',
    name_placeholder: 'seu nome',
    email_label: 'E-mail',
    email_placeholder: 'email@teste.com',
    phone_label: 'Celular',
    phone_placeholder: '11 99999-9999',
    cnpj_label: 'CNPJ',
    cnpj_placeholder: '00.000.000/0000-00',
    password_label: 'Senha',
    password_placeholder: '***',
    submit: 'Começar teste',
    email_optin: 'receber por e-mail',
    whatsapp_optin: 'receber por WhatsApp',
    consent: 'Você concorda com os termos.',
  },
  features: {
    title: 'Automatize processos',
    cta: 'comece grátis',
    items: [{ icon: 'mdi:check', label: 'Emissão de NFe' }],
  },
  channels: {
    title: 'Venda nos principais canais',
    cta: 'teste agora',
    items: [{ icon: 'mdi:shopping-outline', title: 'Marketplaces', description: 'Conecte suas vendas.' }],
  },
  ecosystem: {
    tagline: 'Ecossistema',
    title: 'Muito mais do que um CRM',
    description: 'Expanda suas vendas.',
    cta: 'teste grátis',
    items: [{ icon: 'mdi:cog-outline', title: 'Sistema ERP', description: 'Automatize.' }],
  },
  pricing: {
    title: 'O plano perfeito',
    subtitle: 'Economize no anual',
    toggle_monthly: 'Mensal',
    toggle_annual: 'Anual',
    annual_badge: 'Economize',
    plan_cta: 'teste grátis',
    plans: [
      {
        id: 'avance',
        name: 'Avance',
        subtitle: 'Para faturamento até R$ 81 mil',
        price_monthly: 59,
        price_annual: 49,
        annual_savings: 120,
        revenue_limit: 'R$ 81 mil/ano',
        ads_limit: '2.000',
        data_history: '12 meses',
        pix_transfer: 'Grátis',
        envios_credit: 'R$ 60',
        link_payment_rate: '2,97%',
        mobile_payment_rate: '2,49%',
        boleto_fee: 'R$ 2,50',
        pix_fee: 'R$ 1,20',
        features: ['Vendas ilimitadas'],
        highlight_features: ['Emissão de NF-e'],
      },
    ],
  },
  testimonials: {
    title: 'Histórias de quem faz acontecer',
    cta: 'comece já',
    items: [{ quote: 'Ótimo sistema!', author: 'João Silva', role: 'Empresário' }],
  },
  footer: {
    privacy_policy: 'Política de privacidade',
    terms_of_use: 'Termos de Uso',
    copyright: '© 2024 Gaqno.',
  },
}

vi.mock('../../dictionaries', () => ({
  getDictionary: () => Promise.resolve({ crm: mockCrmDict }),
}))

describe('CRM page', () => {
  it('renders CrmLanding with dict', async () => {
    const CrmPage = (await import('./page')).default
    const result = await CrmPage({ params: { lang: 'pt' } })
    const { container } = render(result)
    expect(container).toBeTruthy()
  })

  it('shows hero headline', async () => {
    const CrmPage = (await import('./page')).default
    const result = await CrmPage({ params: { lang: 'pt' } })
    render(result)
    expect(screen.getByText(/Gaqno integra seu negócio/)).toBeInTheDocument()
  })

  it('shows features section title', async () => {
    const CrmPage = (await import('./page')).default
    const result = await CrmPage({ params: { lang: 'pt' } })
    render(result)
    expect(screen.getByText('Automatize processos')).toBeInTheDocument()
  })

  it('shows pricing section title', async () => {
    const CrmPage = (await import('./page')).default
    const result = await CrmPage({ params: { lang: 'pt' } })
    render(result)
    expect(screen.getByText('O plano perfeito')).toBeInTheDocument()
  })

  it('shows testimonials section title', async () => {
    const CrmPage = (await import('./page')).default
    const result = await CrmPage({ params: { lang: 'pt' } })
    render(result)
    expect(screen.getByText('Histórias de quem faz acontecer')).toBeInTheDocument()
  })
})
