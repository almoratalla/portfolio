# Media Block Size Control

## Overview

The Media Block now supports size control with three options: Small, Medium, and Large.

## How to Use

### In the Admin Panel

1. Go to your post in the admin panel
2. When adding or editing a Media Block in the rich text editor
3. You'll see a new "Size" dropdown field with these options:
   - **Small**: ~384px max width (good for inline images)
   - **Medium**: ~672px max width (good for content emphasis)
   - **Large**: ~896px max width (default, good for main content images)

### Size Classes Applied

- **Small**: `w-full max-w-sm mx-auto` (max-width: 384px)
- **Medium**: `w-full max-w-2xl mx-auto` (max-width: 672px)
- **Large**: `w-full max-w-4xl mx-auto` (max-width: 896px)

### Testing

You can test the different sizes by visiting: `/test-media-sizes`

## Technical Implementation

### Files Modified

1. `src/blocks/MediaBlock/config.ts` - Added size field configuration
2. `src/blocks/MediaBlock/Component.tsx` - Added size handling logic
3. `src/payload-types.ts` - Automatically updated with new types

### Usage in Code

```tsx
<MediaBlock position="default" size="medium" media={mediaObject} blockType="mediaBlock" />
```

## Notes

- The size setting only applies to the "Default" position
- "Fullscreen" position ignores size settings and uses full width
- All sizes are responsive and will scale down on smaller screens
- The caption is centered and also respects the size setting for consistent alignment
- Test pages are automatically hidden in production environments
