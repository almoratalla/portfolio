import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/payload-types'

interface RecentPostsProps {
  posts: Post[]
}

export const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getExcerpt = (post: Post) => {
    // Try to get excerpt from meta description or truncate title
    return post.meta?.description || `Read more about ${post.title}...`
  }

  const getImageUrl = (post: Post) => {
    if (post.meta?.image && typeof post.meta.image === 'object' && post.meta.image.url) {
      return post.meta.image.url
    }
    return '/website-template-OG.webp' // Fallback image
  }

  return (
    <section id="recent-posts" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10 2xl:max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Blog Posts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts, reflections, and insights on leadership, technology, and personal growth
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.slice(0, 6).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getImageUrl(post)}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.slice(0, 2).map((category, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 text-xs font-medium text-brand bg-brand/10 rounded-full"
                      >
                        {typeof category === 'object' ? category.title : category}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand transition-colors duration-200">
                  <Link href={`/posts/${post.slug}`} className="line-clamp-2">
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {getExcerpt(post)}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <time dateTime={post.publishedAt || post.createdAt}>
                    {formatDate(post.publishedAt || post.createdAt)}
                  </time>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-brand hover:text-brand/80 font-medium transition-colors duration-200"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center">
          <Link
            href="/posts"
            className="inline-flex items-center px-8 py-3 bg-brand text-white font-medium rounded-lg hover:bg-brand/90 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            View All Posts
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
