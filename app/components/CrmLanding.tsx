'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import type { Dictionary, CrmPlan } from '@/app/types/dictionary'

type CrmDict = NonNullable<Dictionary['crm']>

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

function CrmHero({ dict }: { dict: CrmDict }) {
  const [couponOpen, setCouponOpen] = useState(false)
  const [form, setForm] = useState({
    coupon: 'gaqno_30dias',
    name: '',
    email: '',
    phone: '',
    cnpj: '',
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
      </div>

      <div className="rounded-2xl border border-foreground/10 bg-card p-6 shadow-xl space-y-4">
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
            { name: 'cnpj', label: dict.form.cnpj_label, placeholder: dict.form.cnpj_placeholder, type: 'text' },
            { name: 'password', label: dict.form.password_label, placeholder: dict.form.password_placeholder, type: 'password' },
          ] as const
        ).map((field) => (
          <div key={field.name} className="space-y-1">
            <label htmlFor={`crm-${field.name}`} className="text-xs font-medium text-muted-foreground">
              {field.label}
            </label>
            <input
              id={`crm-${field.name}`}
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
          <p className="text-xs text-muted-foreground">Conteúdos e dicas sobre o uso do sistema</p>
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

function CrmFeatures({ dict }: { dict: CrmDict }) {
  return (
    <SectionAnimation>
      <section className="relative max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-3">
          {dict.features.title}
        </h2>
        <p className="text-center text-sm text-muted-foreground mb-10">
          Confira algumas das principais funcionalidades:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {dict.features.items.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 rounded-xl border border-foreground/10 bg-muted/30 p-4 hover:border-primary/30 transition"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Icon icon={item.icon} className="h-5 w-5" />
              </span>
              <p className="text-sm leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="button"
            className="rounded-full bg-foreground text-background px-8 py-3 text-sm font-medium hover:-translate-y-0.5 transition"
          >
            {dict.features.cta}
          </button>
        </div>
      </section>
    </SectionAnimation>
  )
}

function CrmChannels({ dict }: { dict: CrmDict }) {
  return (
    <SectionAnimation>
      <section className="relative w-full py-16 border-y border-foreground/10 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-10">
            {dict.channels.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {dict.channels.items.map((channel) => (
              <div
                key={channel.title}
                className="rounded-2xl border border-foreground/10 bg-card p-6 space-y-3 hover:border-primary/30 transition"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon icon={channel.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-semibold text-lg">{channel.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {channel.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="rounded-full border border-foreground/30 px-8 py-3 text-sm font-medium hover:border-foreground transition"
            >
              {dict.channels.cta}
            </button>
          </div>
        </div>
      </section>
    </SectionAnimation>
  )
}

function CrmEcosystem({ dict }: { dict: CrmDict }) {
  return (
    <SectionAnimation>
      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center mb-2">
          {dict.ecosystem.tagline}
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-3">
          {dict.ecosystem.title}
        </h2>
        <p className="text-center text-muted-foreground mb-4 max-w-xl mx-auto">
          {dict.ecosystem.description}
        </p>
        <div className="flex justify-center mb-12">
          <button
            type="button"
            className="rounded-full bg-foreground text-background px-8 py-3 text-sm font-medium hover:-translate-y-0.5 transition"
          >
            {dict.ecosystem.cta}
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.ecosystem.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-foreground/10 bg-card p-6 space-y-3 hover:border-primary/30 transition"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon icon={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SectionAnimation>
  )
}

function PlanCard({
  plan,
  billing,
  cta,
}: {
  plan: CrmPlan
  billing: 'monthly' | 'annual'
  cta: string
}) {
  const price = billing === 'annual' ? plan.price_annual : plan.price_monthly
  const isPopular = plan.id === 'construa'

  return (
    <div
      className={`relative rounded-2xl border p-6 flex flex-col gap-4 transition ${
        isPopular
          ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
          : 'border-foreground/10 bg-card hover:border-foreground/20'
      }`}
    >
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary text-background text-xs font-semibold px-3 py-1">
          Popular
        </span>
      )}
      <div>
        <h3 className="font-semibold text-lg">{plan.name}</h3>
        <p className="text-xs text-muted-foreground mt-1">{plan.subtitle}</p>
      </div>
      <div className="flex items-end gap-1">
        <span className="text-3xl font-bold">R$ {price}</span>
        <span className="text-sm text-muted-foreground pb-1">/mês</span>
      </div>
      {billing === 'annual' && (
        <p className="text-xs text-primary -mt-2">
          Economize R$ {plan.annual_savings} no ano
        </p>
      )}
      <button
        type="button"
        className={`w-full rounded-lg py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 ${
          isPopular
            ? 'bg-primary text-background'
            : 'bg-foreground text-background'
        }`}
      >
        {cta}
      </button>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            {f}
          </li>
        ))}
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
          Anúncios: {plan.ads_limit}
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
          Consulta de dados: {plan.data_history}
        </li>
      </ul>
      {plan.highlight_features.length > 0 && (
        <div className="border-t border-foreground/10 pt-4 space-y-2">
          {plan.highlight_features.map((f) => (
            <p key={f} className="flex items-center gap-2 text-xs text-foreground">
              <Icon icon="mdi:check-circle-outline" className="h-4 w-4 text-primary shrink-0" />
              {f}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

function CrmPricing({ dict }: { dict: CrmDict }) {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('annual')

  return (
    <SectionAnimation>
      <section className="relative w-full py-20 bg-muted/20 border-y border-foreground/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            {dict.pricing.title}
          </h2>
          <p className="text-center text-sm text-muted-foreground mb-8">
            {dict.pricing.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 mb-12">
            {(['monthly', 'annual'] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setBilling(mode)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  billing === mode
                    ? 'bg-foreground text-background'
                    : 'border border-foreground/20 hover:border-foreground/40'
                }`}
              >
                {mode === 'monthly' ? dict.pricing.toggle_monthly : dict.pricing.toggle_annual}
                {mode === 'annual' && (
                  <span className="ml-2 text-xs text-primary font-semibold">
                    {dict.pricing.annual_badge}
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.pricing.plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} billing={billing} cta={dict.pricing.plan_cta} />
            ))}
          </div>
        </div>
      </section>
    </SectionAnimation>
  )
}

function CrmTestimonials({ dict }: { dict: CrmDict }) {
  return (
    <SectionAnimation>
      <section className="relative max-w-6xl mx-auto px-4 py-20">
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
      </section>
    </SectionAnimation>
  )
}

function CrmFooter({ dict }: { dict: CrmDict }) {
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

export default function CrmLanding({ dict }: { dict: CrmDict }) {
  return (
    <div className="relative overflow-hidden bg-background text-foreground pt-14 space-y-0">
      <CrmHero dict={dict} />
      <CrmFeatures dict={dict} />
      <CrmChannels dict={dict} />
      <CrmEcosystem dict={dict} />
      <CrmPricing dict={dict} />
      <CrmTestimonials dict={dict} />
      <CrmFooter dict={dict} />
    </div>
  )
}
