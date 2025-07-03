import React from 'react'
import Link from 'next/link'
import { Post } from '@/payload-types'

interface PostNavigationProps {
  currentPost: Post
  relatedPosts?: Post[]
}

export const PostNavigation: React.FC<PostNavigationProps> = ({ 
  currentPost, 
  relatedPosts = [] 
}) => {
  return (
    <nav className="bg-gray-50 p-6 rounded-lg mt-8" role="navigation" aria-label="Post navigation">
      <div className="space-y-6">
        {/* Breadcrumb Navigation */}
        <div className="text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li>
              <Link href="/" className="hover:text-brand transition-colors">
                Home
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2">
              <Link href="/posts" className="hover:text-brand transition-colors">
                Blog
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 text-gray-900 font-medium">
              {currentPost.title}
            </li>
          </ol>
        </div>

        {/* Category Tags */}
        {currentPost.categories && currentPost.categories.length > 0 && (
          <div>
            <span className="text-sm text-gray-600 mr-3">Categories:</span>
            <div className="inline-flex flex-wrap gap-2">
              {currentPost.categories.map((category, idx) => (
                <Link
                  key={idx}
                  href={`/posts?category=${typeof category === 'object' ? category.title : category}`}
                  className="inline-block px-3 py-1 text-xs font-medium text-brand bg-brand/10 hover:bg-brand/20 rounded-full transition-colors"
                >
                  {typeof category === 'object' ? category.title : category}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Posts</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.id}
                  href={`/posts/${post.slug}`}
                  className="block p-4 bg-white rounded border hover:shadow-md transition-shadow"
                >
                  <h4 className="font-medium text-gray-900 line-clamp-2 hover:text-brand transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {post.meta?.description || ''}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="pt-4 border-t border-gray-200">
          <Link
            href="/posts"
            className="inline-flex items-center text-brand hover:text-brand/80 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Posts
          </Link>
        </div>
      </div>
    </nav>
  )
}
