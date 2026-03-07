import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import Navbar from './Navbar'

const landingDict = {
  items: {
    start: { label: 'Start', home: 'Home', products: 'Products', custos: 'Custos', dev: 'Dev' },
    projects: 'Projects',
    dev: 'Dev',
  },
  work: {
    items: {
      lenin: { description: 'Lenin' },
      newcore: { description: 'Newcore' },
      ffid: { description: 'FFID' },
      rede_ancora: { description: 'Rede' },
      atech: { description: 'Atech' },
      ambev: { description: 'Ambev' },
    },
  },
}

describe('Navbar', () => {
  it('renders platform navbar when platform nav and banner exist', () => {
    const dict = {
      ...landingDict,
      platform: {
        navbar: { main: [{ label: 'Products', href: '/products' }] },
        banner: { cta_talk: 'Talk', cta_start: 'Start' },
      },
    }
    render(<Navbar lang="pt" dict={dict} />)
    expect(screen.getByText('Talk')).toBeInTheDocument()
    expect(screen.getByText('Start')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
  })

  it('renders dev menu when no platform nav', () => {
    render(<Navbar lang="pt" dict={landingDict} />)
    expect(screen.getByText('Start')).toBeInTheDocument()
  })

  it('opens menu on click', () => {
    render(<Navbar lang="pt" dict={landingDict} />)
    fireEvent.click(screen.getByText('Start'))
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
