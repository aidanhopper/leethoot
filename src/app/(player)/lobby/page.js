import Link from 'next/link'
import { Grid, Box, Button, TextField, Typography } from '@mui/material';

export default function Lobby() {
  // Show the lobby name, and tell them they're waiting for the host to start
  // the game.
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ mx: 5 }}
      alignItems="center"
      height="100vh">
      Waiting for host to start the game.
    </Box>
  )
}
