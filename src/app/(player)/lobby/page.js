import Link from 'next/link'
import { Grid, Box, Button, TextField, Typography } from '@mui/material';

export default function Lobby() {
  // Show the lobby name, and tell them they're waiting for the host to start
  // the game.
  const sessionid = "1234"
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ mx: 5 }}
      alignItems="center"
      height="100vh">
      <Typography variant="h3">
        Waiting for host to start the game.
        <br />
        ID: {sessionid}
      </Typography>
    </Box>
  )
}
