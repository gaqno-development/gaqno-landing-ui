'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utils/cn'

export type CarouselItem = {
  quote: string
  author?: string
  role?: string
}

export function Carousel({
  items,
  title,
  intervalMs = 5000,
  className,
}: {
  items: CarouselItem[]
  title?: string
  intervalMs?: number
  className?: string
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [items.length, intervalMs])

  if (!items.length) return null

  const item = items[index]

  return (
    <div className={cn('relative w-full', className)}>
      {title && (
        <p className="text-center text-sm font-medium text-muted-foreground mb-6">
          {title}
        </p>
      )}
      <div className="relative min-h-[120px] flex flex-col items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="text-center max-w-2xl mx-auto"
          >
            <blockquote className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            {(item.author || item.role) && (
              <footer className="mt-4 text-sm text-muted-foreground">
                — {item.author}
                {item.role ? `, ${item.role}` : ''}
              </footer>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {items.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                'h-2 rounded-full transition-all',
                i === index
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-foreground/20 hover:bg-foreground/40'
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
