import { Suspense } from 'react'
import { Metadata } from 'next'
import CrmLanding from '../../components/CrmLanding'
import { getDictionary } from '../../dictionaries'
import { Skeleton } from '@/components/ui/skeleton'

export const metadata: Metadata = {
  title: 'CRM Gaqno — Teste grátis por 30 dias',
  description:
    'Conecte sua operação de vendas ao sistema da Gaqno. Controle de faturamento, estoque e vendas para loja virtual, física e marketplaces. Teste grátis por 30 dias.',
  openGraph: {
    title: 'CRM Gaqno — Teste grátis por 30 dias',
    description:
      'Gaqno integra seu negócio de ponta a ponta. ERP, PDV, Omnichannel e mais. Comece sua avaliação gratuita.',
  },
}

function Loading() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-4">
      <Skeleton className="h-12 w-[300px]" />
      <Skeleton className="h-4 w-[250px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export default async function CrmPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang as 'en' | 'pt')

  if (!dict.crm) return null

  return (
    <Suspense fallback={<Loading />}>
      <CrmLanding dict={dict.crm} />
    </Suspense>
  )
}
