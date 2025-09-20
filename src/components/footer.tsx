"use client"
import Link from "next/link"
import { ThumbsUp } from "lucide-react"
import { useTranslations, useLocale } from '@/i18n/client';

export default function Footer() {
  const t = useTranslations();
  const lang = useLocale();
  const footerLinks = {
    [t('footer.product')]: [
      { name: t('footer.links.bento'), href: `https://bento.me/yeheboo` },
      { name: t('footer.links.freeourdays'), href: `https://freeourdays.com` },
      { name: t('footer.links.distributer'), href: `https://distributer.top` },
      { name: t('footer.links.githubtree'), href: `https://chromewebstore.google.com/detail/github-tree-map/aagofmkgihihajogoojeamnfgpgmehnn` },
    ],
    [t('footer.social')]: [
      { name: t('footer.links.twitter'), href: `https://x.com/freeourdays` },
      { name: t('footer.links.github'), href: `https://github.com/jiweiyeah` },
      { name: t('footer.links.jike'), href: `https://okjk.co/re05p2` },
      { name: t('footer.links.xhs'), href: `https://okjk.co/re05p2` },
    ],
    [t('footer.support')]: [
      { name: t('footer.links.help'), href: `/${lang}/help` },
      { name: t('footer.links.contact'), href: `/${lang}/contact` },
      { name: t('footer.links.feedback'), href: `/${lang}/feedback` },
      { name: t('footer.links.status'), href: `/${lang}/status` },
    ],
    [t('footer.company')]: [
      { name: t('footer.links.about'), href: `/${lang}/about` },
      { name: t('footer.links.terms'), href: `/${lang}/terms` },
      { name: t('footer.links.privacy'), href: `/${lang}/privacy` },
      { name: t('footer.links.jobs'), href: `/${lang}/jobs` },
    ],
  }
  return (
    <footer className="relative w-full bg-background/40 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background/5 to-transparent pointer-events-none" />
      <div className="container relative px-4 md:px-6 py-12 md:py-16">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h4 className="text-base font-semibold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link: any) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors" {...(category === t('footer.product') || category === t('footer.social') ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
          <div className="flex items-center space-x-2">
            <ThumbsUp className="h-6 w-6" />
            <span className="font-semibold">{t('common.brand')}</span>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-left text-sm text-muted-foreground">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
