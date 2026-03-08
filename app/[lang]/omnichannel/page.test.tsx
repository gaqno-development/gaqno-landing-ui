import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

const mockOmniDict = {
  hero: {
    tagline: 'WhatsApp · Instagram · Email',
    title: 'Atenda seus clientes onde eles estiverem.',
    description: 'Unifique todos os canais em uma plataforma.',
    trial_badge: 'Teste grátis por 7 dias.',
    cta_primary: 'Começar agora',
    cta_secondary: 'Falar com especialista',
  },
  form: {
    coupon_label: 'Tenho um cupom',
    coupon_placeholder: 'gaqno_omni',
    name_label: 'Nome',
    name_placeholder: 'seu nome',
    email_label: 'E-mail',
    email_placeholder: 'email@teste.com',
    phone_label: 'Celular',
    phone_placeholder: '11 99999-9999',
    company_label: 'Empresa',
    company_placeholder: 'Minha Empresa',
    password_label: 'Senha',
    password_placeholder: '***',
    submit: 'Criar conta grátis',
    email_optin: 'receber por e-mail',
    whatsapp_optin: 'receber por WhatsApp',
    consent: 'Você concorda com os termos.',
  },
  channels: {
    title: 'Todos os canais, uma única plataforma',
    subtitle: 'Centralize todas as conversas.',
    items: [{ icon: 'mdi:whatsapp', label: 'WhatsApp Business' }],
  },
  features: {
    title: 'Tudo que você precisa para encantar clientes',
    subtitle: 'Recursos poderosos.',
    cta: 'ver recursos',
    items: [
      {
        icon: 'mdi:robot-happy-outline',
        title: 'Chatbots com IA',
        description: 'Bots inteligentes.',
      },
    ],
  },
  how_it_works: {
    title: 'Do zero ao omnichannel em 3 passos',
    subtitle: 'Configuração simples.',
    steps: [
      { number: '01', title: 'Conecte seus canais', description: 'Integre em minutos.' },
    ],
  },
  pricing: {
    title: 'Planos para cada tamanho de operação',
    subtitle: 'Comece grátis.',
    plan_cta: 'Começar agora',
    enterprise_cta: 'Falar com especialista',
  },
  testimonials: {
    title: 'Quem usa, aprova',
    cta: 'começar agora',
    items: [{ quote: 'Ótimo sistema!', author: 'Marina Oliveira', role: 'Head de CX' }],
  },
  footer: {
    privacy_policy: 'Política de privacidade',
    terms_of_use: 'Termos de Uso',
    copyright: '© 2024 Gaqno.',
  },
}

vi.mock('../../dictionaries', () => ({
  getDictionary: () => Promise.resolve({ omnichannel: mockOmniDict }),
}))

describe('Omnichannel page', () => {
  it('renders OmnichannelLanding with dict', async () => {
    const OmnichannelPage = (await import('./page')).default
    const result = await OmnichannelPage({ params: { lang: 'pt' } })
    const { container } = render(result)
    expect(container).toBeTruthy()
  })

  it('shows hero headline', async () => {
    const OmnichannelPage = (await import('./page')).default
    const result = await OmnichannelPage({ params: { lang: 'pt' } })
    render(result)
    expect(screen.getByText(/Atenda seus clientes onde eles estiverem/)).toBeInTheDocument()
  })

  it('shows channels section title', async () => {
    const OmnichannelPage = (await import('./page')).default
    const result = await OmnichannelPage({ params: { lang: 'pt' } })
    render(result)
    expect(screen.getByText('Todos os canais, uma única plataforma')).toBeInTheDocument()
  })

  it('shows features section title', async () => {
    const OmnichannelPage = (await import('./page')).default
    const result = await OmnichannelPage({ params: { lang: 'pt' } })
    render(result)
    expect(screen.getByText('Tudo que você precisa para encantar clientes')).toBeInTheDocument()
  })

  it('shows pricing section title', async () => {
    const OmnichannelPage = (await import('./page')).default
    const result = await OmnichannelPage({ params: { lang: 'pt' } })
    render(result)
    expect(screen.getByText('Planos para cada tamanho de operação')).toBeInTheDocument()
  })

  it('shows testimonials section title', async () => {
    const OmnichannelPage = (await import('./page')).default
    const result = await OmnichannelPage({ params: { lang: 'pt' } })
    render(result)
    expect(screen.getByText('Quem usa, aprova')).toBeInTheDocument()
  })
})
