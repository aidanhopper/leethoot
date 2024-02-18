import Link from 'next/link'
import { Item, Grid, Box, Button, TextField, Typography } from '@mui/material';

export default function Game() {
  // Render the question, time remaining, and the possible answers.<
  let question = "This is a question!"
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      direction="column"
      height="100vh">
      <Typography variant="h3">
        {question}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
        </Grid>
        <Grid item xs={6} md={4}>
        </Grid>
        <Grid item xs={6} md={4}>
        </Grid>
        <Grid item xs={6} md={8}>
        </Grid>
      </Grid>
    </Grid>
  )
}
