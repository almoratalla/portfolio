'use client'

import React, { useState } from 'react'
import {
  ShareData,
  shareUrls,
  shareToInstagramStory,
  copyToClipboard,
  openShareWindow,
} from '@/utils/share'
import {
  Share2,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  Linkedin,
  Send,
  Copy,
  Check,
  ChevronDown,
  X,
} from 'lucide-react'

interface SocialShareProps {
  data: ShareData
  className?: string
  showLabels?: boolean
  variant?: 'compact' | 'expanded' | 'floating'
}

export const SocialShare: React.FC<SocialShareProps> = ({
  data,
  className = '',
  showLabels = false,
  variant = 'compact',
}) => {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleShare = (platform: string, url: string) => {
    if (platform === 'instagram') {
      shareToInstagramStory(data)
    } else {
      openShareWindow(url, `Share on ${platform}`)
    }
  }

  const handleCopyLink = async () => {
    const success = await copyToClipboard(data.url)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  const shareButtons = [
    {
      name: 'Facebook',
      key: 'facebook',
      url: shareUrls.facebook(data),
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
      hoverColor: 'hover:bg-blue-50 hover:text-blue-600',
    },
    {
      name: 'Twitter',
      key: 'twitter',
      url: shareUrls.twitter(data),
      icon: Twitter,
      color: 'bg-sky-500 hover:bg-sky-600 text-white',
      hoverColor: 'hover:bg-sky-50 hover:text-sky-600',
    },
    {
      name: 'Instagram',
      key: 'instagram',
      url: '',
      icon: Instagram,
      color:
        'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white',
      hoverColor:
        'hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600',
    },
    {
      name: 'WhatsApp',
      key: 'whatsapp',
      url: shareUrls.whatsApp(data),
      icon: MessageCircle,
      color: 'bg-green-500 hover:bg-green-600 text-white',
      hoverColor: 'hover:bg-green-50 hover:text-green-600',
    },
    {
      name: 'LinkedIn',
      key: 'linkedin',
      url: shareUrls.linkedIn(data),
      icon: Linkedin,
      color: 'bg-blue-700 hover:bg-blue-800 text-white',
      hoverColor: 'hover:bg-blue-50 hover:text-blue-700',
    },
    {
      name: 'Telegram',
      key: 'telegram',
      url: shareUrls.telegram(data),
      icon: Send,
      color: 'bg-blue-500 hover:bg-blue-600 text-white',
      hoverColor: 'hover:bg-blue-50 hover:text-blue-500',
    },
  ]

  if (variant === 'compact') {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 shadow-sm"
        >
          <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Share</span>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <>
            <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-4 z-50 min-w-[280px]">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Share this post
                </h4>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                {shareButtons.map((button) => {
                  const IconComponent = button.icon
                  return (
                    <button
                      key={button.key}
                      onClick={() => handleShare(button.key, button.url)}
                      className={`group relative p-3 rounded-lg transition-all duration-200 ${button.color} flex items-center justify-center hover:scale-105 active:scale-95`}
                      title={`Share on ${button.name}`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {button.name}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span>{copied ? 'Copied to clipboard!' : 'Copy link'}</span>
                </button>
              </div>
            </div>

            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          </>
        )}
      </div>
    )
  }

  if (variant === 'floating') {
    return (
      <div className={`space-y-3 ${className}`}>
        <div className="flex flex-col gap-2">
          {shareButtons.slice(0, 4).map((button) => {
            const IconComponent = button.icon
            return (
              <button
                key={button.key}
                onClick={() => handleShare(button.key, button.url)}
                className={`group flex items-center justify-center p-3 rounded-full transition-all duration-200 ${button.color} hover:scale-110 active:scale-95 shadow-lg`}
                title={`Share on ${button.name}`}
              >
                <IconComponent className="w-5 h-5" />
              </button>
            )
          })}

          <button
            onClick={handleCopyLink}
            className="group flex items-center justify-center p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
            title="Copy link"
          >
            {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>
      </div>
    )
  }

  // Expanded variant
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Share this post</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {shareButtons.map((button) => {
          const IconComponent = button.icon
          return (
            <button
              key={button.key}
              onClick={() => handleShare(button.key, button.url)}
              className={`group flex items-center gap-3 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-200 ${button.hoverColor} hover:border-transparent hover:shadow-md`}
            >
              <IconComponent className="w-5 h-5" />
              {showLabels && (
                <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-current">
                  {button.name}
                </span>
              )}
            </button>
          )
        })}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
        <button
          onClick={handleCopyLink}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-all duration-200 border border-gray-200 dark:border-gray-700"
        >
          {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
          <span className="font-medium">{copied ? 'Link copied to clipboard!' : 'Copy link'}</span>
        </button>
      </div>
    </div>
  )
}
