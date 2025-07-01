'use client'

import React from 'react'
import { SocialShare } from '@/components/SocialShare'
import { PageViews } from '@/components/PageViews'
import { ShareData } from '@/utils/share'

interface PostActionsProps {
  postId: string
  shareData: ShareData
  className?: string
  showViews?: boolean
  trackViews?: boolean
  variant?: 'horizontal' | 'vertical' | 'footer'
  viewsVariant?: 'minimal' | 'detailed' | 'badge'
  shareVariant?: 'compact' | 'expanded' | 'floating'
}

export const PostActions: React.FC<PostActionsProps> = ({
  postId,
  shareData,
  className = '',
  showViews = true,
  trackViews = true,
  variant = 'horizontal',
  viewsVariant = 'minimal',
  shareVariant = 'compact',
}) => {
  const getLayoutClasses = () => {
    switch (variant) {
      case 'vertical':
        return 'flex flex-col gap-4 items-center'
      case 'footer':
        return 'flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700'
      default:
        return 'flex items-center justify-between'
    }
  }

  return (
    <div className={`${getLayoutClasses()} ${className}`}>
      {showViews && (
        <PageViews
          pageId={postId}
          trackView={trackViews}
          variant={viewsVariant}
          showLabel={variant === 'footer'}
          className="flex-shrink-0"
        />
      )}

      <SocialShare
        data={shareData}
        variant={shareVariant}
        showLabels={variant === 'footer'}
        className="flex-shrink-0"
      />
    </div>
  )
}
