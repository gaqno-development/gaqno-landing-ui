'use client'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Globe } from './Globe'
import PescaFuriosaImg from '@/public/img/pesca-furiosa.png'
import LeninGptImg from '@/public/img/lenin-gpt.png'
import TovariXImg from '@/public/img/tovarix.png'
import MarvelDashboardImg from '@/public/img/MarvelDashboard.png'
import NewcoreLandingImg from '@/public/img/newcore_landing.png'
import FFIDImg from '@/public/img/ffidLogo.png'
import NewcoreImg from '@/public/img/newcore.png'
import RedeAncoraImg from '@/public/img/rede-ancora.jpg'
import SparkImg from '@/public/img/spark.gif'
import AtechImg from '@/public/img/atech.png'
import AmbevImg from '@/public/img/ambev.png'

export default function Landing() {
  const capabilities = [
    {
      icon: 'mdi:react',
      title: 'Interfaces',
      description: 'React, Next.js e animações suaves para experiências premium.',
      link: '#contact',
    },
    {
      icon: 'mdi:nodejs',
      title: 'Plataformas',
      description: 'APIs sólidas com Node, NestJS e bases de dados afinadas.',
      link: '#contact',
    },
    {
      icon: 'mdi:database',
      title: 'Banco de dados',
      description: 'SQL e NoSQL para armazenar e recuperar dados de forma eficiente.',
      link: '#contact',
    },
    {
      icon: 'mdi:api',
      title: 'API',
      description: 'APIs sólidas com Node, NestJS e bases de dados afinadas.',
      link: '#contact',
    },
    {
      icon: 'mdi:cloud',
      title: 'Cloud',
      description: 'Infra escalável em Vercel, AWS e contêineres bem cuidados.',
      link: '#contact',
    },
    {
      icon: 'mdi:head-snowflake-outline',
      title: 'AI e automação',
      description: 'Fluxos com OpenAI e pipelines que reduzem passos humanos.',
      link: '#contact',
    },
    {
      icon: 'mdi:git',
      title: 'Entrega',
      description: 'Repos limpos, CI/CD previsível e versionamento impecável.',
      link: '#contact', 
    },
    {
      icon: 'mdi:motion-play',
      title: 'Motion',
      description: 'Transições, parallax e microinterações que contam história.',
      link: '#contact',
    },
  ]

  const projects = [
    {
      title: 'Lenin GPT',
      link: 'https://lenin.gaqno.com.br',
      thumbnail: LeninGptImg,
    },
    {
      title: 'NewCore',
      link: 'https://www.newcore.com.br',
      thumbnail: NewcoreLandingImg,
    },
    {
      title: 'FFID',
      link: 'https://www.ffid.com.br',
      thumbnail: FFIDImg,
    },
    {
      title: 'Rede Ancora',
      link: 'https://www.redeancora.com.br',
      thumbnail: RedeAncoraImg,
    },
    {
      title: 'ATECH',
      link: 'https://www.atech.com.br',
      thumbnail: AtechImg,
    },
    {
      title: 'Ambev',
      link: 'https://www.ambev.com.br',
      thumbnail: AmbevImg,
    }
  ]

  const companies = [
    {
      title: 'Newcore',
      link: 'https://www.newcore.com.br',
      thumbnail: NewcoreImg,
    },
    {
      title: 'FFID',
      link: 'https://www.ffid.com.br',
      thumbnail: FFIDImg,
    },
    {
      title: 'Rede Ancora',
      link: 'https://www.redeancora.com.br',
      thumbnail: RedeAncoraImg,
    },
    {
      title: 'ATECH',
      link: 'https://www.atech.com.br',
      thumbnail: AtechImg,
    },
    {
      title: 'Ambev',
      link: 'https://www.ambev.com.br',
      thumbnail: AmbevImg,
    }
  ]

  const approach = [
    {
      title: 'Arquitetura sob medida',
      href: 'descoberta',
      description:
        'Mapeio domínios, defino limites claros e escolho a pilha certa para evitar acoplamentos e retrabalho.',
      content: (
        <div className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-end p-6 text-white text-lg font-semibold">
          Estruturas que sustentam o produto por anos
        </div>
      ),
    },
    {
      title: 'Entrega contínua',
      href: 'entrega',
      description:
        'CI/CD previsível, feature flags e monitoração ativa para lançar sem ruído, mesmo em jornadas longas.',
      content: (
        <div className="h-full w-full bg-gradient-to-br from-slate-200 via-white to-slate-100 text-black flex items-end p-6 text-lg font-semibold">
          Lançamentos que preservam a calma do time
        </div>
      ),
    },
    {
      title: 'Performance e UX real',
      href: 'motion',
      description:
        'Core Web Vitals, acessibilidade e journeys enxutas para conversões mais altas e menos suporte.',
      content: (
        <div className="h-full w-full bg-gradient-to-br from-indigo-600 via-sky-500 to-cyan-400 flex items-end p-6 text-white text-lg font-semibold">
          Ritmo rápido sem sacrificar clareza
        </div>
      ),
    },
    {
      title: 'Motion com propósito',
      href: 'motion-avancado',
      description:
        'Interações finas, parallax e microanimações que guiam atenção e reforçam a marca sem distrair.',
      content: (
        <div className="h-full w-full bg-gradient-to-br from-foreground via-black to-foreground flex items-end p-6 text-white text-lg font-semibold">
          Movimento a serviço da narrativa
        </div>
      ),
    },
  ]

  const workDetails = [
    {
      title: 'Lenin GPT',
      href: 'lenin-gpt',
      techs: [
        { icon: 'mdi:vuejs', name: 'Vue 3' },
        { icon: 'mdi:nuxt', name: 'Nuxt 3' },
        { icon: 'mdi:head-snowflake-outline', name: 'OpenAI' },
        { icon: 'mdi:tailwind', name: 'TailwindCSS' },
      ],
      description:
        'Chatbot afinado com personalidade e fluxo natural, entregando respostas claras sem engasgar.',
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-slate-900 via-slate-800 to-black">
          <Image
            src={LeninGptImg}
            width={320}
            height={320}
            className="h-full w-full object-cover"
            alt="Lenin GPT"
          />
        </div>
      ),
    },
    {
      title: 'ATECH',
      href: 'atech',
      techs: [
        { icon: 'mdi:angular', name: 'Angular' },
        { icon: 'mdi:nodejs', name: 'Node.js' },
        { icon: 'mdi:database', name: 'PostgreSQL' },
        { icon: 'mdi:api', name: 'RESTful API' },
        { icon: 'mdi:cloud', name: 'Cloudflare' },
      ],
      description:
        'Projeto de acompanhamento de projetos e gestão de equipe.',
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-indigo-600 via-sky-500 to-cyan-400">
          <Image
            src={AtechImg}
            width={320}
            height={320}
            className="h-full w-full object-cover"
            alt="ATECH"
          />
        </div>
      ),
    },
    {
      title: 'NewCore',
      href: 'newcore',
      techs: [
        { icon: 'mdi:angular', name: 'Angular' },
        { icon: 'mdi:react', name: 'React' },
        { icon: 'mdi:nestjs', name: 'NestJS' },
        { icon: 'mdi:database', name: 'PostgreSQL' },
        { icon: 'mdi:api', name: 'RESTful API' },
        { icon: 'mdi:cloud', name: 'Vercel' },
        { icon: 'mdi:tailwind', name: 'TailwindCSS' },
      ],
      description:
        'E-commerce com CMS e integrações para catálogo vivo e checkouts rápidos.',
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-indigo-600 via-sky-500 to-cyan-400">
          <Image
            src={NewcoreLandingImg}
            width={320}
            height={320}
            className="h-full w-full object-cover"
            alt="NewCore"
          />
        </div>
      ),
    },
    {
      title: 'FFID',
      href: 'ffid',
      techs: [
        { icon: 'mdi:vuejs', name: 'Vue 3' },
        { icon: 'mdi:nuxt', name: 'Nuxt 3' },
        { icon: 'mdi:database', name: 'PostgreSQL' },
        { icon: 'mdi:api', name: 'RESTful API' },
        { icon: 'mdi:cloud', name: 'Vercel' },
        { icon: 'mdi:tailwind', name: 'TailwindCSS' },
      ],
      description:
        'Site institucional com CMS e integrações para catálogo vivo e checkouts rápidos.',
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-slate-900 via-slate-800 to-black">
          <Image
            src={FFIDImg}
            width={320}
            height={320}
            className="h-full w-full object-cover"
            alt='FFID'
          />
        </div>
      ),
    },
    {
      title: 'Rede Ancora',
      href: 'rede-ancora',
      techs: [
        { icon: 'mdi:angular', name: 'Angular' },
        { icon: 'mdi:react', name: 'React' },
        { icon: 'mdi:nestjs', name: 'NestJS' },
        { icon: 'mdi:database', name: 'PostgreSQL' },
        { icon: 'mdi:api', name: 'RESTful API' },
        { icon: 'mdi:cloud', name: 'Vercel' },
        { icon: 'mdi:tailwind', name: 'TailwindCSS' },
      ],
      description:
        'Site institucional com CMS e integrações para catálogo vivo e checkouts rápidos.',
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-slate-900 via-slate-800 to-black">
          <Image
            src={RedeAncoraImg}
            width={320}
            height={320}
            className="h-full w-full object-cover"
            alt="Rede Ancora"
          />
        </div>
      ),
    },
    {
      title: 'Ambev',
      href: 'ambev',
      techs: [
        { icon: 'mdi:angular', name: 'Angular' },
        { icon: 'mdi:react', name: 'React' },
        { icon: 'mdi:nestjs', name: 'NestJS' },
        { icon: 'mdi:database', name: 'PostgreSQL' },
        { icon: 'mdi:api', name: 'RESTful API' },
        { icon: 'mdi:cloud', name: 'Vercel' },
        { icon: 'mdi:tailwind', name: 'TailwindCSS' },
      ],
      description:
        'Site institucional com CMS e integrações para catálogo vivo e checkouts rápidos.',
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-slate-900 via-slate-800 to-black">
          <Image
            src={AmbevImg}
            width={320}
            height={320}
            className="h-full w-full object-cover"
            alt="Ambev"
          />
        </div>
      ),
    },
  ]

  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0">
        <BackgroundBeams />
      </div>

      <section
        id="hero"
        className="relative max-w-6xl mx-auto px-4 pt-16 pb-12 grid md:grid-cols-2 gap-12 items-end"
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Fullstack · Produto · Motion
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight"
            >
              Software sereno para ideias ambiciosas.
            </motion.h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Experiências digitais com estética precisa, copy enxuta e
              entregas seguras. Do conceito à produção, sem ruído.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:-translate-y-0.5 transition"
            >
              Ver trabalhos
            </a>
            <a
              href="#approach"
              className="rounded-full border border-foreground/30 px-5 py-3 text-sm font-medium hover:border-foreground transition"
            >
              Como entrego
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Disponível para novos projetos
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-[32px] border border-foreground/10 bg-gradient-to-br from-foreground to-black text-background p-8 shadow-2xl">
            <div className="flex items-center justify-between text-sm">
              <span className="uppercase tracking-[0.2em] text-white/70">
                Perfil
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-white">
                Gabriel Aquino
              </span>
            </div>
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="text-white/80">
                  5+ anos entregando produtos que encantam e escalam
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-cyan-400" />
                <span className="text-white/80">
                  React, Next.js, Vue, Node, NestJS, OpenAI, GraphQL
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-white/60" />
                <span className="text-white/80">
                  Motion, microinterações e copy alinhada à marca
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent blur-3xl opacity-50" />
        </motion.div>
      </section>

      <section id="expertise" className="relative max-w-6xl mx-auto px-4 pb-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              Precisão técnica com estética de marca.
            </h2>
          </div>
          <div className="text-muted-foreground max-w-xl">
            Pilha moderna, decisão baseada em dados e movimento intencional para
            uma jornada suave do usuário.
          </div>
        </div>
        <HoverEffect items={capabilities} />
      </section>

      <section id="approach" className="relative max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Uma história guiada ao rolar.
        </h2>
        <StickyScroll
          id="approach"
          content={approach}
        />
      </section>

      <section id="work" className="relative pb-10">
        <HeroParallax
          id="work"
          title="Projetos com propósito"
          description="Experiências digitais que misturam clareza, movimento e execução sólida."
          products={projects}
        />
      </section>

      <section id="cases" className="relative max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Detalhes que sustentam a confiança.
        </h2>
        <StickyScroll id="cases" content={workDetails} />
      </section>

      <section
        id="credentials"
        className="relative max-w-6xl mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-12"
      >
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Alcance
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Projetos rodando em múltiplos fusos, sempre em inglês avançado.
          </h2>
          <p className="text-muted-foreground">
            Pronto para liderar squads internacionais, conduzir cerimônias e
            apresentar resultados com clareza.
          </p>
          <a
            href="https://cert.efset.org/Nf7zLt"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-3 text-sm font-medium hover:border-foreground transition"
          >
            Ver certificado EF SET C2
          </a>
          <div className="flex flex-wrap gap-3">
            {companies.map((company) => (
              <div
                key={company.title}
                className="flex items-center gap-3 rounded-full border border-foreground/10 px-4 py-2"
              >
                <Image
                  src={company.thumbnail}
                  alt={company.title}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="text-sm">
                  <div className="font-semibold">{company.title}</div>
                  <a
                    href={company.link}
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    {company.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-foreground/10 bg-secondary/40 backdrop-blur p-4">
          <Globe />
        </div>
      </section>

      <section
        id="contact"
        className="relative max-w-6xl mx-auto px-4 pb-24 flex flex-col gap-6"
      >
        <div className="rounded-[32px] border border-foreground/15 bg-gradient-to-br from-slate-200/80 via-slate-500/60 to-foreground text-foreground p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-foreground/70">
                Próximo passo
              </p>
              <h3 className="text-3xl md:text-4xl font-semibold">
                Vamos construir algo notável.
              </h3>
              <p className="text-foreground/80 max-w-xl">
                Produtos que soam modernos, suaves e confiáveis. Conte a visão e
                eu orquestro a entrega.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:gabriel.aquino@outlook.com"
                className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition shadow-lg shadow-black/10"
              >
                Escrever agora
              </a>
              <a
                href="https://wa.me/5511991610328"
                className="rounded-full border border-foreground/30 text-foreground px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition bg-white/10 backdrop-blur"
              >
                Falar no WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/gaqno/"
                className="rounded-full border border-foreground/30 text-foreground px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition bg-white/10 backdrop-blur"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Image
            src={SparkImg}
            alt="Spark"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
          Prazo apertado? Vamos priorizar o essencial e lançar com elegância.
        </div>
      </section>
    </div>
  )
}
