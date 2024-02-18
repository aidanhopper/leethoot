import Link from 'next/link'
import { Button, TextField, Typography } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Button href="/host/decks">Host</Button>
      <Button href="/enter-game">Player</Button>
    </main>
  )
}
