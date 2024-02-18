export const dynamic = 'force-dynamic' // static by default, unless reading the request

import { kv } from '@vercel/kv'

export async function POST(request) {
  return Response.error('Not implemented')
}

export async function GET(request) {
  return Response.error('Not implemented')
}

export async function PUT(request) {
  return Response.error('Not implemented')
}

export async function DELETE(request) {
  return Response.error('Not implemented')
}
