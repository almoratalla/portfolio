import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Block access to test pages and debug APIs in production
  if (process.env.NODE_ENV === 'production') {
    const pathname = request.nextUrl.pathname

    // List of test routes and debug APIs to block in production
    const testRoutes = [
      '/test-media-blocks',
      '/test-media-sizes',
      '/test-media',
      '/test-page-views',
      '/list-posts',
      '/debug-view',
      '/debug-post',
      '/api/debug-post',
    ]

    // Check if the current path starts with any test route
    const isTestRoute = testRoutes.some((route) => pathname.startsWith(route))

    if (isTestRoute) {
      // Return 404 for test routes in production
      return NextResponse.rewrite(new URL('/not-found', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - media (media files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|media).*)',
  ],
}
