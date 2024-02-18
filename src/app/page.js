import Link from 'next/link'
import { Box, Button, TextField, Typography } from '@mui/material';

export default function Home() {

  const button_margin = 2

  return (
    <main>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Button variant="contained" size="large" sx={{ m: button_margin }} href="/host/decks">Host</Button>
        <Button variant="contained" size="large" sx={{ m: button_margin }} href="/enter-game">Player</Button>
      </Box>
    </main>
  )
}
