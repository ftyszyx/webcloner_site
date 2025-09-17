"use client"

import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'
import { useLocale } from 'next-intl'

const locales = ['en-US', 'zh-CN'];
const localeNames: { [key: string]: string } = {
  'en-US': 'English',
  'zh-CN': '简体中文'
};

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = useLocale();

  const switchLanguage = (locale: string) => {
    const newPathname = pathname.replace(/^\/[^\/]+/, `/${locale}`)
    router.push(newPathname);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-transparent"
        >
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[120px]">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale)}
            className={`
              flex items-center justify-center cursor-pointer
              transition-colors duration-200
              ${currentLocale === locale ? 'bg-muted' : 'hover:bg-muted/50'}
              ${currentLocale === locale ? 'text-primary font-medium' : ''}
            `}
          >
            {localeNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
