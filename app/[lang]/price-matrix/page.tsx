import { Metadata } from 'next'
import PriceMatrixPage from '../../components/PriceMatrixPage'

export const metadata: Metadata = {
  title: 'Portal SaaS — Planos e Interactionz 2026',
  description:
    'CRM, ERP, PDV, Omnichannel e AI Studio integrados em um portal. IA precificada por Interactionz — moeda universal. Planos, segurança com AES-256 e LGPD, comparativo de recursos e unit economics.',
  openGraph: {
    title: 'Portal SaaS — Planos e Interactionz 2026 | gaqno development',
    description:
      'Portal SaaS com módulos integrados e IA precificada por Interactionz. Planos, comparativo de recursos e simuladores de custos.',
  },
}

export default function PriceMatrix() {
  return <PriceMatrixPage />
}
