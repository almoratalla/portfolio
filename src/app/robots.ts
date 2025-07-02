import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://alainmoratalla.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/test-page-views', '/_next/', '/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
