import { Metadata } from 'next'
import CustosPage from '../../components/CustosPage'

export const metadata: Metadata = {
  title: 'Custos WhatsApp e Omnichannel',
  description:
    'Planos STARTER, SPECIALIST, EXPERT, PROFESSIONAL e ENTERPRISE. Mensagens em massa, IA generativa, canais WhatsApp, SMS e mais. Tabela comparativa de recursos.',
  openGraph: {
    title: 'Custos WhatsApp e Omnichannel | gaqno development',
    description:
      'Planos com mensagens em massa, IA generativa e canais integrados. Compare recursos e preços.',
  },
}

export default function Custos() {
  return <CustosPage />
}
