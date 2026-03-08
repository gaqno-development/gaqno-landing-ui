'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import {
  UNIT_ECONOMICS,
  OMNICHANNEL_CATEGORIES,
  AI_MODELS,
  CALCULATOR,
  LLM_PROVIDERS,
  NEXAI_POINT_PACKS,
  type LLMTier,
} from '@/app/constants/price-matrix'
import { cn } from '@/utils/cn'

const GLOSSARY = [
  { abbr: 'ERP', meaning: 'Enterprise Resource Planning — sistema integrado de gestão empresarial (estoque, fiscal, financeiro).' },
  { abbr: 'CRM', meaning: 'Customer Relationship Management — gestão de relacionamento e pipeline de vendas com clientes.' },
  { abbr: 'PDV', meaning: 'Ponto de Venda — sistema de registro de transações no varejo integrado ao estoque.' },
  { abbr: 'SaaS', meaning: 'Software as a Service — software entregue como serviço recorrente na nuvem, sem instalação local.' },
  { abbr: 'IPCA', meaning: 'Índice Nacional de Preços ao Consumidor Amplo — indicador oficial de inflação no Brasil (IBGE).' },
  { abbr: 'Selic', meaning: 'Sistema Especial de Liquidação e de Custódia — taxa básica de juros definida pelo COPOM/BCB.' },
  { abbr: 'PIB', meaning: 'Produto Interno Bruto — soma de todos os bens e serviços produzidos no país em determinado período.' },
  { abbr: 'CAC', meaning: 'Customer Acquisition Cost — custo médio total para adquirir um novo cliente pagante.' },
  { abbr: 'LTV', meaning: 'Lifetime Value — receita total esperada de um cliente durante seu ciclo de vida na plataforma.' },
  { abbr: 'NPS', meaning: 'Net Promoter Score — indicador de lealdade e probabilidade de recomendação da plataforma.' },
  { abbr: 'SLA', meaning: 'Service Level Agreement — acordo de nível de serviço com tempo de primeira resposta garantido em contrato.' },
  { abbr: 'ROI', meaning: 'Return on Investment — retorno financeiro gerado em relação ao investimento realizado.' },
  { abbr: 'NF-e', meaning: 'Nota Fiscal Eletrônica — documento fiscal digital obrigatório para operações comerciais no Brasil.' },
  { abbr: 'OPEX', meaning: 'Operational Expenditure — despesas operacionais recorrentes, como assinaturas SaaS.' },
  { abbr: 'CAPEX', meaning: 'Capital Expenditure — investimento em ativos físicos permanentes, como servidores próprios.' },
  { abbr: 'OTP', meaning: 'One-Time Password — senha de uso único para autenticação segura em dois fatores (2FA).' },
]

const REFERENCES = [
  { label: 'IPCA 2026', source: 'Banco Central do Brasil — Relatório Focus', year: '2026' },
  { label: 'Taxa Selic', source: 'Banco Central do Brasil — Ata COPOM', year: '2026' },
  { label: 'Câmbio USD/BRL', source: 'B3 / Banco Central do Brasil', year: '2026' },
  { label: 'PIB Brasil', source: 'IBGE / FGV — Projeção anual', year: '2026' },
  { label: 'Custos WhatsApp', source: 'Meta for Developers — WhatsApp Business Pricing', year: '2026' },
  { label: 'Modelos Gemini', source: 'Google AI Studio — Pricing page', year: '2026' },
  { label: 'Benchmarks CAC/LTV SaaS', source: 'OpenView — SaaS Benchmarks Report', year: '2025' },
  { label: 'Taxa de churn', source: 'ChartMogul — SaaS Metrics Report', year: '2025' },
  { label: 'LLM API Pricing Comparison (2026)', source: 'IntuitionLabs.ai · Adrien Laurent — llm-api-pricing-comparison-2025-openai-gemini-claude.pdf', year: 'Fev 2026', url: 'https://intuitionlabs.ai/pdfs/llm-api-pricing-comparison-2025-openai-gemini-claude.pdf' },
  { label: 'OpenAI API Pricing', source: 'openai.com/api/pricing', year: '2026', url: 'https://openai.com/api/pricing' },
  { label: 'Anthropic Claude Pricing', source: 'docs.anthropic.com/en/docs/about-claude/pricing', year: '2026', url: 'https://docs.anthropic.com/en/docs/about-claude/pricing' },
  { label: 'Google Vertex AI Pricing', source: 'cloud.google.com/vertex-ai/generative-ai/pricing', year: '2026', url: 'https://cloud.google.com/vertex-ai/generative-ai/pricing' },
  { label: 'DeepSeek API Docs', source: 'api-docs.deepseek.com/quick_start/pricing', year: '2026', url: 'https://api-docs.deepseek.com/quick_start/pricing' },
  { label: 'xAI Grok API Launch', source: 'TechCrunch — Elon Musk\'s xAI launches an API for Grok', year: 'Abr 2025', url: 'https://techcrunch.com/2025/04/09/elon-musks-ai-company-xai-launches-an-api-for-grok-3/' },
]

