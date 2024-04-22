import Link from 'next/link'
import { Grid, Box, Button, TextField, Typography } from '@mui/material';
// import player from '..classes/player'

export default function EnterGame() {
  //  User enters session id, player's name, and render a join game button.
  const textbox_margin = 2
  // let test_player = new player();
  return (
    <div>
      <p1>hello</p1>
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
    </div>
  )
}
