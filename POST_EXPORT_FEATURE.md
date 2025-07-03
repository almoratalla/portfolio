# Post Export Feature

## Overview
The Post Export feature allows you to export individual posts from the PayloadCMS admin panel in two formats:
- **Markdown (.md)**: Human-readable format with content and metadata
- **JSON (.json)**: Raw data format for programmatic use

## How to Use

### In the Admin Panel
1. Navigate to any post in the admin panel
2. At the top of the post editor, you'll see an "Export Post" section
3. Click either:
   - **Export as Markdown**: Downloads a `.md` file with formatted content
   - **Export as JSON**: Downloads a `.json` file with raw post data

### Export Formats

#### Markdown Export
The Markdown export includes:
- **Frontmatter**: Title, slug, excerpt, reading time, dates, status, featured image, tags
- **Content**: Formatted content with proper markdown syntax
- **Media**: Images with alt text and captions
- **Code blocks**: Properly formatted with language syntax highlighting
- **Special blocks**: Personal reflections, banners, etc.

Example markdown structure:
```markdown
---
title: "My Post Title"
slug: "my-post-title"
excerpt: "Brief description"
readingTime: 5
createdAt: "2025-01-01T00:00:00.000Z"
status: "published"
featuredImage: "https://example.com/image.jpg"
---

# My Post Title

Brief description

![Featured Image](https://example.com/image.jpg)

Post content here...

---

*Reading time: 5 minutes*
```

#### JSON Export
The JSON export includes:
- All post fields and metadata
- Complete content structure (Lexical editor format)
- Media relationships with full object data
- Author information
- Related posts
- SEO metadata

## Technical Implementation

### API Endpoints
- `GET /api/export-post?id={postId}` - Export as Markdown
- `GET /api/export-post-json?id={postId}` - Export as JSON

### Files Modified
1. `src/app/api/export-post/route.ts` - Markdown export API
2. `src/app/api/export-post-json/route.ts` - JSON export API  
3. `src/components/ExportPostButton.tsx` - Admin panel UI component
4. `src/collections/Posts/index.ts` - Added export UI to post collection

### Content Conversion
The Markdown export includes a sophisticated content converter that handles:
- **Rich text**: Paragraphs, headings, lists, quotes
- **Formatting**: Bold, italic, code, links
- **Media blocks**: Images with captions and alt text
- **Code blocks**: Syntax highlighting preservation
- **Custom blocks**: Personal reflections, banners, etc.

## Use Cases

### Content Migration
- Move posts to other platforms (Jekyll, Hugo, etc.)
- Create backups of your content
- Share posts with external collaborators

### Content Repurposing
- Create documentation from blog posts
- Generate social media content
- Prepare content for newsletters

### Development & Backup
- Version control your content
- Create content snapshots
- Develop offline content workflows

## Security & Access
- Export functionality is only available to authenticated admin users
- Exports respect the same access controls as the admin panel
- No sensitive system data is included in exports
- Media URLs are properly formatted for external access

## Troubleshooting

### Common Issues
1. **Export button not visible**: Ensure you're logged in as an admin user
2. **Download fails**: Check browser popup blockers
3. **Markdown formatting issues**: Some complex nested structures may need manual adjustment
4. **Missing images**: Ensure media files are publicly accessible

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- JavaScript must be enabled
- Popup blockers may interfere with downloads
