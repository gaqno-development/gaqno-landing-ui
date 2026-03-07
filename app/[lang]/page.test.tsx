import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

vi.mock('../../dictionaries', () => ({
  getDictionary: () =>
    Promise.resolve({
      platform: {
        hero: { tagline: 'T', title: 'Title', description: 'D', cta_primary: 'P', cta_secondary: 'S', badges: [] },
        products: { title: 'P', description: 'D', items: {} },
        contact: { tagline: 'T', title: 'T', description: 'D', cta_email: 'E', cta_whatsapp: 'W', footer_note: 'N' },
        footer: { tagline: 'T', title: 'T', description: 'D', quick_links: { title: 'L', items: [] }, contact_info: { title: 'C', email: 'e', phone: 'p' }, social: { title: 'S' }, copyright: '©' },
      },
    }),
}))

describe('Home page', () => {
  it('renders PlatformLanding with dict', async () => {
    const Home = (await import('./page')).default
    const result = await Home({ params: { lang: 'pt' } })
    const { container } = render(result)
    expect(container).toBeTruthy()
  })
})
