'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '@/components/ui/navbar-menu'
import { cn } from '@/utils/cn'
import { DarkModeToggle } from './DarkModeToggle'
import { LanguageToggle } from './LanguageToggle'
import { PROJECTS, PROJECT_THUMBNAILS } from '../constants/projects'
import type { Dictionary } from '../types/dictionary'

type NavbarProps = {
  className?: string
  lang: string
  dict: Dictionary['navbar'] & {
    work?: Dictionary['landing']['work']
    platform?: Dictionary['platform']
  }
}

export default function Navbar({ className, lang, dict }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null)
  const platformNav = dict.platform?.navbar
  const platformBanner = dict.platform?.banner
  const showPlatformNavbar = !!platformNav?.main?.length && !!platformBanner

  const getProjectDescription = (projectId: string): string => {
    const descriptions: Record<string, string> = {
      lenin: dict.work?.items?.lenin?.description || '',
      newcore: dict.work?.items?.newcore?.description || '',
      ffid: dict.work?.items?.ffid?.description || '',
      rede_ancora: dict.work?.items?.rede_ancora?.description || '',
      atech: dict.work?.items?.atech?.description || '',
      ambev: dict.work?.items?.ambev?.description || '',
    }
    return descriptions[projectId] || ''
  }

  if (showPlatformNavbar) {
    return (
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80',
          className,
        )}
      >
        <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center gap-6">
            <Link
              href={`/${lang}`}
              className="text-sm font-semibold text-foreground hover:opacity-80 transition"
            >
              gaqno
            </Link>
            {platformNav.main.map((item) => (
              <Link
                key={item.label}
                href={
                  item.href.startsWith('/') ? `/${lang}${item.href}` : item.href
                }
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-row items-center gap-4">
            <a
              href="https://wa.me/5511991610328"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              {platformBanner.cta_talk}
            </a>
            <Link
              href={`/${lang}/custos`}
              className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:-translate-y-0.5 transition"
            >
              {platformBanner.cta_start}
            </Link>
            <LanguageToggle />
            <DarkModeToggle />
          </div>
        </nav>
      </header>
    )
  }

  return (
    <div
      className={cn(
        'fixed bottom-10 md:bottom-auto md:top-10 inset-x-0 mx-auto z-50 w-fit',
        className,
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex flex-row items-center gap-4">
          <MenuItem
            setActive={setActive}
            active={active}
            item={dict.items.start.label}
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href={`/${lang}`}>
                {dict.items.start.home}
              </HoveredLink>
              <HoveredLink href={`/${lang}#produtos`}>
                {dict.items.start.products}
              </HoveredLink>
              <HoveredLink href={`/${lang}/custos`}>
                {dict.items.start.custos}
              </HoveredLink>
              <HoveredLink href={`/${lang}/dev`}>
                {dict.items.start.dev}
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item={dict.items.projects}
          >
            <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4 min-w-[600px] max-w-[800px]">
              {PROJECTS.filter((p) => p.id !== 'lenin').map((project) => (
                <ProductItem
                  key={project.id}
                  title={project.title}
                  href={`/${lang}/dev#work`}
                  src={PROJECT_THUMBNAILS[project.id] || project.thumbnail}
                  description={getProjectDescription(project.id)}
                />
              ))}
            </div>
          </MenuItem>
          <LanguageToggle />
          <DarkModeToggle />
        </div>
      </Menu>
    </div>
  )
}
