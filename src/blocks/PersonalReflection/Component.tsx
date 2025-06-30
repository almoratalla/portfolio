import React from 'react'
import RichText from '@/components/RichText'
import type { PersonalReflectionBlock as PersonalReflectionBlockProps } from '@/payload-types'

type Props = {
  className?: string
} & PersonalReflectionBlockProps

export const PersonalReflectionBlockComponent: React.FC<Props> = ({
  className,
  content,
  title,
  style = 'default',
  showAuthor = true,
}) => {
  const getStyleClasses = () => {
    const baseClasses = 'my-8 p-6 rounded-lg border-l-4 transition-all duration-200'

    switch (style) {
      case 'highlighted':
        return `${baseClasses} bg-blue-50 border-l-blue-500 dark:bg-blue-900/20 dark:border-l-blue-400 shadow-md`
      case 'sidebar':
        return `${baseClasses} bg-gray-50 border-l-gray-400 dark:bg-gray-800/50 dark:border-l-gray-500 ml-8 max-w-md float-right clear-right shadow-sm`
      case 'callout':
        return `${baseClasses} bg-amber-50 border-l-amber-500 dark:bg-amber-900/20 dark:border-l-amber-400 shadow-md`
      default:
        return `${baseClasses} bg-slate-50 border-l-slate-400 dark:bg-slate-800/50 dark:border-l-slate-500`
    }
  }

  const getIconByStyle = () => {
    switch (style) {
      case 'highlighted':
        return '💡'
      case 'callout':
        return '⚡'
      case 'sidebar':
        return '📝'
      default:
        return '💭'
    }
  }

  return (
    <div className={`${getStyleClasses()} ${className || ''}`}>
      <div className="flex items-start gap-3">
        {showAuthor && (
          <div className="flex-shrink-0 mt-1">
            <span className="text-lg" role="img" aria-label="reflection">
              {getIconByStyle()}
            </span>
          </div>
        )}
        <div className="flex-1">
          {showAuthor && (
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                {title || 'Personal Reflection'}
              </span>
              <div className="h-px bg-slate-300 dark:bg-slate-600 flex-1 ml-3"></div>
            </div>
          )}{' '}
          <div className="prose prose-slate dark:prose-invert max-w-none prose-sm">
            {content && <RichText content={content} enableGutter={false} />}
          </div>
        </div>
      </div>
    </div>
  )
}
