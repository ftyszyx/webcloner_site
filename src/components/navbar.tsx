"use client"
import Link from "next/link"
import AppIcon from "@/app/app.svg"
import { useTranslations } from '@/i18n/client';
import { NavbarActions } from "./navbar-actions"
import { MobileNav } from "./mobile-nav"

export default function Navbar() {
  const t = useTranslations();
  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <Link href={`/`} className="flex items-center space-x-2">
            <AppIcon className="h-6 w-6" />
            <span className="font-bold">{t('common.brand')}</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex-1 md:flex-none">
            <div className="hidden items-center space-x-4 md:flex">
              <Link href={`https://blog.bytefuse.cn/M2XYdbunIouhGsxxNOkcfdiGnvh`} className="text-sm font-medium transition-colors hover:text-primary">
                {t('nav.blog')}
              </Link>
            </div>
          </div>
          <NavbarActions />
          <MobileNav />
        </nav>
      </div>
    </header>
  )
}
