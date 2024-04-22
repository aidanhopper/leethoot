import Link from 'next/link'
import { Item, Grid, Box, Button, TextField, Typography, Paper } from '@mui/material';
export default function Game() {
  // Render the question, time remaining, and the possible answers.<
  let question = "this is gonna be some random question"
  let ans_1 = "correct answer"
  let ans_2 = "incorrect answer"
  let ans_3 = "incorrect answer"
  let ans_4 = "incorrect answer"
  const paper_container_style = {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '280px',
  }
  const answer_grid_container_style = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: '20px',
  }
  const question_text_container_style = {
    paddingTop: '40px',
  }
  return (
    <div>
      <div style = {question_text_container_style}>
      <Typography variant="h6" align="center" gutterBottom style={{ marginTop: '40px' }}>
          {question}
        </Typography>
      </div>
      <div style={answer_grid_container_style}>
        <Grid container spacing={2}>
          <Grid item xs= {6}>
            <Paper elevation={3} style={paper_container_style}>
              <Typography variant="body1">
                {ans_1}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs= {6}>
          <Paper elevation={3} style={paper_container_style}>
              <Typography variant="body1">
                {ans_2}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs= {6}>
          <Paper elevation={3} style={paper_container_style}>
              <Typography variant="body1">
                {ans_3}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs= {6}>
          <Paper elevation={3} style={paper_container_style}>
              <Typography variant="body1">
                {ans_4}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
)
}
