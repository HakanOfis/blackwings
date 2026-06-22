/* =========================================================================
   Blackwings — i18n provider.
   Languages: NL / FR / EN / TR. Persisted in localStorage, syncs <html lang>.
   ========================================================================= */

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { en, type Dict } from './en'
import { nl } from './nl'
import { fr } from './fr'
import { tr } from './tr'

export const LANGS = ['nl', 'fr', 'en', 'tr'] as const
export type Lang = (typeof LANGS)[number]

const DICTS: Record<Lang, Dict> = { nl, fr, en, tr }

const STORAGE_KEY = 'bw.lang'

function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value)
}

function detectLang(): Lang {
  // Honour an explicit saved choice; otherwise always open in English.
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
  if (stored && isLang(stored)) return stored

  return 'en'
}

interface I18nContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
  langs: readonly Lang[]
  nameOf: (lang: Lang) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage may be unavailable (private mode) — ignore */
    }
  }, [])

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      t: DICTS[lang],
      langs: LANGS,
      nameOf: (l: Lang) => DICTS[l].languageName,
    }),
    [lang, setLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>')
  return ctx
}
