import React from 'react'

interface SEOAnalyticsProps {
  pageType: 'article' | 'website' | 'profile'
  title: string
  description?: string
  url: string
  image?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export const SEOAnalytics: React.FC<SEOAnalyticsProps> = ({
  pageType,
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  author = 'Alain Moratalla',
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://alainmoratalla.com'

  return (
    <>
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Alain Moratalla" />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:creator" content="@alainmoratalla" />

      {/* Article specific */}
      {pageType === 'article' && (
        <>
          <meta property="article:author" content={author} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        </>
      )}

      {/* Additional SEO meta tags */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="author" content={author} />
    </>
  )
}
