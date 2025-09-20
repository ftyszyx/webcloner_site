"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useTranslations } from "@/i18n/client"

export default function FAQ() {
  const t = useTranslations('faq');

  const faqData = {
    [t('tabs.general')]: t.raw('questions.general'),
    [t('tabs.features')]: t.raw('questions.features'),
    [t('tabs.technical')]: t.raw('questions.technical')
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t('title')}
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('description')}
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <Tabs defaultValue={Object.keys(faqData)[0]}>
            <TabsList className="grid w-full grid-cols-3">
              {Object.keys(faqData).map((tab) => (
                <TabsTrigger key={tab} value={tab}>{tab}</TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(faqData).map(([tab, questions]) => (
              <TabsContent key={tab} value={tab}>
                <Accordion type="single" collapsible className="w-full">
                  {questions.map((q: any, index: number) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{q.question}</AccordionTrigger>
                      <AccordionContent>{q.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
