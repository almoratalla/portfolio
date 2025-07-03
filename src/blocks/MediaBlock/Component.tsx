import type { StaticImageData } from 'next/image'

import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    position = 'default',
    size = 'large',
    staticImage,
    disableInnerContainer,
  } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  // Define size classes for different image sizes
  const getSizeClasses = (size: string | null) => {
    switch (size) {
      case 'small':
        return 'max-w-sm mx-auto' // ~384px
      case 'medium':
        return 'max-w-2xl mx-auto' // ~672px
      case 'large':
        return 'max-w-4xl mx-auto' // ~896px
      default:
        return 'max-w-4xl mx-auto'
    }
  }

  // Also apply responsive sizing to ensure images look good on all devices
  const getResponsiveSizeClasses = (size: string | null) => {
    switch (size) {
      case 'small':
        return 'w-full max-w-sm mx-auto'
      case 'medium':
        return 'w-full max-w-2xl mx-auto'
      case 'large':
        return 'w-full max-w-4xl mx-auto'
      default:
        return 'w-full max-w-4xl mx-auto'
    }
  }

  return (
    <div
      className={cn(
        '',
        {
          container: position === 'default' && enableGutter,
        },
        className,
      )}
    >
      {position === 'fullscreen' && (
        <div className="relative">
          <Media resource={media} src={staticImage} />
        </div>
      )}
      {position === 'default' && (
        <div className={cn(getResponsiveSizeClasses(size))}>
          <Media imgClassName={cn('rounded', imgClassName)} resource={media} src={staticImage} />
        </div>
      )}
      {caption && (
        <div
          className={cn(
            'mt-6 text-center',
            {
              container: position === 'fullscreen' && !disableInnerContainer,
              [getResponsiveSizeClasses(size)]: position === 'default',
            },
            captionClassName,
          )}
        >
          <RichText content={caption} enableGutter={false} />
        </div>
      )}
    </div>
  )
}
