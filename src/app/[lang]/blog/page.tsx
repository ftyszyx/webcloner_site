import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from 'next'
import { getMessages, createT } from '@/i18n'

export default async function BlogPage({ params: { lang } }: { params: { lang: string } }) {
  const messages = getMessages(lang)
  const t = createT(messages)
  const posts = t.raw('blog.posts')
  return (
    <main className="container py-12 md:py-24">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          {t('blog.title')}
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
          {t('blog.description')}
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <Link key={post.id} href={`/${lang}/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  {post.date} · {post.readTime}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{post.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Button variant="outline">{t('blog.loadMore')}</Button>
      </div>
    </main>
  )
}

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }): Promise<Metadata> {
  const messages = getMessages(lang)
  const t = createT(messages)
  const url = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  return {
    title: t('blog.title'),
    description: t('blog.description'),
    alternates: { canonical: `${url}/${lang}/blog`, languages: { 'en-US': `${url}/en-US/blog`, 'zh-CN': `${url}/zh-CN/blog` } },
    openGraph: { title: t('blog.title'), description: t('blog.description'), url: `${url}/${lang}/blog` }
  }
}
