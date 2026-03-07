import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Landing from './Landing'
import { getDictionary } from '../dictionaries'

describe('Landing', () => {
  it('renders with dict', async () => {
    const dict = await getDictionary('pt')
    render(<Landing dict={dict.landing} />)
    expect(screen.getByText(dict.landing.hero.title)).toBeInTheDocument()
  })
})
