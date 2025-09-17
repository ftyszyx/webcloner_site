import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast"
import { BreadcrumbWrapper } from "@/components/breadcrumb-wrapper"
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t= await getTranslations({ locale: params.lang})
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'
  
  return {
    title: {
      default: t('metadata.title'),
      template: `%s | ${t('metadata.title')}`
    },
    description: t('metadata.description'),
    keywords: t('metadata.keywords'),
    authors: [{ name: 'yeheboo' }],
    metadataBase: new URL(url),
    alternates: {
      canonical: `${url}/${params.lang}`,
      languages: {
        'en-US': `${url}/en-US`,
        'zh-CN': `${url}/zh-CN`,
      },
    },
    openGraph: {
      type: 'website',
      locale: params.lang,
      url: `${url}/${params.lang}`,
      title: t('metadata.title'),
      description: t('metadata.description'),
      siteName: t('common.brand')
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metadata.title'),
      description: t('metadata.description'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// export async function generateStaticParams() {
//   return locales.map((locale) => ({ lang: locale }))
// }

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const messages = useMessages();
  
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={lang} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster position="top-center" />
            <div className="relative flex min-h-screen flex-col">
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-radial-t from-primary/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-radial-b from-primary/20 to-transparent pointer-events-none" />
              <Navbar />
              <main className="relative flex-1">
                <BreadcrumbWrapper />
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
