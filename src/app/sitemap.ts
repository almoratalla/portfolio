import { MetadataRoute } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config: configPromise })

  // Get all published posts
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  // Get all published pages
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://alainmoratalla.com'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  // Dynamic post pages
  const postPages = posts.docs.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dynamic pages
  const dynamicPages = pages.docs
    .filter((page) => page.slug !== 'home') // Exclude home page as it's handled by root
    .map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(page.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  return [...staticPages, ...postPages, ...dynamicPages]
}
