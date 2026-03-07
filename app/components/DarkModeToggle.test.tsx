import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { DarkModeToggle } from './DarkModeToggle'

const mockSetTheme = vi.fn()
vi.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: mockSetTheme }),
  ThemeProvider: (props: { children: unknown }) => props.children,
}))

describe('DarkModeToggle', () => {
  it('renders and toggles theme on click', async () => {
    render(<DarkModeToggle />)
    const btn = screen.getByRole('button', { name: /toggle theme/i })
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)
    expect(mockSetTheme).toHaveBeenCalledWith('dark')
  })
})
