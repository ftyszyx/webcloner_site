import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from 'next'
import { getTranslations } from "next-intl/server"

export default async function PricingPage({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const t= (await getTranslations({ locale: lang}))
  // const { pricing } = dict

  const plans = [
   t('pricing.plans.free'),
    t('pricing.plans.pro'),
    t('pricing.plans.team')
  ]

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {t('pricing.title')}
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {t('pricing.description')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
        {plans.map((plan) => (
          <Card key={plan} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{plan}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan}</span>
                {plan !== t('pricing.plans.free') && 
                  <span className="text-sm text-muted-foreground">/mo</span>
                }
              </div>
              <p className="text-sm text-muted-foreground mt-2">{plan}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {plan.split(',').map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={plan === t('pricing.plans.pro') ? "default" : "outline"}
              >
                {plan === t('pricing.plans.free') ? 
                  t('pricing.cta.free') : t('pricing.cta.paid')}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          {t('pricing.footer.refund')}
          <Button variant="link" className="px-1 text-sm">
            {t('pricing.footer.contact')}
          </Button>
        </p>
      </div>
    </div>
  )
}

export async function generateMetadata({ 
  params: { lang } 
}: { 
    params: { lang: string } 
}): Promise<Metadata> {
  const t = await getTranslations({ locale: lang})
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'

  return {
    title: t('pricing.title'),
    description: t('pricing.description'),
    alternates: {
      canonical: `${url}/${lang}/pricing`,
      languages: {
        'en-US': `${url}/en-US/pricing`,
        'zh-CN': `${url}/zh-CN/pricing`,
      },
    },
    openGraph: {
      title: t('pricing.title'),
      description: t('pricing.description'),
      url: `${url}/${lang}/pricing`,
    }
  }
}
