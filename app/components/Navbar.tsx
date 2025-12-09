'use client'
import React, { useState } from 'react'
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
  dict: Dictionary['navbar'] & {
    work?: Dictionary['landing']['work']
  }
}

export default function Navbar({ className, dict }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null)

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
              <HoveredLink href={`#`}>{dict.items.start.home}</HoveredLink>
              <HoveredLink href={`#sobre`}>
                {dict.items.start.who_am_i}
              </HoveredLink>
              <HoveredLink href={`#techs`}>
                {dict.items.start.techs}
              </HoveredLink>
              <HoveredLink href={`#projetos`}>
                {dict.items.start.projects}
              </HoveredLink>
              <HoveredLink href={`#caminho`}>
                {dict.items.start.path}
              </HoveredLink>
              <HoveredLink href={`#contact`}>
                {dict.items.start.contact}
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
                  href={`#projetos/${project.href}`}
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
