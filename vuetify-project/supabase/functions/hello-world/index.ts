import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { _name, events } = await req.json()
  console.log(events)
  if (events && events[0].type === "message") {
    // 文字列化したメッセージデータ
    const messages = [
      {
        "type": "text",
        "text": events[0].message.text
      }
    ]
    console.log({reply: messages})
    const dataString = JSON.stringify({
      replyToken: events[0].replyToken,
      messages: messages
    })

    // リクエストヘッダー
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + Deno.env.get('J9oI8NXgsoqXCs7dtYhalERRK1iGjmUGcgJ3Iwv3Gt7j2qmmqE48mz2rmNgc1/swhLlHbh7UCf0rfZl+OjskmFvBb0kgxEXRg4XF/07rT7l1PdiqqtZG1MdBMM1pgpsR+GEHF3NLq65dew3dXUqb8AdB04t89/1O/w1cDnyilFU=')
    }

    // https://developers.line.biz/ja/docs/messaging-api/nodejs-sample/#send-reply
    fetch('https://api.line.me/v2/bot/message/reply',
      {
        method: "POST",
        body: dataString,
        headers: headers,
      }
    ).then(r => {console.log(r)})
    .catch(e => { console.log(e) })
  }
  return new Response(
    JSON.stringify({status: 'ok'}),
    { headers: { "Content-Type": "application/json" } },
  )
})