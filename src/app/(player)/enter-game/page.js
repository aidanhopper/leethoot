import Link from 'next/link'
import { Grid, Box, Button, TextField, Typography } from '@mui/material';

export default function EnterGame() {
  //  User enters session id, player's name, and render a join game button.
  const textbox_margin = 2
  return (
    <Grid container
      direction="column"
      justifyContent="center"
      height="100vh"
      alignItems="center"
    >
      <TextField id="standard-basic" label="Session ID" variant="standard" sx={{ m: textbox_margin }} />
      <TextField id="standard-basic" label="Name" variant="standard" sx={{ m: textbox_margin }} />
      <Button variant="contained" size="large" sx={{ m: textbox_margin }} href="/lobby">submit</Button>
    </Grid>
  )
}
