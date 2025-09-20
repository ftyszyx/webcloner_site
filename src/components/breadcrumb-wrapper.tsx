"use client"

import { usePathname } from 'next/navigation'
import { Breadcrumb } from "./breadcrumb"
import { getBreadcrumbItems } from "@/lib/get-breadcrumb-items"
import { useLocale, useTranslations } from '@/i18n/client';

export function BreadcrumbWrapper() {
  const lang = useLocale();
  const t = useTranslations();
  const pathname = usePathname()
  if (pathname === `/${lang}`) {
    return null
  }
  const items = getBreadcrumbItems(pathname, t)
  return (
    <div className="container py-4 md:py-6">
      <Breadcrumb 
        items={items}
      />
    </div>
  )
}