const CAC_VALUE = 2000

const LTV_CAC_DATA = [
  { name: 'CAC', value: CAC_VALUE, fill: '#3b82f6', note: 'Custo de Aquisição de Cliente' },
  { name: 'LTV 12m', value: 4200, fill: '#1d4ed8', note: 'Lifetime Value acumulado em 12 meses' },
  { name: 'LTV 24m', value: 8400, fill: '#1e40af', note: 'Lifetime Value acumulado em 24 meses' },
  { name: 'LTV 36m', value: 12600, fill: '#1e3a8a', note: 'Lifetime Value acumulado em 36 meses' },
]

function formatBRL(v: number) {
  return v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const TIER_STYLES: Record<LLMTier, { badge: string; label: string }> = {
  premium: { badge: 'bg-slate-700 text-slate-300', label: 'Premium' },
  mid:     { badge: 'bg-blue-900/60 text-blue-300', label: 'Mid-tier' },
  low:     { badge: 'bg-green-900/60 text-green-300', label: 'Low-cost' },
  ultra:   { badge: 'bg-emerald-900/60 text-emerald-300', label: 'Ultra-low' },
}

type LtvEntry = { payload: typeof LTV_CAC_DATA[number] }

function LtvCacTooltip({ active, payload }: { active?: boolean; payload?: LtvEntry[] }) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  const isLtv = d.name.startsWith('LTV')
  const ratio = isLtv ? (d.value / CAC_VALUE).toFixed(1) : null

  return (
    <div
      style={{
        background: '#0f172a',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: '10px 14px',
        fontSize: 12,
        color: '#f1f5f9',
        minWidth: 210,
      }}
    >
      <p style={{ fontWeight: 700, marginBottom: 4, color: d.fill }}>{d.name}</p>
      <p style={{ color: '#94a3b8', fontSize: 11, marginBottom: 8 }}>{d.note}</p>
      <p style={{ fontSize: 20, fontWeight: 900, color: '#fff', marginBottom: isLtv ? 6 : 0 }}>
        R$ {formatBRL(d.value)}
      </p>
      {ratio && (
        <p style={{ color: '#10b981', fontWeight: 700 }}>
          LTV / CAC = {ratio}x
        </p>
      )}
    </div>
  )
}

