import { locales } from './config'

export type Locale = typeof locales[number]

export interface Translations {
  [key: string]: any
}

export type Strings = {
  [key in Locale]: Translations
}

export type Localization = {
  locale: Locale
  translations: Translations
  namespace: string
}

export interface IPagePaths {
  params: { id: string; lang: Locale }
}

export function isLocale(tested: string): tested is Locale {
  return locales.some((locale) => locale === tested)
}
