# Creating Custom Blocks in Payload CMS - Complete Tutorial

## Overview

This tutorial shows you how to create custom blocks for Payload CMS rich text editors. We'll use the PersonalReflection block as an example and show you how to create new ones.

## Architecture of a Custom Block

Every custom block in Payload consists of 3 main parts:

1. **Block Configuration** (`config.ts`) - Defines fields and settings
2. **React Component** (`Component.tsx`) - Renders the block on frontend
3. **Integration** - Connects block to collections and serializers

## Step-by-Step Tutorial

### Step 1: Create Block Configuration

Create: `/src/blocks/YourBlockName/config.ts`

```typescript
import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const YourBlockName: Block = {
  slug: 'yourBlockName', // Unique identifier (camelCase)
  labels: {
    singular: 'Your Block Name', // Display name
    plural: 'Your Block Names',
  },
  fields: [
    // Define your fields here
    {
      name: 'title',
      type: 'text',
      label: 'Block Title',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: 'Content',
      required: true,
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'default',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Featured', value: 'featured' },
        { label: 'Minimal', value: 'minimal' },
      ],
      label: 'Style',
    },
    {
      name: 'showIcon',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show Icon',
    },
  ],
  interfaceName: 'YourBlockNameBlock', // TypeScript interface name
}
```

### Step 2: Create React Component

Create: `/src/blocks/YourBlockName/Component.tsx`

```typescript
import React from 'react'
import RichText from '@/components/RichText'
import type { YourBlockNameBlock as YourBlockNameProps } from '@/payload-types'

type Props = {
  className?: string
} & YourBlockNameProps

export const YourBlockNameComponent: React.FC<Props> = ({
  className,
  title,
  content,
  style = 'default',
  showIcon = true,
}) => {
  const getStyleClasses = () => {
    const baseClasses = 'my-6 p-4 rounded-lg border'

    switch (style) {
      case 'featured':
        return `${baseClasses} bg-blue-50 border-blue-200 dark:bg-blue-900/20`
      case 'minimal':
        return `${baseClasses} bg-gray-50 border-gray-200 dark:bg-gray-800/50`
      default:
        return `${baseClasses} bg-white border-gray-200 dark:bg-gray-900`
    }
  }

  const getIcon = () => {
    switch (style) {
      case 'featured': return '⭐'
      case 'minimal': return '📝'
      default: return '📋'
    }
  }

  return (
    <div className={`${getStyleClasses()} ${className || ''}`}>
      <div className="flex items-center gap-3 mb-3">
        {showIcon && (
          <span className="text-xl">{getIcon()}</span>
        )}
        {title && (
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {title}
          </h3>
        )}
      </div>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <RichText content={content} enableGutter={false} />
      </div>
    </div>
  )
}
```

### Step 3: Create Index File

Create: `/src/blocks/YourBlockName/index.ts`

```typescript
export { YourBlockName } from './config'
export { YourBlockNameComponent } from './Component'
```

### Step 4: Add to Posts Collection

Edit: `/src/collections/Posts/index.ts`

```typescript
// Add import
import { YourBlockName } from '../../blocks/YourBlockName/config'

// Add to BlocksFeature
BlocksFeature({
  blocks: [Banner, Code, MediaBlock, PersonalReflection, YourBlockName]
}),
```

### Step 5: Add to RichText Serializer

Edit: `/src/components/RichText/serialize.tsx`

```typescript
// Add import
import { YourBlockNameComponent } from '@/blocks/YourBlockName/Component'

// Add type import
import type {
  // ...existing imports
  YourBlockNameBlock as YourBlockNameProps,
} from '@/payload-types'

// Add to NodeTypes
export type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<
      | CTABlockProps
      | MediaBlockProps
      | BannerBlockProps
      | CodeBlockProps
      | PersonalReflectionBlockProps
      | YourBlockNameProps  // Add this
    >

// Add case in switch statement
switch (blockType) {
  // ...existing cases
  case 'yourBlockName':
    return (
      <YourBlockNameComponent
        className="col-start-2 mb-4"
        key={index}
        {...block}
      />
    )
  // ...rest of cases
}
```

### Step 6: Generate Types

```bash
npm run generate:types
```

### Step 7: Test Your Block

1. Restart your dev server
2. Go to Payload admin
3. Edit a post
4. Click "+" in rich text editor
5. Your new block should appear!

## Field Types You Can Use

