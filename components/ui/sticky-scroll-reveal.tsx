'use client'
import React, { useRef } from 'react'
import { useMotionValueEvent, useScroll, motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { Badge } from './badge'
import { Icon } from '@iconify/react/dist/iconify.js'

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>['offset']

export type StickyScrollConfig = {
  heightClass: string
  paddingClass: string
  usePageScroll: boolean
  offset: ScrollOffset
  backgroundColors: string[]
  linearGradients: string[]
}

export const stickyScrollConfig: StickyScrollConfig = {
  heightClass: 'h-[80rem] md:h-[120vh]',
  paddingClass: 'p-10 md:p-16',
  usePageScroll: false,
  offset: ['start start', 'end end'] as const,
  backgroundColors: [
    'var(--color-slate-900)',
    'var(--color-black)',
    'var(--color-slate-900)',
  ],
  linearGradients: [
    'linear-gradient(to bottom right, var(--color-cyan-500), var(--color-emerald-500))',
    'linear-gradient(to bottom right, var(--color-pink-500), var(--color-indigo-500))',
    'linear-gradient(to bottom right, var(--color-orange-500), var(--color-yellow-500))',
  ],
}

export const StickyScroll = ({
  id,
  content,
  contentClassName,
  config,
}: {
  id: string
  content: {
    title: string
    description: string
    href?: string
    content?: React.ReactNode
    techs?: {
      icon: string
      name: string
    }[]
  }[]
  contentClassName?: string
  config?: Partial<StickyScrollConfig>
}) => {
  const mergedConfig = { ...stickyScrollConfig, ...config }
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef(null)
  const scrollOptions = mergedConfig.usePageScroll
    ? { target: ref, offset: mergedConfig.offset }
    : { container: ref, offset: mergedConfig.offset }
  const { scrollYProgress } = useScroll(scrollOptions)
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const divisor = cardLength > 1 ? cardLength - 1 : 1
    const cardsBreakpoints = content.map((_, index) => index / divisor)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0,
    )
    setActiveCard(closestBreakpointIndex)
  })

  const { backgroundColors, linearGradients } = mergedConfig

  const containerClasses = mergedConfig.usePageScroll
    ? cn(
        'pl-[2em] no-scrollbar flex justify-center relative space-x-10 rounded-md',
        mergedConfig.heightClass,
        mergedConfig.paddingClass,
      )
    : cn(
        'pl-[2em] no-scrollbar overflow-y-auto flex justify-center relative space-x-10 rounded-md',
        mergedConfig.heightClass,
        mergedConfig.paddingClass,
      )
  return (
    <motion.div
      id={id}
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className={containerClasses}
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              id={`projetos/${item.href}`}
              key={item.title + index}
              className="my-20"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
              {item.techs && (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-slate-300 pt-10 w-fit flex flex-row flex-wrap gap-2"
                >
                  {item.techs.map((tech, index) => (
                    <Badge key={index} className="flex flex-row gap-2">
                      <Icon icon={tech.icon} className="w-6 h-6" />
                      <span>{tech.name}</span>
                    </Badge>
                  ))}
                </motion.span>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          'hidden md:block h-72 w-96 rounded-xl bg-white/90 border border-white/20 sticky top-10 overflow-hidden shadow-2xl shadow-black/20',
          contentClassName,
        )}
      >
        {content[activeCard]?.content ?? null}
      </motion.div>
    </motion.div>
  )
}
