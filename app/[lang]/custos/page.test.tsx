import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Custos from './page'

describe('Custos page', () => {
  it('renders CustosPage', async () => {
    const result = await Custos()
    const { container } = render(result)
    expect(screen.getByText(/Custos WhatsApp/)).toBeInTheDocument()
  })
})
