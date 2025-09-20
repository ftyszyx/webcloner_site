import en from '@/messages/en-US.json'
import zh from '@/messages/zh-CN.json'

export const supportedLocales = ['en-US','zh-CN'] as const
export type SupportedLocale = typeof supportedLocales[number]
export const defaultLocale: SupportedLocale = 'zh-CN'

export const localeNames: { [key: string]: string } = {
  'en-US': 'English',
  'zh-CN': '简体中文'
};
export type Messages = typeof zh
const dict: Record<SupportedLocale, Messages> = {
  'en-US': en as Messages,
  'zh-CN': zh
}

export function getMessages(locale: string): Messages {
  return dict[(locale as SupportedLocale)] ?? dict[defaultLocale]
}

export function createT(messages: Messages) {
  const lookup = (key: string) => key.split('.').reduce<any>((o,k)=>o?.[k], messages)
  const interpolate = (text: unknown, values?: Record<string, any>) => {
    if (typeof text !== 'string') return text
    if (!values) return text
    return text.replace(/\{(\w+)\}/g, (_, k) => (k in values && values[k] != null) ? String(values[k]) : `{${k}}`)
  }
  const t = (key: string, values?: Record<string, any>) => {
    const val = lookup(key)
    if (typeof val === 'string') return interpolate(val, values) as string
    return key
  }
  const raw = (key: string) => lookup(key)
  return Object.assign(t, { raw })
}