export default function UnitEconomicsSection() {
  return (
    <section id="economics" className="px-8 py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <h2 className="text-center text-3xl font-bold text-white">Unit Economics & Gateways</h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6 lg:col-span-2">
            <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-slate-500">
              LTV vs CAC — projeção de retorno
            </h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={LTV_CAC_DATA} barSize={40}>
                <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                  content={<LtvCacTooltip />}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {LTV_CAC_DATA.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-3 text-center text-[10px] text-slate-600">
              LTV/CAC ratio {'>'}  5x ao final de 36 meses. Payback estimado: 5-6 meses.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
            <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-slate-500">
              Métricas-chave
            </h3>
            <div className="space-y-5">
              {UNIT_ECONOMICS.map((m) => (
                <div key={m.label}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="text-slate-400">{m.label}</span>
                    <span className={cn('font-bold', m.color === 'green' ? 'text-green-400' : 'text-white')}>
                      {m.value}
                    </span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-slate-800">
                    {m.numericValue !== undefined && (
                      <div
                        className="h-1 rounded-full"
                        style={{
                          width: `${Math.min((m.numericValue / 15) * 100, 100)}%`,
                          background: m.color === 'green' ? '#10b981' : '#3b82f6',
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-white/5 pt-4 text-center">
              <div className="text-[10px] uppercase tracking-widest text-slate-500">
                LTV / CAC Ratio &gt; 5x
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
            <h3 className="mb-4 text-lg font-bold text-white">Gateways & Markup Tributário</h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              Estratégia financeira prioriza{' '}
              <strong className="text-white">Pix Automático (1,19%)</strong> sobre cartão (3,99%).
              Fórmula de precificação para venda de excedentes:
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-slate-950 p-4 text-center font-mono text-sm text-slate-300">
              Preço = (Custo_API + Margem) / (1 − Impostos − Taxa_Gateway)
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-center text-xs">
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-slate-500">Pix Automático</p>
                <p className="text-lg font-black text-green-400">1,19%</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-slate-500">Cartão Crédito</p>
                <p className="text-lg font-black text-slate-300">3,99%</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
            <h3 className="mb-4 text-lg font-bold text-white">Omnichannel — Estratégia de Repasse</h3>
            <div className="space-y-3">
              {OMNICHANNEL_CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  className="flex items-center justify-between rounded-xl border border-transparent bg-white/5 px-4 py-3 transition-colors hover:border-white/10"
                >
                  <div>
                    <p className={cn(
                      'text-sm font-bold',
                      cat.nameColor === 'blue' ? 'text-blue-400' : cat.nameColor === 'muted' ? 'text-slate-400' : 'text-white',
                    )}>
                      {cat.name}
                    </p>
                    <p className="text-[10px] text-slate-500">{cat.subtitle}</p>
                  </div>
                  <span className={cn(
                    'rounded-lg bg-slate-900 px-3 py-1 font-mono text-xs',
                    cat.pricingColor === 'green' ? 'text-green-400' : 'text-slate-300',
                  )}>
                    {cat.pricing}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-pink-500/10 bg-slate-900/60 p-6">
          <h3 className="mb-4 text-lg font-bold text-white">AI Studio — Comparativo de Modelos</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {AI_MODELS.map((model) => {
              const bigTechBRL = model.bigTechUsd * CALCULATOR.CAMBIO
              return (
                <div key={model.name} className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-xl">{model.icon}</span>
                    <span className="text-sm font-semibold text-white">{model.name}</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Big Tech (USD→BRL)</span>
                      <span className="font-mono text-slate-300">R$ {formatBRL(bigTechBRL)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-pink-400">NexAI</span>
                      <span className="font-mono text-pink-300">{model.cost}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-4 text-center text-[10px] text-slate-600">
            Câmbio referência: USD {CALCULATOR.CAMBIO.toFixed(2)} BRL · Custo/ponto: R$ {CALCULATOR.COST_PER_POINT}
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <h4 className="mb-4 text-sm font-black uppercase tracking-widest text-pink-400">
              Pacotes de Pontos
            </h4>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {NEXAI_POINT_PACKS.map((pack) => {
                const apiCostUsd = pack.points * CALCULATOR.API_COST_PER_POINT_USD
                const marginPct = ((pack.priceUsd - apiCostUsd) / pack.priceUsd) * 100
                return (
                  <div
                    key={pack.points}
                    className={cn(
                      'relative rounded-2xl border p-4 text-center transition-colors',
                      pack.highlighted
                        ? 'border-pink-500/50 bg-pink-950/30 shadow-[0_0_24px_-8px_rgba(236,72,153,0.3)]'
                        : 'border-white/5 bg-white/5 hover:border-white/10',
                    )}
                  >
                    {pack.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-pink-500 px-3 py-0.5 text-[9px] font-black uppercase tracking-widest text-white whitespace-nowrap">
                        Mais popular
                      </div>
                    )}
                    <p className="text-2xl font-black text-white">
                      {pack.points.toLocaleString('pt-BR')}
                    </p>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-pink-400">pontos</p>
                    <div className="mb-3 space-y-1 text-xs text-slate-400">
                      <p>🖼️ {pack.images.toLocaleString('pt-BR')} imagens</p>
                      <p>🎬 {pack.videos.toLocaleString('pt-BR')} vídeos</p>
                    </div>
                    <p className="text-lg font-black text-white">
                      ${pack.priceUsd.toFixed(2)}
                    </p>
                    <div className="mt-2 border-t border-white/5 pt-2">
                      <p className="text-[10px] text-slate-500">
                        Custo API{' '}
                        <span className="font-mono text-slate-600">${apiCostUsd.toFixed(2)}</span>
                      </p>
                      <p className="text-xs font-black text-green-400">
                        Margem {marginPct.toFixed(1)}%
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="mt-3 text-center text-[10px] text-slate-600">
              1 imagem = 2 pts · 1 segundo de vídeo = 10 pts · Pontos não expiram
            </p>
          </div>

          <div className="mt-8 border-t border-white/5 pt-6">
            <h4 className="mb-1 text-sm font-black uppercase tracking-widest text-slate-500">
              Mercado LLM — Preços API por Provedor
            </h4>
            <p className="mb-4 text-[10px] text-slate-600">
              Preços verificados fev/2026 · Fonte: IntuitionLabs.ai LLM API Pricing Comparison
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/5">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="py-2.5 pl-4 text-left font-black uppercase tracking-widest text-slate-600">Provedor</th>
                    <th className="py-2.5 text-left font-black uppercase tracking-widest text-slate-600">Modelo</th>
                    <th className="py-2.5 text-right font-black uppercase tracking-widest text-slate-600">Input / 1M</th>
                    <th className="py-2.5 pr-4 text-right font-black uppercase tracking-widest text-slate-600">Output / 1M</th>
                    <th className="py-2.5 pr-4 text-center font-black uppercase tracking-widest text-slate-600">Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {LLM_PROVIDERS.map((p) => (
                    <tr key={`${p.provider}-${p.model}`} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-2.5 pl-4 font-semibold text-slate-300">{p.provider}</td>
                      <td className="py-2.5 font-mono text-slate-400">{p.model}</td>
                      <td className="py-2.5 text-right font-mono text-slate-300">${p.inputPer1M.toFixed(2)}</td>
                      <td className="py-2.5 pr-4 text-right font-mono text-slate-300">${p.outputPer1M.toFixed(2)}</td>
                      <td className="py-2.5 pr-4 text-center">
                        <span className={cn('rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-wide', TIER_STYLES[p.tier].badge)}>
                          {TIER_STYLES[p.tier].label}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
          <h3 className="mb-6 text-lg font-bold text-white">Glossário de Siglas</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {GLOSSARY.map((item) => (
              <div key={item.abbr} className="flex gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                <span className="shrink-0 rounded-md bg-slate-800 px-2 py-0.5 font-mono text-xs font-black text-blue-400 self-start mt-0.5">
                  {item.abbr}
                </span>
                <p className="text-xs leading-relaxed text-slate-400">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="border-t border-white/5 pb-4 pt-10">
          <p className="mx-auto max-w-2xl text-center text-xs italic text-slate-500">
            &ldquo;Posicionar o software não como custo de TI, mas como substituto de headcounts
            caros. Um SaaS de R$ 899 que economiza 40h de um analista de R$ 5.000 possui ROI
            inquestionável.&rdquo;
          </p>

          <div className="mt-10 border-t border-white/5 pt-8">
            <p className="mb-4 text-center text-xs font-black uppercase tracking-widest text-slate-600">
              Fontes &amp; Referências
            </p>
            <ol className="mx-auto max-w-4xl grid grid-cols-1 gap-2 sm:grid-cols-2 list-none">
              {REFERENCES.map((ref, i) => (
                <li key={i} className="flex gap-2 text-[11px] text-slate-600">
                  <span className="shrink-0 font-mono text-slate-700">[{i + 1}]</span>
                  <span>
                    {'url' in ref && ref.url ? (
                      <a
                        href={(ref as { url: string }).url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-500 hover:text-blue-400 transition-colors"
                      >
                        {ref.label}
                      </a>
                    ) : (
                      <span className="font-semibold text-slate-500">{ref.label}</span>
                    )}
                    {' — '}
                    {ref.source}
                    {ref.year ? ` · ${ref.year}` : ''}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </footer>
      </div>
    </section>
  )
}
