import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getPost } from "@/lib/getPost"
import type { Metadata } from 'next'
import { ScrollToTop } from "@/components/scroll-to-top"
import { getMessages, createT } from "@/i18n";

export default async function BlogPost({ params }: { params: { slug: string, lang: string } }) {
  const messages = getMessages(params.lang);
  const t = createT(messages);
  const post = await getPost(params.slug, params.lang) as unknown as {
    title: string;
    date: string;
    author: string;
    readTime: string;
    contentHtml: string;
  }

  return (
    <main className="container py-12 md:py-24">
      <Link href={`/blog`}>
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('backToList')}
        </Button>
      </Link>

      <article className="prose prose-gray dark:prose-invert mx-auto">
        <h1 className="mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-500 mb-8">
          <span>{post.date}</span>
          <span className="mx-2">·</span>
          <span>{post.author}</span>
          <span className="mx-2">·</span>
          <span>{post.readTime}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>

      <ScrollToTop />
    </main>
  )
}

export async function generateMetadata({
  params
}: {
  params: { slug: string, lang: string }
}): Promise<Metadata> {
  const t = createT(getMessages(params.lang));
  const post = await getPost(params.slug, params.lang) as unknown as {
    title: string
    description?: string
    author: string
    date: string
  }
  const url = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

  return {
    title: post.title,
    description: post.description || t('blog.description'),
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      locale: params.lang,
      url: `${url}/${params.lang}/blog/${params.slug}`,
      title: post.title,
      description: post.description || t('blog.description'),
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || t('blog.description'),
    },
    alternates: {
      canonical: `${url}/${params.lang}/blog/${params.slug}`,
      languages: {
        'en-US': `${url}/en-US/blog/${params.slug}`,
        'zh-CN': `${url}/zh-CN/blog/${params.slug}`,
      },
    },
  }
}
