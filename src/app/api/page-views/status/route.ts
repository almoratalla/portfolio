// API endpoint to check page views system status (development only)
import { NextRequest, NextResponse } from 'next/server'
import { getAdminDb } from '@/lib/firebase-admin'

export async function GET() {
  // Only allow in development mode
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 404 })
  }

  try {
    // Test Firebase connection
    const adminDb = await getAdminDb()

    // Get a sample of page views data
    const collectionRef = adminDb.collection('alainmoratalla_pageViews')
    const snapshot = await collectionRef.limit(5).get()

    const sampleData: any[] = []
    snapshot.forEach((doc) => {
      sampleData.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    return NextResponse.json({
      status: 'success',
      message: 'Page views system is operational',
      firebase: {
        connected: true,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        collection: 'alainmoratalla_pageViews',
        documentsCount: snapshot.size,
      },
      sampleData: sampleData,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Page views system check failed:', error)

    return NextResponse.json(
      {
        status: 'error',
        message: 'Page views system check failed',
        error: error instanceof Error ? error.message : 'Unknown error',
        firebase: {
          connected: false,
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        },
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
