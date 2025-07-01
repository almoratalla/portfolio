// Example of how to use these components in a blog post page
'use client'

import React from 'react'
import { PostActions } from '@/components/PostActions'
import { SocialShare } from '@/components/SocialShare'
import { PageViews } from '@/components/PageViews'

interface BlogPostProps {
  post: {
    id: string
    title: string
    slug: string
    content: any
    meta?: {
      description?: string
      image?: {
        url: string
      }
    }
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  // Generate the full URL for sharing
  const postUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/posts/${post.slug}`

  // Prepare share data
  const shareData = {
    url: postUrl,
    title: post.title,
    description: post.meta?.description || `Read "${post.title}" on my blog`,
    image: post.meta?.image?.url,
    hashtags: ['blog', 'reflection', 'thoughts'], // Customize as needed
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>

        {/* Post Meta - Views and Share */}
        <PostActions
          postId={post.id}
          shareData={shareData}
          className="border-b border-gray-200 dark:border-gray-700 pb-4"
        />
      </header>

      {/* Post Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Your existing content rendering logic */}
        {/* This would include your PersonalReflection blocks */}
      </div>

      {/* Post Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <PageViews
            pageId={post.id}
            trackView={false} // Don't track again in footer
            className="text-lg"
          />

          {/* Expanded share options */}
          <SocialShare
            data={shareData}
            variant="expanded"
            showLabels={true}
            className="w-full sm:w-auto"
          />
        </div>
      </footer>
    </article>
  )
}

// Example of environment variables you'll need in .env.local:
/*
NEXT_PUBLIC_SERVER_URL=http://localhost:3001
*/
