import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/host/decks">Host</Link>
      <Link href="/enter-game">Player</Link>
    </main>
  )
}
