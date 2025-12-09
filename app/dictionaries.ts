import 'server-only'
import type { Dictionary } from './types/dictionary'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  pt: () => import('@/dictionaries/pt.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en' | 'pt'): Promise<Dictionary> =>
  dictionaries[locale]()
