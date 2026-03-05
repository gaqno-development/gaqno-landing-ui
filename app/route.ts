import { NextRequest, NextResponse } from 'next/server'

const defaultLocale = 'pt'

export function GET(request: NextRequest) {
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}`
  return NextResponse.redirect(url)
}
