import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
const {
    proto,
    generateWAMessage,
    areJidsSameUser,
    prepareWAMessageMedia
} = (await import('@whiskeysockets/baileys')).default
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'

import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Africa/Nairobi').format('HH')
let wib = moment.tz('Africa/Nairobi').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

   let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
//let pp = (thumb)
let user = global.db.data.users[m.sender]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

let str = ` ❤️ *_Hello ${name}, ${greeting}! Welcome to my three menu!_* 🥳
╭═══〘 *DENZEL*𝑩𝑶𝑻 〙═══⊷❍
┃✰│━━━❮❮ CMD LINE ❯❯━━━━━━
┃✰│𝙽𝚊𝚖𝚎: ${global.author}
┃✰│𝚃𝚘𝚝𝚊𝚕: 700+ Features
┃✰│Network:LTE
┃✰│ᴠᴇʀꜱɪᴏɴ: BETA
┃✰│ᴏᴡɴᴇʀ : *DENZEL*      
┃✰│NUMBER: 255612130873
┃✰│Hoster: *Mickdady*
┃✰│ᴍᴏᴅᴇ: *Unkown*
┃✰│ᴘʀᴇғɪx: *Multi-Prefix*
┃✰│Uptime: ${uptime}               
┃✰│Today's Date: ${date}           
┃✰│Current Time: ${wib}            
┃✰│──────────●●►
┃✰│𝕏 https://x.com/@Mickey_mozy
┃✰│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃✰│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃✰│   © DENZEL 𝐌𝐃 𝐁𝐎𝐓
╰──────────────────
Thank you for choosing denzel bot
powered by Mickey
─═✧✧═─ DENZEL BOT─═✧✧═─`

let msg = generateWAMessageFromContent(m.chat, {

  viewOnceMessage: {

    message: {

        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },

        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: str
          }),

          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "Use The Below Buttons"
          }),

          header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image : { url: 'https://files.catbox.moe/8324jm.jpg'}}, { upload: conn.waUploadToServer})), 
            title: null,
            subtitle: null,
            hasMediaAttachment: false

          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                

await conn.relayMessage(msg.key.remoteJid, msg.message, {

  messageId: msg.key.id

})


}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu3', 'help','Mickey','commands'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  

    function ucapan() {
      const time = moment.tz('Africa/Nairobi').format('HH')
      let res = "happy early in the day☀️"
      if (time >= 4) {
        res = "Good Morning 🥱"
      }
      if (time >= 10) {
        res = "Good Afternoon 🫠"
     }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
       res = "Good Night 🌙"
      }
      return res
      }
