import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageToggle } from './LanguageToggle'

const mockPush = vi.fn()
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => '/pt',
}))

describe('LanguageToggle', () => {
  it('renders and switches language', async () => {
    render(<LanguageToggle />)
    expect(screen.getByText('EN')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button'))
    expect(mockPush).toHaveBeenCalledWith('/en')
  })
})
