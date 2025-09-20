"use client"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { useTranslations } from "@/i18n/client"

export function MobileNav() {
  const t = useTranslations();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[240px] sm:w-[300px] glass border-0 bg-background/40 backdrop-blur-sm"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/5 to-transparent pointer-events-none" />
        <nav className="relative flex flex-col space-y-4 mt-8">
          <Link
            href={`/blog`}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('nav.blog')}
          </Link>
          <Link
            href={`/pricing`}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('nav.pricing')}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
