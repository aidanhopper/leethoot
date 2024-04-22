import Link from 'next/link'
import { Item, Grid, Box, Button, TextField, Typography } from '@mui/material';
export default function Game() {
  // Render the question, time remaining, and the possible answers.<
  let question = "this is gonna be some random question"
  const grid_buttonA_style = {
      height: '280px',
      color: 'white',
      backgroundColor: 'red',
  }

  const grid_buttonB_style = {
      height: '280px',
      color: 'white',
      backgroundColor: 'blue',
  }

  const grid_buttonC_style = {
      height: '280px',
      color: 'white',
      backgroundColor: 'green',
  }

  const grid_buttonD_style = {
      height: '280px',
      color: 'white',
      backgroundColor: 'orange',
  }

  const button_grid_container_style = {
    position: 'absolute',
    bottom: 0 , 
    width: '95%',
    paddingBottom: '40px',
    paddingLeft: '70px',
    }

    const question_text_container_style = {
        height: '120px',
        backgroundColor: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px auto 0', // Add margin-top for lowering from the top
        maxWidth: '90%',
        padding: '0 20px',
    }

    const bodyStyle = {
        backgroundImage: `url('/media/leethoot_background.gif')`,
        backgroundRepeat: 'repeat', // Set the background to repeat
        backgroundSize: 'cover', // Cover the entire background
        minHeight: '100vh', // Ensure the background covers the entire viewport
        position: 'relative', // Position relative for positioning the content
    };


  return (
      <div style={bodyStyle}>
      <div style={question_text_container_style}>
        <Typography variant="h6" align="center" gutterBottom style={{ marginTop: '40px' }} color = 'white' fontSize = '32px'>
          {question}
        </Typography>
      </div>
      <div style={button_grid_container_style}>
        <Grid
        container rowSpacing={2} columnSpacing={3}>
          <Grid item xs = {6}>
            <Button variant="contained" color="error" fullWidth style={grid_buttonA_style} sx = {{fontSize: '128px'}}>A</Button>
          </Grid>
          <Grid item xs = {6}>
            <Button variant="contained" color="primary" fullWidth style={grid_buttonB_style} sx={{ fontSize: '128px' }}>B</Button>
          </Grid>
          <Grid item xs = {6}>
            <Button variant="contained" color="warning" fullWidth style={grid_buttonC_style} sx={{ fontSize: '128px' }}>C</Button>
          </Grid>
          <Grid item xs = {6}>
            <Button variant="contained" color="secondary" fullWidth style={grid_buttonD_style} sx={{ fontSize: '128px' }}>D</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
