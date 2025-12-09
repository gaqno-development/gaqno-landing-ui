'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react/dist/iconify.js'

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLang = pathname.split('/')[1] || 'pt'
  const nextLang = currentLang === 'pt' ? 'en' : 'pt'

  const switchLanguage = () => {
    const segments = pathname.split('/')
    segments[1] = nextLang
    router.push(segments.join('/'))
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLanguage}
      className="rounded-full border border-foreground/20 px-3 py-2 text-xs font-medium hover:border-foreground transition"
      aria-label={`Switch to ${nextLang === 'pt' ? 'Portuguese' : 'English'}`}
    >
      <Icon icon="mdi:translate" className="w-4 h-4 mr-1" />
      {nextLang.toUpperCase()}
    </Button>
  )
}
