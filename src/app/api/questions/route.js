export const dynamic = 'force-dynamic' // static by default, unless reading the request

import { kv } from '@vercel/kv'
require("dotenv").config()

/*
  const file = fetch("http://localhost:3000/api/questions", {cache:"no-cache"})
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
 */

export async function POST(request) {
  console.log("POST REQUEST");
  request.json().then((data) => {
    //console.log(data.key)
    kv.hset(data.key, {str: data.value});
  })
  return Response.json("good")
}

export async function GET(request) {
  console.log("GET REQUEST");
  const thing = await kv.hgetall('testHash');
  return Response.json(thing);
}

export async function PUT(request) {
  return Response.error('Not implemented')
}

export async function DELETE(request) {
  return Response.error('Not implemented')
}
