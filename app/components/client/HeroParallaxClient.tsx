'use client'

import { useEffect, useRef, useState } from 'react'
import type { StaticImageData } from 'next/image'
import { SectionPlaceholder } from '../SectionPlaceholder'

type Product = {
  title: string
  link: string
  thumbnail: StaticImageData
}

type HeroParallaxProps = {
  id?: string
  title: string
  description: string
  products: Product[]
}

export function HeroParallaxClient(props: HeroParallaxProps) {
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
      {visible ? (
        <HeroParallaxClient {...props} />
      ) : (
        <SectionPlaceholder height="480px" />
      )}
    </div>
  )
}
