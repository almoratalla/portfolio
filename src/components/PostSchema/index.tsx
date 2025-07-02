import React from 'react'
import { Post } from '@/payload-types'

interface PostSchemaProps {
  post: Post
}

export const PostSchema: React.FC<PostSchemaProps> = ({ post }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://alainmoratalla.com'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.meta?.description || '',
    image:
      post.meta?.image && typeof post.meta.image === 'object' && post.meta.image.url
        ? `${baseUrl}${post.meta.image.url}`
        : undefined,
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: 'Alain Moratalla',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Alain Moratalla',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon-32x32.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/posts/${post.slug}`,
    },
    url: `${baseUrl}/posts/${post.slug}`,
    wordCount: post.content ? JSON.stringify(post.content).length / 6 : undefined, // Rough word count
    articleSection:
      post.categories && Array.isArray(post.categories)
        ? post.categories.map((cat) => (typeof cat === 'object' ? cat.title : '')).filter(Boolean)
        : [],
    keywords:
      post.categories && Array.isArray(post.categories)
        ? post.categories
            .map((cat) => (typeof cat === 'object' ? cat.title : ''))
            .filter(Boolean)
            .join(', ')
        : '',
  }

  // Remove undefined values
  const cleanSchema = JSON.parse(JSON.stringify(schema))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema) }}
    />
  )
}
