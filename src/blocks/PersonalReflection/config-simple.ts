import type { Block } from 'payload'

export const PersonalReflectionSimple: Block = {
  slug: 'personalReflectionSimple',
  labels: {
    singular: 'Personal Reflection (Simple)',
    plural: 'Personal Reflections (Simple)',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Personal Reflection',
      label: 'Reflection Title',
      admin: {
        description: 'Optional title for this reflection section',
      },
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Your Reflection',
      required: true,
      admin: {
        description: 'Share your personal thoughts and insights',
        rows: 4,
      },
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'default',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Highlighted', value: 'highlighted' },
        { label: 'Sidebar', value: 'sidebar' },
        { label: 'Callout', value: 'callout' },
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
    },
  ],
  interfaceName: 'PersonalReflectionSimpleBlock',
}
