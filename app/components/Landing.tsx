'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect'
import Image from 'next/image'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import { GlobeClient } from './client/GlobeClient'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Dictionary } from '../types/dictionary'

const LeninGptImg = '/img/lenin-gpt.webp'
const NewcoreLandingImg = '/img/newcore_landing.webp'
const FFIDImg = '/img/ffidLogo.webp'
const NewcoreImg = '/img/newcore.webp'
const RedeAncoraImg = '/img/rede-ancora.webp'
const AtechImg = '/img/atech.webp'
const AmbevImg = '/img/ambev.webp'

function SectionAnimation({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Landing({ dict }: { dict: Dictionary['landing'] }) {
  const capabilities = [
    {
      icon: 'mdi:react',
      title: dict.expertise.capabilities[0].title,
      description: dict.expertise.capabilities[0].description,
      link: '#contact',
    },
    {
      icon: 'mdi:nodejs',
      title: dict.expertise.capabilities[1].title,
      description: dict.expertise.capabilities[1].description,
      link: '#contact',
    },
    {
      icon: 'mdi:database',
      title: dict.expertise.capabilities[2].title,
      description: dict.expertise.capabilities[2].description,
      link: '#contact',
    },
    {
      icon: 'mdi:api',
      title: dict.expertise.capabilities[3].title,
      description: dict.expertise.capabilities[3].description,
      link: '#contact',
    },
    {
      icon: 'mdi:cloud',
      title: dict.expertise.capabilities[4].title,
      description: dict.expertise.capabilities[4].description,
      link: '#contact',
    },
    {
      icon: 'mdi:head-snowflake-outline',
      title: dict.expertise.capabilities[5].title,
      description: dict.expertise.capabilities[5].description,
      link: '#contact',
    },
    {
      icon: 'mdi:git',
      title: dict.expertise.capabilities[6].title,
      description: dict.expertise.capabilities[6].description,
      link: '#contact',
    },
    {
      icon: 'mdi:motion-play',
      title: dict.expertise.capabilities[7].title,
      description: dict.expertise.capabilities[7].description,
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
    },
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
    },
  ]

  const approach = [
    {
      title: dict.approach.items[0].title,
      href: 'descoberta',
      description: dict.approach.items[0].description,
      content: (
        <div className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-end p-6 text-white text-lg font-semibold">
          {dict.approach.items[0].highlight}
        </div>
      ),
    },
    {
      title: dict.approach.items[1].title,
      href: 'entrega',
      description: dict.approach.items[1].description,
      content: (
        <div className="h-full w-full bg-gradient-to-br from-slate-200 via-white to-slate-100 text-black flex items-end p-6 text-lg font-semibold">
          {dict.approach.items[1].highlight}
        </div>
      ),
    },
    {
      title: dict.approach.items[2].title,
      href: 'motion',
      description: dict.approach.items[2].description,
      content: (
        <div className="h-full w-full bg-gradient-to-br from-indigo-600 via-sky-500 to-cyan-400 flex items-end p-6 text-white text-lg font-semibold">
          {dict.approach.items[2].highlight}
        </div>
      ),
    },
    {
      title: dict.approach.items[3].title,
      href: 'motion-avancado',
      description: dict.approach.items[3].description,
      content: (
        <div className="h-full w-full bg-gradient-to-br from-foreground via-black to-foreground flex items-end p-6 text-white text-lg font-semibold">
          {dict.approach.items[3].highlight}
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
        { icon: 'mdi:graph', name: 'Neo4j' },
        { icon: 'mdi:head-snowflake-outline', name: 'LLM' },
      ],
      description: dict.work.items.lenin.description,
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
      ],
      description: dict.work.items.atech.description,
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
      description: dict.work.items.newcore.description,
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
      ],
      description: dict.work.items.ffid.description,
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-slate-900 via-slate-800 to-black">
          <Image
            src={FFIDImg}
            width={320}
            height={320}
            className="h-full w-full object-cover"
            alt="FFID"
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
      ],
      description: dict.work.items.rede_ancora.description,
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
      ],
      description: dict.work.items.ambev.description,
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
      <section
        id="hero"
        className="relative max-w-6xl mx-auto px-4 pt-16 pb-12 grid md:grid-cols-2 gap-12 items-end"
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {dict.hero.tagline}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              {dict.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {dict.hero.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:-translate-y-0.5 transition"
            >
              {dict.hero.cta_work}
            </a>
            <a
              href="#approach"
              className="rounded-full border border-foreground/30 px-5 py-3 text-sm font-medium hover:border-foreground transition"
            >
              {dict.hero.cta_process}
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {dict.hero.available}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[32px] border border-foreground/10 bg-gradient-to-br from-foreground to-black text-background p-8 shadow-2xl">
            <div className="flex items-center justify-between text-sm mb-6">
              <span className="uppercase tracking-[0.2em] text-white/70">
                {dict.hero.profile.title}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-white">
                {dict.hero.profile.name}
              </span>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="https://github.com/gaqno.png"
                alt={dict.hero.profile.name}
                width={80}
                height={80}
                className="rounded-full border-2 border-white/20"
              />
              <div className="flex-1">
                <div className="text-white font-semibold text-lg">
                  {dict.hero.profile.name}
                </div>
                <div className="text-white/70 text-sm">
                  {dict.hero.profile.role}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="text-white/80">
                  {dict.hero.profile.experience}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-cyan-400" />
                <span className="text-white/80">{dict.hero.profile.stack}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-white/60" />
                <span className="text-white/80">
                  {dict.hero.profile.skills}
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent blur-3xl opacity-50" />
        </div>
      </section>

      <section id="sobre" className="relative max-w-6xl mx-auto px-4 pb-20">
        <SectionAnimation>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              {dict.about.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              {dict.about.title}
            </h2>
          </div>
          <div className="text-muted-foreground max-w-xl">
            {dict.about.description}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{dict.about.background.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {dict.about.background.content}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{dict.about.education.title}</h3>
            <div className="space-y-4">
              {dict.about.education.items.map((item, index) => (
                <div key={index} className="border-l-2 border-foreground/20 pl-4">
                  <div className="font-semibold">{item.institution}</div>
                  <div className="text-sm text-muted-foreground">{item.degree}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.period}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{dict.about.achievements.title}</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {dict.about.achievements.items.map((achievement, index) => (
              <div
                key={index}
                className="rounded-lg border border-foreground/10 bg-secondary/40 p-4"
              >
                <div className="font-semibold mb-2">{achievement.title}</div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
          </div>
        </SectionAnimation>
      </section>

      <section id="caminho" className="relative max-w-6xl mx-auto px-4 pb-20">
        <SectionAnimation>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              {dict.experience.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              {dict.experience.title}
            </h2>
          </div>
          <div className="text-muted-foreground max-w-xl">
            {dict.experience.description}
          </div>
          </div>
        <div className="space-y-8">
          {dict.experience.items.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-foreground/10 bg-secondary/40 p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.company}</h3>
                  <div className="text-sm font-medium text-muted-foreground mb-2">
                    {item.role}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.period} · {item.location}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold mb-2">
                    {dict.experience.labels.responsibilities}
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">
                    {dict.experience.labels.technologies}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-foreground/20 bg-background/50 px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </SectionAnimation>
      </section>

      <section id="expertise" className="relative max-w-6xl mx-auto px-4 pb-20">
        <SectionAnimation>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {dict.expertise.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-2">
                {dict.expertise.title}
              </h2>
            </div>
            <div className="text-muted-foreground max-w-xl">
              {dict.expertise.description}
            </div>
          </div>
          <HoverEffect items={capabilities} />
        </SectionAnimation>
      </section>

      <section id="approach" className="relative max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          {dict.approach.title}
        </h2>
        <StickyScroll id="approach" content={approach} />
      </section>

      <section id="work" className="relative pb-10">
        <HeroParallax
          id="work"
          title={dict.work.title}
          description={dict.work.description}
          products={projects}
        />
      </section>

      <section id="cases" className="relative max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          {dict.work.details_title}
        </h2>
        <StickyScroll id="cases" content={workDetails} />
      </section>

      <section
        id="credentials"
        className="relative max-w-6xl mx-auto px-4 pb-20"
      >
        <SectionAnimation>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 order-2 lg:order-1">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {dict.credentials.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">
                {dict.credentials.title}
              </h2>
              <p className="text-muted-foreground">
                {dict.credentials.description}
              </p>
              <a
                href="https://cert.efset.org/Nf7zLt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-3 text-sm font-medium hover:border-foreground transition"
              >
                {dict.credentials.cta_efset}
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
            <div className="rounded-3xl border border-foreground/10 bg-secondary/40 backdrop-blur p-4 order-1 lg:order-2">
              <GlobeClient />
            </div>
          </div>
        </SectionAnimation>
      </section>

      <section
        id="contact"
        className="relative max-w-6xl mx-auto px-4 pb-24 flex flex-col gap-6"
      >
        <SectionAnimation>
          <div className="rounded-[32px] border border-foreground/15 bg-gradient-to-br from-slate-200/80 via-slate-500/60 to-foreground text-foreground p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-foreground/70">
                {dict.contact.tagline}
              </p>
              <h3 className="text-3xl md:text-4xl font-semibold">
                {dict.contact.title}
              </h3>
              <p className="text-foreground/80 max-w-xl">
                {dict.contact.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:gabriel.aquino@outlook.com"
                className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition shadow-lg shadow-black/10"
              >
                {dict.contact.cta_email}
              </a>
              <a
                href="https://wa.me/5511991610328"
                className="rounded-full border border-foreground/30 text-foreground px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition bg-white/10 backdrop-blur"
              >
                {dict.contact.cta_whatsapp}
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
            {dict.contact.footer_note}
          </div>
        </SectionAnimation>
      </section>
    </div>
  )
}
