export type Project = {
  id: string
  title: string
  link: string
  thumbnail: string
  href: string
}

export const PROJECTS: Project[] = [
  {
    id: 'lenin',
    title: 'Lenin GPT',
    link: 'https://lenin.gaqno.com.br',
    thumbnail: '/img/lenin-gpt.webp',
    href: 'lenin-gpt',
  },
  {
    id: 'newcore',
    title: 'NewCore',
    link: 'https://www.newcore.com.br',
    thumbnail: '/img/newcore_landing.webp',
    href: 'newcore',
  },
  {
    id: 'ffid',
    title: 'FFID',
    link: 'https://www.ffid.com.br',
    thumbnail: '/img/ffidLogo.webp',
    href: 'ffid',
  },
  {
    id: 'rede_ancora',
    title: 'Rede Ancora',
    link: 'https://www.redeancora.com.br',
    thumbnail: '/img/rede-ancora.webp',
    href: 'rede-ancora',
  },
  {
    id: 'atech',
    title: 'ATECH',
    link: 'https://www.atech.com.br',
    thumbnail: '/img/atech.webp',
    href: 'atech',
  },
  {
    id: 'ambev',
    title: 'Ambev',
    link: 'https://www.ambev.com.br',
    thumbnail: '/img/ambev.webp',
    href: 'ambev',
  },
]

export const PROJECT_THUMBNAILS: Record<string, string> = {
  newcore: '/img/newcore.webp',
  ffid: '/img/ffid.webp',
  rede_ancora: '/img/rede-ancora.webp',
  atech: '/img/atech.webp',
  ambev: '/img/ambev.webp',
}
