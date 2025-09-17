import { Button } from "@/components/ui/button"
import AppIcon from "@/app/app.svg"
import Features from "@/components/features"
import Hero from "@/components/hero"
import FAQ from "@/components/faq"
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex flex-col items-center w-full">
      <Hero />
      <Features />
      <FAQ />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('home.cta.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('home.cta.description')}
            </p>
            <Button size="lg" className="mt-4">
              <AppIcon className="mr-2 h-5 w-5" />
              {t('home.cta.button')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
