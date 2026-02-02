export type PlatformProduct = {
  id: string
  name: string
  shortDescription: string
  icon: string
  href?: string
  /** Path to screenshot, e.g. /img/products/crm.webp (place in public/img/products/) */
  image?: string
}

export const PLATFORM_PRODUCTS: PlatformProduct[] = [
  {
    id: 'crm',
    name: 'CRM',
    shortDescription: 'Gestão de relacionamento com clientes, pipelines e vendas.',
    icon: 'mdi:account-group',
    href: '#produto-crm',
    image: '/img/products/crm.png',
  },
  {
    id: 'erp',
    name: 'ERP',
    shortDescription: 'Recursos empresariais integrados: estoque, compras e operações.',
    icon: 'mdi:package-variant',
    href: '#produto-erp',
    image: '/img/products/erp.png',
  },
  {
    id: 'ia',
    name: 'IA',
    shortDescription: 'Inteligência artificial: chat, geração de conteúdo e automação.',
    icon: 'mdi:robot-outline',
    href: '#produto-ia',
    image: '/img/products/ia.png',
  },
  {
    id: 'rpg',
    name: 'RPG',
    shortDescription: 'Narrativa e jogos com IA: aventuras e experiências interativas.',
    icon: 'mdi:sword-cross',
    href: '#produto-rpg',
    image: '/img/products/rpg.png',
  },
  {
    id: 'finance',
    name: 'Finance',
    shortDescription: 'Controle financeiro, categorias, relatórios e fluxo de caixa.',
    icon: 'mdi:chart-line',
    href: '#produto-finance',
    image: '/img/products/finance.png',
  },
  {
    id: 'pdv',
    name: 'PDV',
    shortDescription: 'Ponto de venda: vendas, estoque e operações de loja.',
    icon: 'mdi:point-of-sale',
    href: '#produto-pdv',
    image: '/img/products/pdv.png',
  },
  {
    id: 'omnichannel',
    name: 'Omnichannel',
    shortDescription: 'WhatsApp, canais unificados, filas e atendimento com IA.',
    icon: 'mdi:message-text-multiple',
    href: '#produto-omnichannel',
    image: '/img/products/omnichannel.png',
  },
]
