import { ReactNode } from 'react'
import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/utils/cn'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from './components/Navbar'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from './components/Analytics'

interface RootLayoutProps {
  children: ReactNode
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gaqno.dev'
const gaId = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'gaqno development - Programador Fullstack',
    template: '%s | gaqno development',
  },
  description:
    'Desenvolvedor Fullstack especializado em React, Next.js, Vue.js, Node.js e NestJS. Portfólio com projetos em Lenin GPT, TovariX, Pesca Furiosa e mais.',
  keywords: [
    'desenvolvedor fullstack',
    'programador',
    'React',
    'Next.js',
    'Vue.js',
    'Node.js',
    'NestJS',
    'TypeScript',
    'portfólio',
    'desenvolvimento web',
    'frontend',
    'backend',
  ],
  authors: [{ name: 'gaqno' }],
  creator: 'gaqno',
  publisher: 'gaqno',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'gaqno development',
    title: 'gaqno development - Programador Fullstack',
    description:
      'Desenvolvedor Fullstack especializado em React, Next.js, Vue.js, Node.js e NestJS. Portfólio com projetos em Lenin GPT, TovariX, Pesca Furiosa e mais.',
    images: [
      {
        url: `${siteUrl}/img/profile.jpeg`,
        width: 1200,
        height: 630,
        alt: 'gaqno development - Programador Fullstack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gaqno development - Programador Fullstack',
    description:
      'Desenvolvedor Fullstack especializado em React, Next.js, Vue.js, Node.js e NestJS.',
    images: [`${siteUrl}/img/profile.jpeg`],
    creator: '@gaqno',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'gaqno',
  jobTitle: 'Desenvolvedor Fullstack',
  description:
    'Desenvolvedor Fullstack especializado em React, Next.js, Vue.js, Node.js e NestJS',
  url: siteUrl,
  sameAs: ['https://github.com/gaqno', 'https://linkedin.com/in/gaqno'],
  knowsAbout: [
    'React',
    'Next.js',
    'Vue.js',
    'Node.js',
    'NestJS',
    'TypeScript',
    'JavaScript',
    'Full Stack Development',
  ],
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${gaId}',{send_page_view:false});`}
            </Script>
          </>
        ) : null}
      </head>
      <body
        className={cn(
          'min-h-screen bg-background py-2 font-sans antialiased',
          fontSans.variable,
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
