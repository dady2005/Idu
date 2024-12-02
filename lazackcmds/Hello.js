export async function all(m) {
  // when someone sends you a hello message
  if (
    (m.mtype === 'hellomessage' ||
      m.text.startsWith('Hello') ||
      m.text.startsWith('Hi') ||
      m.text.startsWith('Mambo') ||
      m.text.startsWith('Oy') ||
      m.text.startsWith('Niaje') ||
      m.text.startsWith('kaka')) &&
    !m.isBaileys &&
    !m.isGroup
  ) {
    // Send a welcome message with mentions
    await this.sendMessage(
      m.chat,
      {
        text: `*WELCOME ITS ME JUST REPLYING*      
        morning or evening @${m.sender.split('@')[0]} 
        i may be offline or i may be slow to respond you but wait i will be back soon 😇`.trim(),
      },
      { mentions: [m.sender] }
    );

    // React to the message
    m.react('🤫');
  }

  return true; // Return true instead of !0 for clarity
     }
