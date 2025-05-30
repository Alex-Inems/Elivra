// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Only allow access to /maintenance
export function middleware(request: NextRequest) {
  const maintenanceMode = true

  if (maintenanceMode && !request.nextUrl.pathname.startsWith('/maintenance')) {
    const url = request.nextUrl.clone()
    url.pathname = '/maintenance'
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}