```typescript
// Text Input
{
  name: 'title',
  type: 'text',
  required: true,
}

// Textarea
{
  name: 'description',
  type: 'textarea',
  rows: 4,
}

// Rich Text
{
  name: 'content',
  type: 'richText',
  editor: lexicalEditor({...}),
}

// Number
{
  name: 'priority',
  type: 'number',
  min: 1,
  max: 10,
}

// Select Dropdown
{
  name: 'category',
  type: 'select',
  options: [
    { label: 'Important', value: 'important' },
    { label: 'Normal', value: 'normal' },
  ],
}

// Checkbox
{
  name: 'featured',
  type: 'checkbox',
  defaultValue: false,
}

// Date
{
  name: 'publishDate',
  type: 'date',
}

// Upload (Media)
{
  name: 'image',
  type: 'upload',
  relationTo: 'media',
}

// Array of items
{
  name: 'tags',
  type: 'array',
  fields: [
    {
      name: 'tag',
      type: 'text',
    }
  ],
}

// Group of fields
{
  name: 'settings',
  type: 'group',
  fields: [
    {
      name: 'showBorder',
      type: 'checkbox',
    },
    {
      name: 'borderColor',
      type: 'text',
    },
  ],
}
```

## Advanced Examples

### Example 1: Quote Block

```typescript
// config.ts
export const Quote: Block = {
  slug: 'quote',
  labels: {
    singular: 'Quote',
    plural: 'Quotes',
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Quote Text',
    },
    {
      name: 'author',
      type: 'text',
      label: 'Author',
    },
    {
      name: 'authorTitle',
      type: 'text',
      label: 'Author Title',
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'default',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Large', value: 'large' },
        { label: 'Minimal', value: 'minimal' },
      ],
    },
  ],
  interfaceName: 'QuoteBlock',
}

// Component.tsx
export const QuoteComponent: React.FC<Props> = ({
  quote,
  author,
  authorTitle,
  style = 'default',
  className,
}) => {
  const sizeClasses = {
    default: 'text-lg',
    large: 'text-2xl',
    minimal: 'text-base',
  }

  return (
    <blockquote className={`border-l-4 border-blue-500 pl-6 py-4 my-6 ${className}`}>
      <p className={`italic ${sizeClasses[style]} text-gray-700 dark:text-gray-300`}>
        "{quote}"
      </p>
      {author && (
        <footer className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          — <cite className="font-semibold">{author}</cite>
          {authorTitle && <span className="ml-1">({authorTitle})</span>}
        </footer>
      )}
    </blockquote>
  )
}
```

### Example 2: Image Gallery Block

```typescript
// config.ts
export const ImageGallery: Block = {
  slug: 'imageGallery',
  labels: {
    singular: 'Image Gallery',
    plural: 'Image Galleries',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Gallery Title',
    },
    {
      name: 'images',
      type: 'array',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Image Caption',
        },
      ],
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'grid',
      options: [
        { label: 'Grid', value: 'grid' },
        { label: 'Masonry', value: 'masonry' },
        { label: 'Carousel', value: 'carousel' },
      ],
    },
  ],
  interfaceName: 'ImageGalleryBlock',
}
```

## Tips for Creating Great Blocks

1. **Keep it focused** - Each block should have one clear purpose
2. **Use good defaults** - Set sensible default values
3. **Think responsive** - Use Tailwind classes that work on all devices
4. **Add descriptions** - Use `admin.description` to help editors
5. **Validate inputs** - Use `required`, `min`, `max` where appropriate
6. **Consider accessibility** - Use proper ARIA labels and semantic HTML
7. **Test thoroughly** - Test in both light and dark modes

## Common Patterns

### Conditional Fields

```typescript
{
  name: 'showAuthor',
  type: 'checkbox',
},
{
  name: 'author',
  type: 'text',
  admin: {
    condition: (data) => Boolean(data.showAuthor),
  },
},
```

### Field Validation

```typescript
{
  name: 'email',
  type: 'email',
  validate: (value) => {
    if (!value?.includes('@')) {
      return 'Please enter a valid email address'
    }
    return true
  },
},
```

### Custom Field Descriptions

```typescript
{
  name: 'priority',
  type: 'number',
  admin: {
    description: 'Higher numbers appear first. Range: 1-10',
    step: 1,
  },
  min: 1,
  max: 10,
},
```

This tutorial gives you everything you need to create custom blocks in Payload CMS! Start with simple blocks and gradually add more complex features as you become comfortable with the pattern.
