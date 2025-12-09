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
import type { Dictionary } from '../types/dictionary'

const NewcoreImage = '/img/newcore.webp'
const FFIDImage = '/img/ffid.webp'
const RedeAncoraImage = '/img/rede-ancora.webp'
const ATECHImage = '/img/atech.webp'
const AmbevImage = '/img/ambev.webp'

export default function Navbar({
  className,
  dict,
}: {
  className?: string
  dict: Dictionary['navbar']
}) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div
      className={cn(
        'fixed bottom-10 md:bottom-auto md:top-10 inset-x-0 mx-auto md:ml-[73%] z-50 w-auto max-w-[20em] md:max-w-[14em]',
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
            <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
              <ProductItem
                title="NewCore"
                href={`#projetos/newcore`}
                src={NewcoreImage}
                description="E-commerce com CMS e integrações para catálogo vivo e checkouts rápidos."
              />
              <ProductItem
                title="FFID"
                href={`#projetos/ffid`}
                src={FFIDImage}
                description="Site institucional com CMS e integrações para catálogo vivo e checkouts rápidos."
              />
              <ProductItem
                title="Rede Ancora"
                href={`#projetos/rede-ancora`}
                src={RedeAncoraImage}
                description="Site institucional com CMS e integrações para catálogo vivo e checkouts rápidos."
              />
              <ProductItem
                title="ATECH"
                href={`#projetos/atech`}
                src={ATECHImage}
                description="Site institucional com CMS e integrações para catálogo vivo e checkouts rápidos."
              />
              <ProductItem
                title="Ambev"
                href={`#projetos/ambev`}
                src={AmbevImage}
                description="Site institucional com CMS e integrações para catálogo vivo e checkouts rápidos."
              />
            </div>
          </MenuItem>
          <LanguageToggle />
          <DarkModeToggle />
        </div>
      </Menu>
    </div>
  )
}
