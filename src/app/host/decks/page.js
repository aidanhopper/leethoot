import Link from 'next/link'
import { Box, Button, TextField, Typography } from '@mui/material';

export default function Decks() {

  const button_margin = 2;

  var deck =  [{ Question: "Which data structure uses LIFO (Last In, First Out) principle?", Answer: "Stack"}, 
  {Question: "What is the time complexity of searching for an element in a balanced binary search tree (BST)?", Answer: "O(log n)"},
  {Question: "In C++, what keyword is used to dynamically allocate memory?", Answer: "new"},
  {Question: "Which of the following is a sorting algorithm that has a worst-case time complexity of O(n^2)?", Answer: "Bubble Sort"},
  {Question: "What is the purpose of a constructor in C++?", Answer: "To initialize the values of class variables"},
  {Question: "Which data structure is used to implement priority queues efficiently?", Answer: "Heap"},
  {Question: "Which of the following is NOT a valid method of traversing a binary tree?", Answer: "Parallel Order"},
  {Question: "What is a linked list?", Answer: "A data structure consisting of a sequence of nodes where each node contains a reference to the next node in the sequence"}]
  
  
  return (

    <main>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh">
        <Button
        variant="contained" size="large" sx={{ m: button_margin }} href="/host/start">
          click me
        </Button>
      </Box>
    </main>
  )
}

