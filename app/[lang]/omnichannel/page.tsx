import { Suspense } from 'react'
import { Metadata } from 'next'
import OmnichannelLanding from '../../components/OmnichannelLanding'
import { getDictionary } from '../../dictionaries'
import { Skeleton } from '@/components/ui/skeleton'

export const metadata: Metadata = {
  title: 'Omnichannel Gaqno — WhatsApp, IA e Atendimento Unificado',
  description:
    'Unifique WhatsApp, Instagram, e-mail, SMS e Webchat em uma plataforma. Chatbots com IA, disparos em massa e relatórios em tempo real. Teste grátis por 7 dias.',
  openGraph: {
    title: 'Omnichannel Gaqno — Atenda onde seus clientes estão',
    description:
      'Caixa de entrada unificada, chatbots com IA generativa e automações para escalar seu atendimento.',
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

export default async function OmnichannelPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang as 'en' | 'pt')

  if (!dict.omnichannel) return null

  return (
    <Suspense fallback={<Loading />}>
      <OmnichannelLanding dict={dict.omnichannel} />
    </Suspense>
  )
}
