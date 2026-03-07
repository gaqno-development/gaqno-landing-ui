import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GlobeClient } from './GlobeClient'

describe('GlobeClient', () => {
  it('renders placeholder initially', () => {
    const { container } = render(<GlobeClient />)
    expect(container.querySelector('.animate-pulse')).toBeInTheDocument()
  })

  it('renders Globe when visible after intersection', async () => {
    let cb: (entries: { isIntersecting: boolean }[]) => void
    const MockObserver = vi.fn((callback: (entries: { isIntersecting: boolean }[]) => void) => {
      cb = callback
      return {
        observe: vi.fn(),
        disconnect: vi.fn(),
      }
    })
    window.IntersectionObserver = MockObserver as unknown as typeof IntersectionObserver
    render(<GlobeClient />)
    cb!([{ isIntersecting: true }])
    await vi.waitFor(() => {
      expect(screen.getByTestId('dynamic')).toBeInTheDocument()
    })
  })
})
