import Link from 'next/link'
import { Box, Button, TextField, Typography } from '@mui/material';
import absoluteUrl from 'next-absolute-url'
import { headers } from 'next/headers';

function postToQuestions(data) {
  const headersList = headers();
  const hostname = headersList.get('x-forwarded-host');
  var url = "https://" + hostname + "/api/questions";
  console.log(url)
  fetch(url, {
    cache: "no-cache",
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));

}

export default function Home() {

  postToQuestions({
    key: "key2",
    value: "serververcelval22222",
  });

  const button_margin = 2

  /*
  const file = fetch("http://localhost:3000/api/questions", { cache: "no-cache" })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
  */


  // POST request using fetch()


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
