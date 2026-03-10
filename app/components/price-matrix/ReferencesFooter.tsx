'use client'

import { EXTENDED_REFERENCES } from '@/app/constants/price-matrix'

export default function ReferencesFooter() {
  return (
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
          {EXTENDED_REFERENCES.map((entry, i) => (
            <li key={i} className="flex gap-2 text-[11px] text-slate-600">
              <span className="shrink-0 font-mono text-slate-700">[{i + 1}]</span>
              <span>
                {'url' in entry && entry.url ? (
                  <a
                    href={(entry as { url: string }).url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-500 hover:text-blue-400 transition-colors"
                  >
                    {entry.label}
                  </a>
                ) : (
                  <span className="font-semibold text-slate-500">{entry.label}</span>
                )}
                {' — '}
                {entry.source}
                {entry.year ? ` · ${entry.year}` : ''}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </footer>
  )
}
