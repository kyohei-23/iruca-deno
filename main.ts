// import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
// @deno-types="npm:@types/node-schedule"
import { scheduleJob } from "npm:node-schedule"

// const ROOM_ID = Deno.env.get('ROOM_ID')
// const API_KEY = Deno.env.get('API_KEY')

// type CalendarEvent = {
//   title: string;
//   start: Date;
//   end: Date;
// }

// type ReqFromGAS = {
//   user: string;
//   events: CalendarEvent[];
//   str: string;
// }

// serve(async (req)=> {
//   /**
//    * 識別ヘッダーがない、もしくはbodyがjson形式でない場合のリクエストを受け取ったら403エラーを戻す
//    * referrerをとるのがベストだと思うが、実行がそれぞれのAppSriptになるため、代わりにrequest headerを利用
//    */
//   if(
//     req.headers.get('gas-iruca-relation') === null ||
//     req.headers.get('Content-Type') !== 'application/json'
//   ) return new Response("your request is not allowed", {status: 403})

//   const body = await req.json() as Awaited<Promise<ReqFromGAS>>
//   const body_string = body.str
//   for(const event of body.events){
//     scheduleJob(event.start, async ()=>{
//       await fetch("")
//     })
//   }
//   return new Response(body_string)
// })

scheduleJob(new Date('2023-03-14T16:00:00'), ()=>{
  console.log("scheduled job is fired")
})