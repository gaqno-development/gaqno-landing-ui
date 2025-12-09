'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { SectionPlaceholder } from '../SectionPlaceholder'

type StickyItem = {
  title: string
  href: string
  description: string
  content: ReactNode
}

type StickyScrollProps = {
  id?: string
  content: StickyItem[]
}

export function StickyScrollClient(props: StickyScrollProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const target = ref.current
    if (!target) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '256px' },
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {visible ? <StickyScrollClient {...props} /> : <SectionPlaceholder />}
    </div>
  )
}
