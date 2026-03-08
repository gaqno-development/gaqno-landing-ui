'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { PLANS } from '@/app/constants/pricing'
import type { Dictionary } from '@/app/types/dictionary'

type OmniDict = NonNullable<Dictionary['omnichannel']>

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

function OmniHero({ dict }: { dict: OmniDict }) {
  const [couponOpen, setCouponOpen] = useState(false)
  const [form, setForm] = useState({
    coupon: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    emailOptin: false,
    whatsappOptin: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  return (
    <section
      id="hero"
      className="relative max-w-6xl mx-auto px-4 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-start"
    >
      <div className="space-y-6 pt-4">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {dict.hero.tagline}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          {dict.hero.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {dict.hero.description}
        </p>
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          {dict.hero.trial_badge}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#form"
            className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 transition"
          >
            {dict.hero.cta_primary}
          </a>
          <a
            href="https://wa.me/5511991610328"
            className="rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium hover:border-foreground transition"
          >
            {dict.hero.cta_secondary}
          </a>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          {['WhatsApp', 'Instagram', 'E-mail', 'SMS', 'Webchat'].map((ch) => (
            <span
              key={ch}
              className="rounded-full border border-foreground/15 bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
            >
              {ch}
            </span>
          ))}
        </div>
      </div>

      <div id="form" className="rounded-2xl border border-foreground/10 bg-card p-6 shadow-xl space-y-4">
        <h2 className="text-lg font-semibold">{dict.form.submit}</h2>
        <button
          type="button"
          onClick={() => setCouponOpen((v) => !v)}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <Icon icon="mdi:tag-outline" className="h-4 w-4" />
          {dict.form.coupon_label}
        </button>
        {couponOpen && (
          <input
            name="coupon"
            value={form.coupon}
            onChange={handleChange}
            placeholder={dict.form.coupon_placeholder}
            className="w-full rounded-lg border border-foreground/20 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        )}
        {(
          [
            { name: 'name', label: dict.form.name_label, placeholder: dict.form.name_placeholder, type: 'text' },
            { name: 'email', label: dict.form.email_label, placeholder: dict.form.email_placeholder, type: 'email' },
            { name: 'phone', label: dict.form.phone_label, placeholder: dict.form.phone_placeholder, type: 'tel' },
            { name: 'company', label: dict.form.company_label, placeholder: dict.form.company_placeholder, type: 'text' },
            { name: 'password', label: dict.form.password_label, placeholder: dict.form.password_placeholder, type: 'password' },
          ] as const
        ).map((field) => (
          <div key={field.name} className="space-y-1">
            <label htmlFor={`omni-${field.name}`} className="text-xs font-medium text-muted-foreground">
              {field.label}
            </label>
            <input
              id={`omni-${field.name}`}
              name={field.name}
              type={field.type}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full rounded-lg border border-foreground/20 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        ))}
        <button
          type="button"
          className="w-full rounded-lg bg-foreground text-background py-3 text-sm font-semibold hover:-translate-y-0.5 transition"
        >
          {dict.form.submit}
        </button>
        <div className="space-y-2 pt-1">
          {[
            { name: 'emailOptin', label: dict.form.email_optin },
            { name: 'whatsappOptin', label: dict.form.whatsapp_optin },
          ].map((opt) => (
            <label key={opt.name} className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                name={opt.name}
                checked={form[opt.name as 'emailOptin' | 'whatsappOptin']}
                onChange={handleChange}
                className="rounded border-foreground/30 accent-primary"
              />
              {opt.label}
            </label>
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground/70 leading-relaxed">
          {dict.form.consent}
        </p>
      </div>
    </section>
  )
}

function OmniChannels({ dict }: { dict: OmniDict }) {
  return (
    <SectionAnimation>
      <section className="relative w-full py-16 border-y border-foreground/10 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">{dict.channels.title}</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">{dict.channels.subtitle}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {dict.channels.items.map((ch) => (
              <div
                key={ch.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-foreground/10 bg-card p-5 hover:border-primary/30 transition"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon icon={ch.icon} className="h-6 w-6" />
                </span>
                <p className="text-sm font-medium">{ch.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionAnimation>
  )
}

function OmniFeatures({ dict }: { dict: OmniDict }) {
  return (
    <SectionAnimation>
      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">{dict.features.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{dict.features.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.features.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-foreground/10 bg-card p-6 space-y-3 hover:border-primary/30 transition"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon icon={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button
            type="button"
            className="rounded-full border border-foreground/30 px-8 py-3 text-sm font-medium hover:border-foreground transition"
          >
            {dict.features.cta}
          </button>
        </div>
      </section>
    </SectionAnimation>
  )
}

function OmniHowItWorks({ dict }: { dict: OmniDict }) {
  return (
    <SectionAnimation>
      <section className="relative w-full py-20 border-y border-foreground/10 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">{dict.how_it_works.title}</h2>
          <p className="text-muted-foreground mb-14 max-w-lg mx-auto">{dict.how_it_works.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {dict.how_it_works.steps.map((step, i) => (
              <div key={step.number} className="relative space-y-4">
                {i < dict.how_it_works.steps.length - 1 && (
                  <span className="hidden md:block absolute top-5 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-foreground/10" />
                )}
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full border-2 border-primary text-primary font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionAnimation>
  )
}

function OmniPricing({ dict }: { dict: OmniDict }) {
  return (
    <SectionAnimation>
      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">{dict.pricing.title}</h2>
          <p className="text-muted-foreground">{dict.pricing.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border p-5 flex flex-col gap-4 transition ${
                plan.highlighted
                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                  : 'border-foreground/10 bg-card hover:border-foreground/20'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary text-background text-xs font-semibold px-3 py-1 whitespace-nowrap">
                  Mais Vendido
                </span>
              )}
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{plan.tagline}</p>
              </div>
              <div>
                <p className="text-xl font-bold">{plan.price}</p>
                <p className="text-xs text-muted-foreground">{plan.users}</p>
              </div>
              <button
                type="button"
                className={`w-full rounded-lg py-2 text-xs font-semibold transition hover:-translate-y-0.5 ${
                  plan.highlighted ? 'bg-primary text-background' : 'bg-foreground text-background'
                }`}
              >
                {plan.id === 'enterprise' ? dict.pricing.enterprise_cta : dict.pricing.plan_cta}
              </button>
              <div className="space-y-1 text-xs text-muted-foreground border-t border-foreground/10 pt-3">
                <p>{plan.interactionz}</p>
                <p>{plan.channelPackPrice} – {plan.channelPackNote}</p>
                <p className="font-medium text-foreground">Total: {plan.total}</p>
                {plan.totalNote && <p className="text-[11px]">{plan.totalNote}</p>}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          Preços em BRL. Pode haver custos adicionais de ativação por canal.{' '}
          <a href="#" className="underline hover:text-foreground">
            Ver tabela completa
          </a>
        </p>
      </section>
    </SectionAnimation>
  )
}

function OmniTestimonials({ dict }: { dict: OmniDict }) {
  return (
    <SectionAnimation>
      <section className="relative w-full py-20 border-y border-foreground/10 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            {dict.testimonials.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {dict.testimonials.items.map((item) => (
              <blockquote
                key={item.author}
                className="rounded-2xl border border-foreground/10 bg-card p-6 flex flex-col justify-between gap-6 hover:border-primary/20 transition"
              >
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer>
                  <p className="text-sm font-semibold">{item.author}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button
              type="button"
              className="rounded-full bg-foreground text-background px-10 py-3 text-sm font-semibold hover:-translate-y-0.5 transition"
            >
              {dict.testimonials.cta}
            </button>
          </div>
        </div>
      </section>
    </SectionAnimation>
  )
}

function OmniFooter({ dict }: { dict: OmniDict }) {
  return (
    <footer className="border-t border-foreground/10 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-semibold tracking-tight">Gaqno</p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition">
            {dict.footer.privacy_policy}
          </a>
          <a href="#" className="hover:text-foreground transition">
            {dict.footer.terms_of_use}
          </a>
        </div>
        <p className="text-xs text-muted-foreground">{dict.footer.copyright}</p>
      </div>
    </footer>
  )
}

export default function OmnichannelLanding({ dict }: { dict: OmniDict }) {
  return (
    <div className="relative overflow-hidden bg-background text-foreground pt-14">
      <OmniHero dict={dict} />
      <OmniChannels dict={dict} />
      <OmniFeatures dict={dict} />
      <OmniHowItWorks dict={dict} />
      <OmniPricing dict={dict} />
      <OmniTestimonials dict={dict} />
      <OmniFooter dict={dict} />
    </div>
  )
}
