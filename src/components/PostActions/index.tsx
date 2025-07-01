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
  variant?: 'horizontal' | 'vertical'
}

export const PostActions: React.FC<PostActionsProps> = ({
  postId,
  shareData,
  className = '',
  showViews = true,
  trackViews = true,
  variant = 'horizontal',
}) => {
  const layoutClasses =
    variant === 'horizontal' ? 'flex items-center justify-between' : 'flex flex-col gap-4'

  return (
    <div className={`${layoutClasses} ${className}`}>
      {showViews && <PageViews pageId={postId} trackView={trackViews} className="flex-shrink-0" />}

      <SocialShare data={shareData} variant="compact" className="flex-shrink-0" />
    </div>
  )
}
