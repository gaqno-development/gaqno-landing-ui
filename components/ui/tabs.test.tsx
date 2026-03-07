import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Tabs } from './tabs'

describe('Tabs', () => {
  it('renders tabs and content', () => {
    render(
      <Tabs
        tabs={[
          { title: 'Tab1', value: '1', content: 'Content1' },
          { title: 'Tab2', value: '2', content: 'Content2' },
        ]}
      />
    )
    expect(screen.getByText('Tab1')).toBeInTheDocument()
    expect(screen.getByText('Tab2')).toBeInTheDocument()
    expect(screen.getByText('Content1')).toBeInTheDocument()
  })

  it('switches tab on click', () => {
    render(
      <Tabs
        tabs={[
          { title: 'A', value: 'a', content: 'A content' },
          { title: 'B', value: 'b', content: 'B content' },
        ]}
      />
    )
    fireEvent.click(screen.getByText('B'))
    expect(screen.getByText('B content')).toBeInTheDocument()
  })
})
