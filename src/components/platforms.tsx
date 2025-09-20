"use client";
import { useTranslations } from "@/i18n/client";
import Script from "next/script";
const platforms = [
  { key: "weibo", label: "新浪微博", iconId: "icon-sina" },
  { key: "sina", label: "新浪博客", iconId: "icon-sina" },
  { key: "qqzone", label: "QQ空间", iconId: "icon-qqzone" },
  { key: "qqsay", label: "QQ说说", iconId: "icon-qqzone" },
];
export default function Platforms() {
  const t = useTranslations();
  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <Script src="//at.alicdn.com/t/c/font_5026634_29qs6g3ypjh.js" strategy="afterInteractive" />
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">{t('platforms.title')}</h2>
          <p className="text-sm md:text-base text-muted-foreground">{t('platforms.subtitle')}</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {platforms.map(p => (
            <div key={p.key} className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 ring-1 ring-primary/10">
                <svg className="h-10 w-10 fill-foreground" aria-hidden="true"><use href={`#${p.iconId}`} /></svg>
              </div>
              <span className="text-xs md:text-sm text-foreground/80">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
