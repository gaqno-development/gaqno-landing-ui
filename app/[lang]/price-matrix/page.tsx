import { Metadata } from 'next'
import PriceMatrixPage from '../../components/PriceMatrixPage'

export const metadata: Metadata = {
  title: 'Arquitetura de Precificação SaaS 2026',
  description:
    'Síntese estratégica e económica para unificação de ERP, CRM, PDV e AI Studio. Planos Omnichannel (Starter ao Enterprise), comparativo completo de recursos, simuladores de custos IA e unit economics.',
  openGraph: {
    title: 'Arquitetura de Precificação SaaS 2026 | gaqno development',
    description:
      'Matriz de planos SaaS, planos Omnichannel com comparativo completo de recursos, simuladores estratégicos de IA e unit economics.',
  },
}

export default function PriceMatrix() {
  return <PriceMatrixPage />
}
