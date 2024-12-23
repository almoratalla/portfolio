import type { CollectionConfig } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { readdirSync } from 'fs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const env = process.env.NODE_ENV
console.log('dirname', dirname)
console.log('cwd: ', process.cwd())
try {
  console.log(
    'dirname files',
    readdirSync(path.resolve(dirname, '../../')),
    readdirSync(path.resolve(dirname)),
    readdirSync(
      path.resolve(dirname, env === 'development' ? '../../public/media' : '../../uploads'),
    ),
    readdirSync(process.cwd()),
  )
} catch (error) {
  console.log(error)
}
try {
  console.log('dirname files cwd', readdirSync(process.cwd()))
  console.log(
    'cwd: ',
    env === 'development'
      ? path.resolve(dirname, '../../public/media')
      : path.resolve(process.cwd(), '../uploads'),
  )
} catch (error) {
  console.log(error)
}

console.log('ENV', env)

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      //required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
    },
  ],
  upload: {
    // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
    staticDir:
      env === 'development'
        ? path.resolve(dirname, '../../public/media')
        : path.resolve(process.cwd(), '../uploads'),
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
      },
      {
        name: 'square',
        width: 500,
        height: 500,
      },
      {
        name: 'small',
        width: 600,
      },
      {
        name: 'medium',
        width: 900,
      },
      {
        name: 'large',
        width: 1400,
      },
      {
        name: 'xlarge',
        width: 1920,
      },
    ],
  },
}
