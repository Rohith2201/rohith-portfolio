import type { MetadataRoute } from 'next'
import { blogPosts, projects } from '@/lib/content'

const baseUrl = 'https://rohith.xyz'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/blogs', '/works', '/privacy-policy', '/terms-conditions']
  return [
    ...staticPages.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: path === '' ? 1 : 0.7 })),
    ...blogPosts.map((post) => ({ url: `${baseUrl}/blogs/${post.slug}`, lastModified: new Date(post.date), changeFrequency: 'yearly' as const, priority: 0.6 })),
    ...projects.map((project) => ({ url: `${baseUrl}/works/${project.slug}`, lastModified: new Date(`${project.year}-12-31`), changeFrequency: 'yearly' as const, priority: 0.6 })),
  ]
}
