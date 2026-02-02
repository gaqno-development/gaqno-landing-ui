'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect'
import Image from 'next/image'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import { GlobeClient } from './client/GlobeClient'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PROJECTS, PROJECT_THUMBNAILS } from '../constants/projects'
import type { Dictionary } from '../types/dictionary'

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

  const projects = PROJECTS.map((project) => ({
    title: project.title,
    link: project.link,
    thumbnail: project.thumbnail,
  }))

  const companies = PROJECTS.filter((p) => p.id !== 'lenin').map((project) => ({
    title: project.title,
    link: project.link,
    thumbnail: PROJECT_THUMBNAILS[project.id] || project.thumbnail,
  }))

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

  const projectTechs: Record<string, Array<{ icon: string; name: string }>> = {
    lenin: [
      { icon: 'mdi:vuejs', name: 'Vue 3' },
      { icon: 'mdi:nuxt', name: 'Nuxt 3' },
      { icon: 'mdi:graph', name: 'Neo4j' },
      { icon: 'mdi:head-snowflake-outline', name: 'LLM' },
    ],
    atech: [
      { icon: 'mdi:angular', name: 'Angular' },
      { icon: 'mdi:nodejs', name: 'Node.js' },
      { icon: 'mdi:database', name: 'PostgreSQL' },
    ],
    newcore: [
      { icon: 'mdi:angular', name: 'Angular' },
      { icon: 'mdi:react', name: 'React' },
      { icon: 'mdi:nestjs', name: 'NestJS' },
      { icon: 'mdi:database', name: 'PostgreSQL' },
      { icon: 'mdi:api', name: 'RESTful API' },
      { icon: 'mdi:cloud', name: 'Vercel' },
      { icon: 'mdi:tailwind', name: 'TailwindCSS' },
    ],
    ffid: [
      { icon: 'mdi:vuejs', name: 'Vue 3' },
      { icon: 'mdi:nuxt', name: 'Nuxt 3' },
      { icon: 'mdi:database', name: 'PostgreSQL' },
    ],
    rede_ancora: [
      { icon: 'mdi:angular', name: 'Angular' },
      { icon: 'mdi:react', name: 'React' },
      { icon: 'mdi:nestjs', name: 'NestJS' },
    ],
    ambev: [
      { icon: 'mdi:angular', name: 'Angular' },
      { icon: 'mdi:react', name: 'React' },
      { icon: 'mdi:nestjs', name: 'NestJS' },
    ],
  }

  const getProjectDescription = (projectId: string): string => {
    const descriptions: Record<string, string> = {
      lenin: dict.work.items.lenin.description,
      atech: dict.work.items.atech.description,
      newcore: dict.work.items.newcore.description,
      ffid: dict.work.items.ffid.description,
      rede_ancora: dict.work.items.rede_ancora.description,
      ambev: dict.work.items.ambev.description,
    }
    return descriptions[projectId] || ''
  }

  const workDetails = PROJECTS.map((project) => ({
    title: project.title,
    href: project.href,
    techs: projectTechs[project.id] || [],
    description: getProjectDescription(project.id),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-slate-900 via-slate-800 to-black">
        <Image
          src={project.thumbnail}
          width={320}
          height={320}
          className="h-full w-full object-cover"
          alt={project.title}
        />
      </div>
    ),
  }))

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
            <div className="space-y-6 p-6">
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
              <h3 className="text-xl font-semibold">
                {dict.about.background.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {dict.about.background.content}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                {dict.about.education.title}
              </h3>
              <div className="space-y-4">
                {dict.about.education.items.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-foreground/20 pl-4"
                  >
                    <div className="font-semibold">{item.institution}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.degree}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {item.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {dict.about.presentation.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {dict.about.presentation.description}
              </p>
              <div className="rounded-lg border border-foreground/10 bg-secondary/40 overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/1GDTCfr21r7k7aFgFhPQPErD7Bm0JjRD2/preview"
                  className="w-full h-[400px] md:h-[500px]"
                  allow="autoplay"
                  title={dict.about.presentation.title}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {dict.about.presentation.date}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              {dict.about.achievements.title}
            </h3>
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
                    <h3 className="text-xl font-semibold mb-1">
                      {item.company}
                    </h3>
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
        className="relative max-w-6xl mx-auto px-4 pb-16 flex flex-col gap-6"
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
        </SectionAnimation>
      </section>

      <footer className="relative border-t border-foreground/10 mt-24 pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <SectionAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">
                    {dict.footer.tagline}
                  </p>
                  <h3 className="text-2xl font-semibold mb-3">
                    {dict.footer.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {dict.footer.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wider">
                  {dict.footer.quick_links.title}
                </h4>
                <ul className="space-y-3">
                  {dict.footer.quick_links.items.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wider">
                  {dict.footer.contact_info.title}
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={`mailto:${dict.footer.contact_info.email}`}
                      className="text-muted-foreground hover:text-foreground transition text-sm"
                    >
                      {dict.footer.contact_info.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/5511991610328`}
                      className="text-muted-foreground hover:text-foreground transition text-sm"
                    >
                      {dict.footer.contact_info.phone}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wider">
                  {dict.footer.social.title}
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/gaqno"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gaqno/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20.25 2h-16.5C2.56 2 2 2.56 2 3.25v16.5C2 20.44 2.56 21 3.25 21h16.5c.69 0 1.25-.56 1.25-1.25v-16.5C21 2.56 20.44 2 19.75 2zM8.5 19h-3v-9h3v9zm-1.5-10.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm11 10.5h-3v-5.44c0-1.31-.25-2.56-1.81-2.56-1.81 0-2.09 1.41-2.09 2.56v5.44h-3v-9h3v1.44c.38-.59 1.31-1.44 2.81-1.44 2.31 0 4.19 1.5 4.19 4.69v4.31z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                {dict.footer.copyright}
              </p>
              <p className="text-sm text-muted-foreground">
                {dict.contact.footer_note}
              </p>
            </div>
          </SectionAnimation>
        </div>
      </footer>
    </div>
  )
}
