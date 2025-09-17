import { LOCALES } from '@/lib/def';
import enPosts from '@/messages/en-US.json';
import zhPosts from '@/messages/zh-CN.json';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const sitemapEntries = [];

  const postsByLocale = {
    'en-US': enPosts.blog.posts,
    'zh-CN': zhPosts.blog.posts,
  };

  // 为每个语言版本添加基础页面
  for (const locale of LOCALES) {
    // 添加主页
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    });

    // 添加固定页面
    const staticPages = ['blog', 'pricing'];
    for (const page of staticPages) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }

    // 添加博客文章页面
    const posts = postsByLocale[locale as keyof typeof postsByLocale] || [];
    for (const post of posts) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return sitemapEntries;
}
