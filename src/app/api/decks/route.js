export const dynamic = 'force-dynamic' // static by default, unless reading the request

import { kv } from '@vercel/kv'

export async function POST(request) {
  try {
    // Get the deck name and head ID of the first question from the request body
    const { deckName, headID } = await request.json()

    // Generate a unique key for the deck
    const key = `deck:${crypto.randomUUID()}`

    // Save the new deck to the KV store
    await kv.set(key, { deckName, headID })

    return Response.json({ key })
  } catch (error) {
    return Response.error('Failed to create deck', { error })
  }
}

export async function GET(request) {
  return Response.json({ decks: [] })
}

export async function PUT(request) {
  return Response.error('Not implemented')
}

export async function DELETE(request) {
  return Response.error('Not implemented')
}
