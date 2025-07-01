'use client'

import React from 'react'
import { usePageViews } from '@/hooks/usePageViews'
import { Eye, TrendingUp } from 'lucide-react'

interface PageViewsProps {
  pageId: string
  trackView?: boolean
  className?: string
  variant?: 'minimal' | 'detailed' | 'badge'
  showIcon?: boolean
  showLabel?: boolean
}

export const PageViews: React.FC<PageViewsProps> = ({
  pageId,
  trackView = true,
  className = '',
  variant = 'minimal',
  showIcon = true,
  showLabel = false,
}) => {
  const { views, isLoading } = usePageViews(pageId, trackView)

  const formatViews = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'detailed':
        return 'flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700'
      case 'badge':
        return 'inline-flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800'
      default:
        return 'flex items-center gap-1.5 text-gray-600 dark:text-gray-400'
    }
  }

  const getTextSize = () => {
    switch (variant) {
      case 'detailed':
        return 'text-sm font-medium'
      case 'badge':
        return 'text-xs font-medium'
      default:
        return 'text-sm'
    }
  }

  if (isLoading) {
    return (
      <div className={`${getVariantClasses()} ${className}`}>
        {showIcon && (
          <div className="animate-pulse">
            <Eye className="w-4 h-4" />
          </div>
        )}
        <div
          className={`animate-pulse bg-gray-300 dark:bg-gray-600 rounded h-4 w-8 ${getTextSize()}`}
        />
        {showLabel && variant === 'detailed' && (
          <div className="animate-pulse bg-gray-300 dark:bg-gray-600 rounded h-4 w-12" />
        )}
      </div>
    )
  }

  return (
    <div className={`${getVariantClasses()} ${className}`} title={`${views} total views`}>
      {showIcon && (
        <Eye
          className={`w-4 h-4 ${variant === 'badge' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
        />
      )}
      <span
        className={`${getTextSize()} ${variant === 'badge' ? 'text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'}`}
      >
        {formatViews(views)}
      </span>
      {showLabel && (
        <span
          className={`${getTextSize()} ${variant === 'badge' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
        >
          {views === 1 ? 'view' : 'views'}
        </span>
      )}
      {variant === 'detailed' && views > 0 && (
        <TrendingUp className="w-3 h-3 text-green-500 dark:text-green-400" />
      )}
    </div>
  )
}
