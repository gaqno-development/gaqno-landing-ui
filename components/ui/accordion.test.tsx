import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion'

describe('Accordion', () => {
  it('renders accordion with content', async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    expect(screen.getByText('Trigger')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Trigger'))
    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
