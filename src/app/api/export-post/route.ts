import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

// Function to convert rich text content to markdown
function convertRichTextToMarkdown(content: any): string {
  if (!content || !content.root?.children) {
    return ''
  }

  const processNode = (node: any): string => {
    if (!node) return ''

    switch (node.type) {
      case 'paragraph':
        const paragraphContent = node.children?.map(processNode).join('') || ''
        return paragraphContent ? `${paragraphContent}\n\n` : ''

      case 'heading':
        const headingContent = node.children?.map(processNode).join('') || ''
        const level = node.tag === 'h1' ? '#' : node.tag === 'h2' ? '##' : node.tag === 'h3' ? '###' : '####'
        return headingContent ? `${level} ${headingContent}\n\n` : ''

      case 'text':
        let text = node.text || ''
        if (node.bold) text = `**${text}**`
        if (node.italic) text = `*${text}*`
        if (node.code) text = `\`${text}\``
        return text

      case 'link':
        const linkText = node.children?.map(processNode).join('') || ''
        const url = node.fields?.url || '#'
        return `[${linkText}](${url})`

      case 'list':
        const listItems = node.children?.map(processNode).join('') || ''
        return `${listItems}\n`

      case 'listitem':
        const itemContent = node.children?.map(processNode).join('') || ''
        const marker = node.listType === 'number' ? '1.' : '-'
        return `${marker} ${itemContent}\n`

      case 'quote':
        const quoteContent = node.children?.map(processNode).join('') || ''
        return `> ${quoteContent}\n\n`

      case 'block':
        const block = node.fields
        if (block?.blockType === 'mediaBlock' && block.media) {
          const media = block.media
          const alt = typeof media === 'object' ? media.alt || '' : ''
          const url = typeof media === 'object' ? 
            `${process.env.NEXT_PUBLIC_SERVER_URL}${media.url}` : 
            media
          
          let markdown = `![${alt}](${url})`
          
          // Add caption if exists
          if (typeof media === 'object' && media.caption) {
            const captionText = convertRichTextToMarkdown(media.caption)
            if (captionText.trim()) {
              markdown += `\n\n*${captionText.trim()}*`
            }
          }
          
          return `${markdown}\n\n`
        }
        
        if (block?.blockType === 'code') {
          const language = block.language || ''
          const code = block.code || ''
          return `\`\`\`${language}\n${code}\n\`\`\`\n\n`
        }
        
        if (block?.blockType === 'banner') {
          const content = block.content ? convertRichTextToMarkdown(block.content) : ''
          return `> **${block.style || 'Info'}**: ${content}\n\n`
        }
        
        if (block?.blockType === 'personalReflection') {
          const content = block.content ? convertRichTextToMarkdown(block.content) : ''
          return `---\n\n**Personal Reflection**: ${content}\n\n---\n\n`
        }
        
        return ''

      case 'linebreak':
        return '\n'

      default:
        // Handle arrays of children
        if (node.children && Array.isArray(node.children)) {
          return node.children.map(processNode).join('')
        }
        return ''
    }
  }

  return content.root.children.map(processNode).join('')
}

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

    // Convert post to markdown
    const markdown = generateMarkdown(post)

    // Create filename
    const filename = `${post.slug || post.title.toLowerCase().replace(/\s+/g, '-')}.md`

    return new Response(markdown, {
      headers: {
        'Content-Type': 'text/markdown',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error('Export error:', error)
    return NextResponse.json({ error: 'Export failed' }, { status: 500 })
  }
}

function generateMarkdown(post: any): string {
  let markdown = ''

  // Add frontmatter
  markdown += '---\n'
  markdown += `title: "${post.title}"\n`
  markdown += `slug: "${post.slug}"\n`
  if (post.excerpt) markdown += `excerpt: "${post.excerpt}"\n`
  if (post.readingTime) markdown += `readingTime: ${post.readingTime}\n`
  markdown += `createdAt: "${post.createdAt}"\n`
  markdown += `updatedAt: "${post.updatedAt}"\n`
  if (post.publishedAt) markdown += `publishedAt: "${post.publishedAt}"\n`
  if (post._status) markdown += `status: "${post._status}"\n`
  
  // Add featured image
  if (post.featuredImage && typeof post.featuredImage === 'object') {
    markdown += `featuredImage: "${process.env.NEXT_PUBLIC_SERVER_URL}${post.featuredImage.url}"\n`
  }
  
  // Add tags if they exist
  if (post.tags && Array.isArray(post.tags)) {
    const tagNames = post.tags.map((tag: any) => 
      typeof tag === 'object' ? tag.name : tag
    ).filter(Boolean)
    if (tagNames.length > 0) {
      markdown += `tags: [${tagNames.map((tag: string) => `"${tag}"`).join(', ')}]\n`
    }
  }
  
  markdown += '---\n\n'

  // Add title
  markdown += `# ${post.title}\n\n`

  // Add excerpt if exists
  if (post.excerpt) {
    markdown += `${post.excerpt}\n\n`
  }

  // Add featured image in content
  if (post.featuredImage && typeof post.featuredImage === 'object') {
    const alt = post.featuredImage.alt || post.title
    markdown += `![${alt}](${process.env.NEXT_PUBLIC_SERVER_URL}${post.featuredImage.url})\n\n`
  }

  // Add main content
  if (post.content) {
    markdown += convertRichTextToMarkdown(post.content)
  }

  // Add reading time at the end
  if (post.readingTime) {
    markdown += `\n---\n\n*Reading time: ${post.readingTime} minutes*\n`
  }

  return markdown
}
