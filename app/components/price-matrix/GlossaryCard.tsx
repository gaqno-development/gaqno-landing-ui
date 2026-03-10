'use client'

const GLOSSARY = [
  { abbr: 'ERP', meaning: 'Enterprise Resource Planning — sistema integrado de gestão empresarial (estoque, fiscal, financeiro).' },
  { abbr: 'CRM', meaning: 'Customer Relationship Management — gestão de relacionamento e pipeline de vendas com clientes.' },
  { abbr: 'PDV', meaning: 'Ponto de Venda — sistema de registro de transações no varejo integrado ao estoque.' },
  { abbr: 'SaaS', meaning: 'Software as a Service — software entregue como serviço recorrente na nuvem, sem instalação local.' },
  { abbr: 'Interactionz', meaning: 'Moeda universal de IA da plataforma gaqno — 1 ponto = 1 interação de IA, compartilhada entre todos os módulos.' },
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
  { abbr: 'RAG', meaning: 'Retrieval-Augmented Generation — técnica de IA que combina busca em documentos com geração de texto contextualizada.' },
  { abbr: 'OCR', meaning: 'Optical Character Recognition — reconhecimento ótico de caracteres usado para digitalizar documentos físicos.' },
]

export default function GlossaryCard() {
  return (
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
  )
}
