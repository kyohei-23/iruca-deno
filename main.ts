import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

// const ROOM_ID = Deno.env.get('ROOM_ID')
// const API_KEY = Deno.env.get('API_KEY')



serve(async (req)=> {
  const body:JSON = await req.json()
  const body_string = JSON.stringify(body)
  const res = await fetch('sas')
  return new Response(body_string)
})