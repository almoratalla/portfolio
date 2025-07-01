# Page Views and Social Media Sharing Implementation

## 🎉 Features Implemented

Both page view tracking and social media sharing have been successfully implemented in your Payload CMS portfolio! Here's what's available:

## 📊 Page Views Tracking

### Components

- **`usePageViews` Hook** (`src/hooks/usePageViews.ts`): React hook for tracking and retrieving page views
- **`PageViews` Component** (`src/components/PageViews/index.tsx`): Display component for showing view counts
- **API Route** (`src/app/api/page-views/[pageId]/route.ts`): Backend endpoint for storing/retrieving views

### Features

- ✅ Automatic view tracking when page loads
- ✅ Real-time view count display
- ✅ Loading states
- ✅ Error handling
- ✅ Configurable tracking (can disable for specific instances)

## 📱 Social Media Sharing

### Components

- **Share Utilities** (`src/utils/share.ts`): Core sharing functions and URL generators
- **`SocialShare` Component** (`src/components/SocialShare/index.tsx`): Interactive sharing buttons
- **`PostActions` Component** (`src/components/PostActions/index.tsx`): Combined views + sharing

### Supported Platforms

- ✅ **Facebook** - Native share dialog
- ✅ **Twitter/X** - Tweet with title and hashtags
- ✅ **LinkedIn** - Professional sharing
- ✅ **WhatsApp** - Direct message sharing
- ✅ **Telegram** - Share via Telegram
- ✅ **Instagram** - Uses native Web Share API (mobile) or copy to clipboard
- ✅ **Reddit** - Submit to Reddit
- ✅ **Pinterest** - Pin with image support
- ✅ **Copy Link** - Copy URL to clipboard with visual feedback

## 🔧 Usage in Blog Posts

The features have been integrated into your blog post template (`src/app/(app)/posts/[slug]/page.tsx`):

### Header Section

```tsx
<PostActions
  postId={post.id}
  shareData={shareData}
  className="border-b border-gray-200 dark:border-gray-700 pb-4"
/>
```

### Footer Section

```tsx
<PostActions
  postId={post.id}
  shareData={shareData}
  trackViews={false} // Don't track again in footer
  variant="vertical"
  className="items-center gap-6"
/>
```

## 🛠 Customization Options

### Page Views Component

```tsx
<PageViews
  pageId="unique-page-id"
  trackView={true} // Enable/disable tracking
  className="custom-styles"
/>
```

### Social Share Component

```tsx
<SocialShare
  data={{
    url: 'https://example.com/post',
    title: 'Post Title',
    description: 'Post description',
    image: 'https://example.com/image.jpg',
    hashtags: ['blog', 'tech', 'tips'],
  }}
  variant="compact" // or "expanded"
  showLabels={true} // Show platform names
  className="custom-styles"
/>
```

### Combined Post Actions

```tsx
<PostActions
  postId="post-123"
  shareData={shareData}
  showViews={true} // Show/hide view count
  trackViews={true} // Enable/disable view tracking
  variant="horizontal" // or "vertical"
/>
```

## 🎨 Styling

The components are built with Tailwind CSS and include:

- **Dark mode support** - Automatically adapts to your theme
- **Responsive design** - Works on mobile and desktop
- **Accessible** - Proper ARIA labels and keyboard navigation
- **Customizable** - Easy to override styles with className prop

## 🔐 Privacy & Performance

### Page Views

- **In-memory storage** - Currently stores views in server memory
- **No personal data** - Only tracks page ID and timestamp
- **Production ready** - Can easily be upgraded to use database storage

### Social Sharing

- **No external trackers** - Direct platform URLs, no third-party services
- **Client-side only** - No data sent to your server
- **Privacy-friendly** - Users control what they share

## 🚀 Production Considerations

### For Page Views

To make persistent across server restarts, consider upgrading to:

- Database storage (PostgreSQL, MongoDB, etc.)
- Redis for high-performance caching
- External analytics service (Google Analytics, etc.)

### For Social Sharing

Current implementation is production-ready, but you can enhance with:

- Open Graph meta tags (already supported in your SEO setup)
- Custom share images per post
- Track share events with analytics
- A/B testing different share button styles

## 📖 Example Usage

Your blog posts now automatically include:

1. **View counter** at the top and bottom of each post
2. **Compact sharing buttons** in the header
3. **Expanded sharing options** in the footer
4. **All major social platforms** supported
5. **Mobile-optimized** sharing experience

The system is now live and ready to use! Users can share your blog posts across all major social platforms and see how popular each post is through the view counter.

## 🆘 Troubleshooting

### Page Views Not Tracking

- Check that the API route is accessible at `/api/page-views/[pageId]`
- Verify `NEXT_PUBLIC_SERVER_URL` is set in your environment variables
- Check browser console for any JavaScript errors

### Social Sharing Not Working

- Verify URLs are properly formatted and accessible
- Check that share buttons are clickable (not blocked by CSS)
- Test on different devices/browsers as some platforms have mobile-specific behavior

### Styling Issues

- All components accept `className` prop for custom styling
- Components use Tailwind classes - ensure your Tailwind config includes necessary classes
- Check for CSS conflicts with existing styles
