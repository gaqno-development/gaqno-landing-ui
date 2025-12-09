'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { SectionPlaceholder } from '../SectionPlaceholder'

const Globe = dynamic(() => import('../Globe').then((module) => module.Globe), {
  ssr: false,
})

export function GlobeClient() {
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
      {visible ? <Globe /> : <SectionPlaceholder height="320px" />}
    </div>
  )
}
