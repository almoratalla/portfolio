import { FieldHook } from 'payload'

// Calculate reading time based on content
export const calculateReadingTime: FieldHook = ({ data, siblingData }) => {
  if (siblingData.readingTime) {
    // If manually set, use that value
    return siblingData.readingTime
  }

  if (siblingData.content) {
    // Calculate based on content
    const text = JSON.stringify(siblingData.content)
    const wordsPerMinute = 200 // Average reading speed
    const wordCount = text.split(' ').length
    const readingTime = Math.ceil(wordCount / wordsPerMinute)

    return Math.max(1, readingTime) // Minimum 1 minute
  }

  return 1 // Default fallback
}
