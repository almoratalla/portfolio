import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const postId = url.searchParams.get('id')

    if (!postId) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })
    
    const post = await payload.findByID({
      collection: 'posts',
      id: postId,
      depth: 2,
    })

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    // Clean up the post data for export
    const exportData = {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featuredImage: post.featuredImage,
      readingTime: post.readingTime,
      authors: post.authors,
      publishedAt: post.publishedAt,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      _status: post._status,
      meta: post.meta,
      relatedPosts: post.relatedPosts,
      // Include any additional fields that might exist
      ...Object.fromEntries(
        Object.entries(post).filter(([key]) => 
          !['id', 'title', 'slug', 'excerpt', 'content', 'featuredImage', 'readingTime', 
            'authors', 'publishedAt', 'createdAt', 'updatedAt', '_status', 'meta', 'relatedPosts'].includes(key)
        )
      )
    }

    // Create filename
    const filename = `${post.slug || post.title.toLowerCase().replace(/\s+/g, '-')}.json`

    const jsonString = JSON.stringify(exportData, null, 2)

    return new Response(jsonString, {
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error('Export error:', error)
    return NextResponse.json({ error: 'Export failed' }, { status: 500 })
  }
}
