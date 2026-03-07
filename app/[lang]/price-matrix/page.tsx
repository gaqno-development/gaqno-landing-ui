import { Metadata } from 'next'
import PriceMatrixPage from '../../components/PriceMatrixPage'

export const metadata: Metadata = {
  title: 'Arquitetura de Precificação SaaS 2026',
  description:
    'Síntese estratégica e económica para unificação de ERP, CRM, PDV e AI Studio. Planos Professional e Enterprise, simuladores de custos IA e Omnichannel.',
  openGraph: {
    title: 'Arquitetura de Precificação SaaS 2026 | gaqno development',
    description:
      'Matriz de planos SaaS, simuladores estratégicos de IA e Omnichannel, e unit economics.',
  },
}

export default function PriceMatrix() {
  return <PriceMatrixPage />
}
