import React from 'react'
import { redirect } from 'next/navigation'
import { PageViews } from '@/components/PageViews'
import { SocialShare } from '@/components/SocialShare'
import { PostActions } from '@/components/PostActions/enhanced'

export default function TestPageViewsPage() {
  // Redirect to home page in production
  if (process.env.NODE_ENV === 'production') {
    redirect('/')
  }
  const testPageId = 'test-page-views-ui'
  const pageUrl = 'http://localhost:3000/test-page-views'
  const pageTitle = 'Page Views Test Page'
  const pageDescription = 'Testing Firebase Firestore page view tracking functionality'

  // Share data object for SocialShare component
  const shareData = {
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    hashtags: ['firebase', 'nextjs', 'pageviews'],
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Development Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-800">
                <strong>Development Only:</strong> This page is only available in development mode
                and will redirect to the home page in production.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Page Views Test Page</h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-700 mb-4">
            This page is designed to test the Firebase Firestore page view tracking functionality.
            Each time you visit or refresh this page, the view count should increment and be
            persistently stored in Firestore.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Test Instructions:</h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Check the current view count below</li>
            <li>Refresh the page to increment the count</li>
            <li>Open the page in a new tab/window</li>
            <li>Verify the count persists across browser sessions</li>
            <li>Test the social sharing buttons</li>
          </ol>

          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Technical Details:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <strong>Page ID:</strong> {testPageId}
              </li>
              <li>
                <strong>Storage:</strong> Firebase Firestore
              </li>
              <li>
                <strong>Collection:</strong> alainmoratalla_pageViews
              </li>
              <li>
                <strong>API Endpoint:</strong> /api/page-views/{testPageId}
              </li>
            </ul>
          </div>
        </div>

        {/* Test Individual Components */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Individual Page Views Component:</h3>
            <PageViews pageId={testPageId} />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Individual Social Share Component:</h3>
            <SocialShare data={shareData} showLabels={true} variant="expanded" />
          </div>
        </div>

        {/* Test Combined Component */}
        <div className="border-t pt-6">
          <h3 className="font-semibold text-gray-800 mb-4 text-center">
            Combined PostActions Component (as used in blog posts):
          </h3>
          <PostActions
            postId={testPageId}
            shareData={shareData}
            variant="horizontal"
            viewsVariant="detailed"
            shareVariant="expanded"
          />
        </div>

        {/* Debug Information */}
        <div className="mt-8 pt-6 border-t">
          <details className="bg-gray-50 p-4 rounded-lg">
            <summary className="font-semibold text-gray-800 cursor-pointer">
              Debug Information (Click to expand)
            </summary>
            <div className="mt-4 text-sm text-gray-600">
              <p>
                <strong>Environment:</strong> {process.env.NODE_ENV}
              </p>
              <p>
                <strong>Firebase Project:</strong> {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}
              </p>
              <p>
                <strong>Server URL:</strong> {process.env.NEXT_PUBLIC_SERVER_URL}
              </p>
              <p>
                <strong>Analytics:</strong> Google Analytics + Vercel Analytics
              </p>
              <p>
                <strong>Timestamp:</strong> {new Date().toISOString()}
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Page Views Test - Firebase Firestore Integration',
  description: 'Test page for verifying Firebase Firestore page view tracking functionality',
}
