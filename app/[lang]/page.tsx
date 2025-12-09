import { Suspense } from 'react'
import { Metadata } from 'next'
import Landing from '../components/Landing'
import { getDictionary } from '../dictionaries'
import { Skeleton } from '@/components/ui/skeleton'

export const metadata: Metadata = {
  title: 'Início',
  description:
    'Portfólio de gaqno - Desenvolvedor Fullstack especializado em React, Next.js, Vue.js, Node.js e NestJS. Conheça meus projetos e experiência.',
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

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang as 'en' | 'pt')

  return (
    <Suspense fallback={<Loading />}>
      <Landing dict={dict.landing} />
    </Suspense>
  )
}
