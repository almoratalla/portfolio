// API route for handling page views with Firebase Firestore (Admin SDK)
import { NextRequest, NextResponse } from 'next/server'
import { getAdminDb } from '@/lib/firebase-admin'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ pageId: string }> },
) {
  const { pageId } = await params

  if (!pageId) {
    return NextResponse.json({ error: 'Page ID is required' }, { status: 400 })
  }

  try {
    // Get Firestore instance and document reference
    const adminDb = await getAdminDb()
    const docRef = adminDb.collection('alainmoratalla_pageViews').doc(pageId)
    const doc = await docRef.get()

    if (doc.exists) {
      const data = doc.data()
      return NextResponse.json({
        views: data?.views || 0,
        lastViewed: data?.lastViewed || new Date().toISOString(),
      })
    } else {
      // Document doesn't exist, create it with initial values
      const initial = {
        views: 0,
        lastViewed: new Date().toISOString(),
      }
      await docRef.set(initial)
      return NextResponse.json(initial)
    }
  } catch (error) {
    console.error('Error fetching page views:', error)
    return NextResponse.json({ error: 'Failed to fetch page views' }, { status: 500 })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ pageId: string }> },
) {
  const { pageId } = await params

  if (!pageId) {
    return NextResponse.json({ error: 'Page ID is required' }, { status: 400 })
  }

  try {
    const body = await request.json()

    // Get Firestore instance and document reference
    const adminDb = await getAdminDb()
    const docRef = adminDb.collection('alainmoratalla_pageViews').doc(pageId)
    const doc = await docRef.get()

    let currentViews = 0
    if (doc.exists) {
      const data = doc.data()
      currentViews = data?.views || 0
    }

    const newViews = currentViews + 1
    const updated = {
      views: newViews,
      lastViewed: new Date().toISOString(),
    }

    // Update or create the document
    await docRef.set(updated)

    console.log(`Page view tracked for ${pageId}: ${newViews} views`)

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Error updating page views:', error)
    return NextResponse.json({ error: 'Failed to update page views' }, { status: 500 })
  }
}
