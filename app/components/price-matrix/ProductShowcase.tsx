'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { PRODUCT_SECTIONS, type ProductId } from '@/app/constants/price-matrix'
import { cn } from '@/utils/cn'

const ProductChart = dynamic(() => import('./ProductChart'), { ssr: false })

export default function ProductShowcase() {
  const [active, setActive] = useState<ProductId>('crm')
  const product = PRODUCT_SECTIONS.find((p) => p.id === active)!

  return (
    <section id="produtos" className="px-8 py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center text-3xl font-bold text-white">Produtos do Ecossistema</h2>
        <p className="mb-10 text-center text-slate-400">
          Explore a arquitetura de custos e métricas de cada produto individualmente.
        </p>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {PRODUCT_SECTIONS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p.id)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-semibold transition-all',
                active === p.id
                  ? 'text-white shadow-lg'
                  : 'border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white',
              )}
              style={active === p.id ? { background: product.accentColor + '33', border: `1px solid ${product.accentColor}`, color: product.accentColor } : {}}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
              <h3 className="mb-2 text-2xl font-bold text-white" style={{ color: product.accentColor }}>
                {product.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">{product.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {product.metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3"
                >
                  <span className="text-xs text-slate-400">{m.label}</span>
                  <span className="text-sm font-bold" style={{ color: m.color }}>
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl border border-white/5 bg-slate-900/60 p-6">
            <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">
              {product.chartKeys.map((k) => k.label).join(' vs ')}
            </p>
            <ProductChart product={product} />
          </div>
        </div>
      </div>
    </section>
  )
}
