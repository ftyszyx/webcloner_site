'use client'
import { createContext, useContext } from 'react'
import type { Messages, SupportedLocale } from './index'
import { createT } from './index'

type TFunc = ((key: string, values?: Record<string, any>) => string) & { raw: (key: string) => any }

type I18nCtx = { locale: SupportedLocale; messages: Messages; t: TFunc }

const Ctx = createContext<I18nCtx | null>(null)

export function I18nProvider({ locale, messages, children }:{ locale: SupportedLocale; messages: Messages; children: React.ReactNode }) {
  const t = createT(messages) as TFunc
  return <Ctx.Provider value={{ locale, messages, t }}>{children}</Ctx.Provider>
}

export function useTranslations(namespace?: string): TFunc {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('I18nProvider missing')
  if (!namespace) return ctx.t
  const base = ctx.t
  const prefix = namespace.endsWith('.') ? namespace : `${namespace}.`
  const tNs = ((key: string, values?: Record<string, any>) => base(prefix + key, values)) as TFunc
  tNs.raw = (key: string) => base.raw(prefix + key)
  return tNs
}

export function useLocale(): SupportedLocale {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('I18nProvider missing')
  return ctx.locale
}
