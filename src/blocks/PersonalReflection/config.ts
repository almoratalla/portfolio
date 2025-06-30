import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const PersonalReflection: Block = {
  slug: 'personalReflection',
  labels: {
    singular: 'Personal Reflection',
    plural: 'Personal Reflections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Personal Reflection',
      label: 'Reflection Title',
      admin: {
        description:
          'Optional title for this reflection section (e.g., "My Thoughts", "Key Takeaway", etc.)',
      },
      validate: (value) => {
        if (value && typeof value !== 'string') {
          return 'Title must be a string'
        }
        return true
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: 'Your Reflection',
      required: true,
      admin: {
        description:
          "Share your personal thoughts, insights, or commentary on the speaker's content.",
      },
      validate: (value) => {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          return 'Content is required'
        }
        return true
      },
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'default',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Highlighted', value: 'highlighted' },
        { label: 'Callout', value: 'callout' },
        // Temporarily disabled due to validation issue
        { label: 'Sidebar', value: 'sidebar' },
      ],
      admin: {
        description: 'Choose how this reflection should be displayed visually.',
      },
    },
    {
      name: 'showAuthor',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show "Personal Reflection" indicator',
      admin: {
        description:
          "Display a visual indicator that this is your personal reflection, not the speaker's content.",
      },
    },
  ],
  interfaceName: 'PersonalReflectionBlock',
}
