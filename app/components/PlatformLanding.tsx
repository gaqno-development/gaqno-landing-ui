'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { Carousel } from '@/components/ui/carousel'
import { PLATFORM_PRODUCTS } from '@/app/constants/products'
import type { Dictionary } from '@/app/types/dictionary'

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

function StaggerItem({
  children,
  className,
  direction = 0,
}: {
  children: React.ReactNode
  className?: string
  direction?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const x = direction > 0 ? 24 : direction < 0 ? -24 : 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 32, x }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type PlatformLandingProps = {
  dict: Dictionary['platform']
  lang: string
}

export default function PlatformLanding({ dict, lang }: PlatformLandingProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const productItems = PLATFORM_PRODUCTS.map((p) => ({
    title: p.name,
    description: p.shortDescription,
    link: p.href ?? `#produto-${p.id}`,
    icon: p.icon,
  }))

  const basePath = `/${lang}`
  const linkHome = basePath
  const linkCustos = `${basePath}/custos`

  return (
    <div className="relative overflow-hidden bg-background text-foreground pt-14 space-y-24">
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
            <Link
              href={linkCustos}
              className="rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:-translate-y-0.5 transition"
            >
              {dict.hero.cta_primary}
            </Link>
            <a
              href="#produtos"
              className="rounded-full border border-foreground/30 px-5 py-3 text-sm font-medium hover:border-foreground transition"
            >
              {dict.hero.cta_secondary}
            </a>
          </div>
          {dict.hero.badges && dict.hero.badges.length > 0 && (
            <div className="flex flex-wrap gap-6 pt-2 text-sm text-muted-foreground">
              {dict.hero.badges.map((badge, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <div className="rounded-[32px] border border-foreground/10 bg-gradient-to-br from-primary/20 via-background to-primary/10 p-8 shadow-2xl">
            <p className="text-sm text-muted-foreground max-w-sm">
              {dict.products.description}
            </p>
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-50" />
          </div>
        </div>
      </section>

      <section id="produtos" className="relative max-w-6xl mx-auto px-4 pb-12">
        <SectionAnimation>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {dict.products.title}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-2">
                {dict.products.description}
              </h2>
            </div>
          </div>
          <HoverEffect items={productItems} className="mt-10" />
        </SectionAnimation>
        {dict.social_proof && (
          <SectionAnimation>
            <div
              id="por-que"
              className="mt-16 py-8 border-y border-foreground/10 text-center scroll-mt-24"
            >
              <p className="text-sm font-medium text-foreground">
                {dict.social_proof.title}
              </p>
              {dict.social_proof.subline && (
                <p className="text-sm text-muted-foreground mt-1">
                  {dict.social_proof.subline}
                </p>
              )}
            </div>
          </SectionAnimation>
        )}
        {dict.carousel && dict.carousel.items?.length > 0 && (
          <SectionAnimation>
            <div id="recursos" className="mt-16 py-12 px-4 scroll-mt-24">
              <Carousel
                items={dict.carousel.items}
                title={dict.carousel.title}
                intervalMs={5000}
                className="max-w-4xl mx-auto"
              />
            </div>
          </SectionAnimation>
        )}
      </section>

      {PLATFORM_PRODUCTS.map((product, index) => {
        const detail = dict.products.items?.[product.id]
        const isEven = index % 2 === 0
        const textDir = isEven ? -1 : 1
        const imageDir = isEven ? 1 : -1
        return (
          <section
            key={product.id}
            id={`produto-${product.id}`}
            className="relative max-w-6xl mx-auto px-4 py-16 scroll-mt-24"
          >
            <SectionAnimation>
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className={isEven ? '' : 'md:order-2'}>
                  <StaggerItem
                    direction={textDir}
                    className="flex items-center gap-3 mb-4"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Icon icon={product.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {product.name}
                    </h3>
                  </StaggerItem>
                  <StaggerItem direction={textDir} className="mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {detail?.description ?? product.shortDescription}
                    </p>
                  </StaggerItem>
                  {detail?.features && detail.features.length > 0 && (
                    <StaggerItem direction={textDir}>
                      <ul className="space-y-2">
                        {detail.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </StaggerItem>
                  )}
                  {detail?.usageExamples && detail.usageExamples.length > 0 && (
                    <StaggerItem direction={textDir} className="mt-6">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        {dict.products.usage_examples_label ??
                          'Exemplos de uso'}
                      </p>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        {detail.usageExamples.map((ex, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-primary">·</span>
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </StaggerItem>
                  )}
                  {detail?.testimonials && detail.testimonials.length > 0 && (
                    <StaggerItem direction={textDir} className="mt-6">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        {dict.products.testimonials_label ?? 'Depoimentos'}
                      </p>
                      <div className="space-y-3">
                        {detail.testimonials.map((t, i) => (
                          <blockquote
                            key={i}
                            className="border-l-2 border-primary/30 pl-3 py-1 text-sm text-muted-foreground italic"
                          >
                            &ldquo;{t.quote}
                            &rdquo;
                            <footer className="mt-1 not-italic text-xs text-foreground">
                              — {t.author}
                              {t.role ? `, ${t.role}` : ''}
                            </footer>
                          </blockquote>
                        ))}
                      </div>
                    </StaggerItem>
                  )}
                </div>
                <div className={isEven ? '' : 'md:order-1'}>
                  <StaggerItem direction={imageDir}>
                    <div className="rounded-2xl border border-foreground/10 bg-muted/30 overflow-hidden shadow-xl">
                      {product.image && !imageErrors[product.id] ? (
                        <Image
                          src={product.image}
                          alt={`${product.name} - interface`}
                          width={800}
                          height={500}
                          className="w-full h-auto object-cover"
                          onError={() =>
                            setImageErrors((prev) => ({
                              ...prev,
                              [product.id]: true,
                            }))
                          }
                        />
                      ) : (
                        <div className="aspect-video w-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-muted/50 to-primary/5 text-muted-foreground">
                          <div className="text-center p-8">
                            <Icon
                              icon={product.icon}
                              className="h-16 w-16 mx-auto mb-3 opacity-50"
                            />
                            <p className="text-sm font-medium">
                              {product.name}
                            </p>
                            <p className="text-xs mt-1 text-muted-foreground/80">
                              Screenshot
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </StaggerItem>
                </div>
              </div>
            </SectionAnimation>
          </section>
        )
      })}

      {dict.cta_banner && (
        <section className="relative w-full py-16 border-y border-foreground/10 bg-muted/30">
          <SectionAnimation>
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                {dict.cta_banner.title}
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                {dict.cta_banner.description}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={linkCustos}
                  className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition"
                >
                  {dict.cta_banner.cta_primary}
                </Link>
                <a
                  href="https://wa.me/5511991610328"
                  className="rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium hover:border-foreground transition"
                >
                  {dict.cta_banner.cta_secondary}
                </a>
              </div>
            </div>
          </SectionAnimation>
        </section>
      )}

      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <SectionAnimation>
          <div className="rounded-[32px] border border-foreground/15 bg-gradient-to-br from-slate-200/80 dark:from-slate-800/60 via-slate-500/40 dark:via-slate-700/40 to-foreground/20 p-10 md:p-14 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              {dict.cta.title}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {dict.cta.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={linkCustos}
                className="inline-block rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition"
              >
                {dict.cta.cta_pricing}
              </Link>
              {dict.cta.cta_contact && (
                <a
                  href="https://wa.me/5511991610328"
                  className="inline-block rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium hover:border-foreground transition"
                >
                  {dict.cta.cta_contact}
                </a>
              )}
            </div>
          </div>
        </SectionAnimation>
      </section>

      {dict.cta_final && (
        <section className="relative w-full py-14 md:py-20 bg-foreground text-background">
          <SectionAnimation>
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h3 className="text-2xl md:text-4xl font-semibold mb-6">
                {dict.cta_final.title}
              </h3>
              {dict.cta_final.description && (
                <p className="text-background/90 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  {dict.cta_final.description}
                </p>
              )}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={linkCustos}
                  className="rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition"
                >
                  {dict.cta_final.cta_pricing}
                </Link>
                <a
                  href="https://wa.me/5511991610328"
                  className="rounded-full border border-background/50 px-6 py-3 text-sm font-medium hover:bg-background/10 transition"
                >
                  {dict.cta_final.cta_contact}
                </a>
              </div>
            </div>
          </SectionAnimation>
        </section>
      )}

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
                  {dict.footer.quick_links.items.map((item, index) => {
                    const href =
                      !item.href || item.href === '/'
                        ? linkHome
                        : `${linkHome}${item.href}`
                    return (
                      <li key={index}>
                        <Link
                          href={href}
                          className="text-muted-foreground hover:text-foreground transition text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
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
                      href="https://wa.me/5511991610328"
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
