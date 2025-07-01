// Social sharing utilities
export interface ShareData {
  url: string
  title: string
  description?: string
  image?: string
  hashtags?: string[]
}

export const shareUrls = {
  facebook: (data: ShareData) =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url)}`,

  twitter: (data: ShareData) => {
    const hashtags = data.hashtags ? data.hashtags.join(',') : ''
    return `https://twitter.com/intent/tweet?url=${encodeURIComponent(data.url)}&text=${encodeURIComponent(data.title)}&hashtags=${hashtags}`
  },

  linkedIn: (data: ShareData) =>
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(data.url)}`,

  whatsApp: (data: ShareData) =>
    `https://wa.me/?text=${encodeURIComponent(`${data.title} ${data.url}`)}`,

  telegram: (data: ShareData) =>
    `https://t.me/share/url?url=${encodeURIComponent(data.url)}&text=${encodeURIComponent(data.title)}`,

  reddit: (data: ShareData) =>
    `https://reddit.com/submit?url=${encodeURIComponent(data.url)}&title=${encodeURIComponent(data.title)}`,

  pinterest: (data: ShareData) =>
    `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(data.url)}&description=${encodeURIComponent(data.title)}&media=${encodeURIComponent(data.image || '')}`,
}

// Instagram Story sharing (requires Instagram app)
export const shareToInstagramStory = async (data: ShareData) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: data.title,
        text: data.description,
        url: data.url,
      })
    } catch (error) {
      console.log('Error sharing to Instagram:', error)
      // Fallback: copy to clipboard
      copyToClipboard(`${data.title} ${data.url}`)
    }
  } else {
    // Fallback: copy to clipboard
    copyToClipboard(`${data.title} ${data.url}`)
  }
}

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
    return false
  }
}

export const openShareWindow = (url: string, title: string) => {
  const width = 600
  const height = 400
  const left = (window.innerWidth - width) / 2
  const top = (window.innerHeight - height) / 2

  window.open(
    url,
    'share',
    `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`,
  )
}
