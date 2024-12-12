import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@whiskeysockets/baileys"

let handler = async (m, { conn }) => {
  let msg = await generateWAMessageFromContent(m.chat, {
    imageMessage: {
      url: "https://i.imgur.com/gcB7GLV.jpeg",
      caption: "Denzel V2 click here \nhttps://github.com/Mickeymozy/Denzel-V2/",
      quoted: m
    }
  }, { quoted: m })

  return conn.relayMessage(m.chat, msg.message, {})
}

handler.help = ['script']
handler.tags = ['info']
handler.command = ['repo', 'repo']

export default handler
