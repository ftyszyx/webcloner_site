import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { supportedLocales, defaultLocale } from './i18n'

const re = new RegExp(`^/(${supportedLocales.join('|')})(/|$)`) // matches leading locale segment

//处理国际化
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname === '/') return NextResponse.redirect(new URL(`/${defaultLocale}`, req.url))
  if (!re.test(pathname)) return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, req.url))
  return NextResponse.next()
}
//只匹配业务的
export const config = { matcher: ['/((?!_next|api|favicon.ico|images|robots.txt).*)'] } 