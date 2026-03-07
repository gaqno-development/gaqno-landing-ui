import '@testing-library/jest-dom'
import { vi } from 'vitest'

process.env.NEXT_PUBLIC_GA_ID = 'G-XXX'

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin = ''
  readonly thresholds: ReadonlyArray<number> = []
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = () => []
}
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => '/pt',
  useSearchParams: () => new URLSearchParams(),
  redirect: vi.fn(),
}))

vi.mock('next/headers', () => ({
  headers: vi.fn(() => new Headers()),
  cookies: vi.fn(() => ({ get: vi.fn(), set: vi.fn(), delete: vi.fn() })),
}))

vi.mock('next/image', () => ({
  default: (props: { src: string | { src?: string }; alt: string }) => {
    const React = require('react')
    const src = typeof props.src === 'string' ? props.src : props.src?.src ?? ''
    return React.createElement('img', { src, alt: props.alt })
  },
}))

vi.mock('next/dynamic', () => ({
  default: () => {
    const React = require('react')
    return (props: unknown) => React.createElement('div', { 'data-testid': 'dynamic' }, 'Dynamic')
  },
}))

vi.mock('next/link', () => {
  const React = require('react')
  return {
    default: (props: { children: unknown; href: string }) =>
      React.createElement('a', { href: props.href }, props.children),
  }
})

vi.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: vi.fn() }),
  ThemeProvider: (props: { children: unknown }) => props.children,
}))

vi.mock('server-only', () => ({}))

vi.mock('framer-motion', () => {
  const React = require('react')
  const createMotion = (tag: string) =>
    ({ children, ...p }: { children?: unknown }) => React.createElement(tag, p, children)
  const motion = new Proxy({} as Record<string, unknown>, {
    get: (_, prop) => createMotion(prop as string),
  })
  const motionValue = { get: () => 0 }
  return {
    motion,
    useInView: () => true,
    useScroll: () => ({ scrollYProgress: motionValue }),
    useTransform: (_: unknown, from: number[], to: number[]) => motionValue,
    useSpring: (v: unknown) => v ?? motionValue,
    useMotionValueEvent: vi.fn(),
    useAnimate: () => [React.createRef(), vi.fn()],
    stagger: (n: number) => n,
    AnimatePresence: ({ children }: { children: unknown }) => React.createElement(React.Fragment, null, children),
  }
})

vi.mock('@iconify/react', () => ({
  Icon: (props: { icon: string }) => {
    const React = require('react')
    return React.createElement('span', { 'data-icon': props.icon })
  },
}))

vi.mock('@iconify/react/dist/iconify.js', () => ({
  Icon: (props: { icon: string }) => {
    const React = require('react')
    return React.createElement('span', { 'data-icon': props.icon })
  },
}))

if (typeof window !== 'undefined') {
  ;(window as unknown as { gtag?: ReturnType<typeof vi.fn> }).gtag = vi.fn()
}
