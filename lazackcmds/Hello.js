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
    this.sendButton(m.chat, `*FRESH/POUW/VEAP/KAMAKAWA*      
    NIPO KWA AJILI YA@${m.sender.split('@')[0]} 
    NAKUSIKILIZA SHE/HE NAMBIE  😇
  `.trim(), igfg, null, [['NAKUSALIMIA', '.'],['AU BASI', '.']] , m, { mentions: [m.sender] })
    m.react('🥱')
  }

  return !0
}
