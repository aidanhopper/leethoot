export default function Decks() {

  const button_padding = 2

  return (
    <main>
      <Box 
        display="flex"
        justifyContent="center"
        sx={{mx: 5}}
        alignItems="center"
        height="100vh">
        <Button variant="contained" size="large" sx={{m: button_padding }} href="/game">Start Game</Button>
      </Box>
    </main>
  )
}