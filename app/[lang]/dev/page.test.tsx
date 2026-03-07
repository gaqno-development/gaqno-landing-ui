import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'

const cap = (i: number) => ({ title: `C${i}`, description: `D${i}` })
vi.mock('../../dictionaries', () => ({
  getDictionary: () =>
    Promise.resolve({
      landing: {
        hero: { tagline: 'T', title: 'T', description: 'D', cta_work: 'W', cta_process: 'P', available: 'A', profile: { title: 'P', name: 'N', role: 'R', experience: 'E', stack: 'S', skills: 'Sk' } },
        about: { tagline: 'T', title: 'T', description: 'D', background: { title: 'B', content: 'C' }, presentation: { title: 'P', description: 'D', date: 'D' }, education: { title: 'E', items: [] }, achievements: { title: 'A', items: [] } },
        experience: { tagline: 'T', title: 'T', description: 'D', labels: { responsibilities: 'R', technologies: 'T' }, items: [] },
        expertise: { tagline: 'T', title: 'T', description: 'D', capabilities: [0, 1, 2, 3, 4, 5, 6, 7].map(cap) },
        approach: { title: 'A', items: [{ title: 'T1', description: 'D1', highlight: 'H1' }, { title: 'T2', description: 'D2', highlight: 'H2' }, { title: 'T3', description: 'D3', highlight: 'H3' }, { title: 'T4', description: 'D4', highlight: 'H4' }] },
        work: { title: 'W', description: 'D', details_title: 'D', items: { lenin: { description: 'D' }, atech: { description: 'D' }, newcore: { description: 'D' }, ffid: { description: 'D' }, rede_ancora: { description: 'D' }, ambev: { description: 'D' } } },
        credentials: { tagline: 'T', title: 'T', description: 'D', cta_efset: 'E' },
        contact: { tagline: 'T', title: 'T', description: 'D', cta_email: 'E', cta_whatsapp: 'W', footer_note: 'N' },
        footer: { tagline: 'T', title: 'T', description: 'D', quick_links: { title: 'L', items: [] }, contact_info: { title: 'C', email: 'e', phone: 'p' }, social: { title: 'S' }, copyright: '©' },
      },
    }),
}))

describe('Dev page', () => {
  it('renders Landing with dict', async () => {
    const DevPage = (await import('./page')).default
    const result = await DevPage({ params: { lang: 'pt' } })
    const { container } = render(result)
    expect(container).toBeTruthy()
  })
})
