export async function all(m) {
  // when someone sends you hello message
  if (
    (m.mtype === 'hellomessage' ||
      m.text.startsWith('Hello') ||
      m.text.startsWith('oya veap') ||
      m.text.startsWith('Mambo') ||
      m.text.startsWith('Oy') ||
      m.text.startsWith('Niaje') ||
      m.text.startsWith('kaka')) &&
      m.text.startsWith('Mkuu') ||
    !m.isBaileys &&
    !m.isGroup
 /* ) {
    this.sendMessage(
      m.chat,
      {
        text: `Hello @${m.sender.split('@')[0]}\nyou can rent the bot to join a group\n\n_For more info you can DM the owner_\n*Type* \`\`\`.owner\`\`\` *to contact the owner*`.trim(),
      },
      { quoted: m }*/
    ) {
    this.sendButton(m.chat, `*ASANTE KWA KUWASILIANA NA MICK*      
    KARIBU SANA@${m.sender.split('@')[0]} 
    KUWA NA SUBRA NITAKUJA HEWANI MDA SIO MREFU  😇
  `.trim(), igfg, null, [['OWNER HELP', '.grp'],['GET TEXT', '.repo']] , m, { mentions: [m.sender] })
    m.react('🥱')
  }

  return !0
}
