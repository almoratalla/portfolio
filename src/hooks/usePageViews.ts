// Hook for tracking and displaying page views
import { useEffect, useState } from 'react'

interface PageViewsData {
  views: number
  lastViewed: string
}

export const usePageViews = (pageId: string, trackView: boolean = true) => {
  const [views, setViews] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const trackPageView = async () => {
      if (!pageId) return

      try {
        // Get current views
        const response = await fetch(`/api/page-views/${pageId}`, {
          method: 'GET',
        })

        if (response.ok) {
          const data: PageViewsData = await response.json()
          setViews(data.views)
        }

        // Track new view if enabled
        if (trackView) {
          const trackResponse = await fetch(`/api/page-views/${pageId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              timestamp: new Date().toISOString(),
            }),
          })

          if (trackResponse.ok) {
            const updatedData: PageViewsData = await trackResponse.json()
            setViews(updatedData.views)
          }
        }
      } catch (error) {
        console.error('Error tracking page view:', error)
      } finally {
        setIsLoading(false)
      }
    }

    trackPageView()
  }, [pageId, trackView])

  return { views, isLoading }
}
