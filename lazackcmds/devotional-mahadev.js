import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

let msg = `Buy me coffee Mickey™ in Halotel  Tanzania 0615944741 Mickdad Hamza!! 🙇`
let endpoint = `https://shizoapi.onrender.com/api/devotional/mahadev?apikey=shizo`
const response = await fetch(endpoint);
if (response.ok) {
      const imageBuffer = await response.buffer();
     /* await conn.sendButton(m.chat, imageBuffer, 'shizo.techie.err.png', msg, m, null, rpig);
  .trim(), igfg, null, [['NEXT', '.shiva'],['GET SC', '.repo']] , m, { mentions: [m.sender] })*/
  
     await conn.sendFile(m.chat, imageBuffer, 'https://i.imgur.com/uCdRzcY.jpeg', msg, m, null, rpig);
    } else {
      throw bug
    }
}

handler.tags = ['images']
handler.help = handler.command = ['denzel', 'Team']

export default handler
