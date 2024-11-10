const userLastMessageMap = new Map();

export async function all(m) {
  const ONE_DAY = 24 * 60 * 60 * 1000; 

  const currentTime = Date.now();
  const userId = m.sender;

  if (userLastMessageMap.has(userId)) {
    const lastMessageTime = userLastMessageMap.get(userId);
    if (currentTime - lastMessageTime < ONE_DAY) {
      return;
    }
  }

  const greetings = [
    'Hello',
    'Hi',
    'Mambo',
    'bro',
    'hello',
    'Niaje',
    'Kaka',
    'Oya veap',
    'Mick'
  ];

  if (
    greetings.includes(m.text) &&
    !m.isBaileys &&
    !m.isGroup
  ) {
    this.sendButton(
      m.chat,
      `*ASANTE KWA KUWASILIANA NAMI*      
    HABARI HE/SHE @${m.sender.split('@')[0]} 
    NATUMAI NI MZIMA WA AFYA , L😇\n\n\n *what we offer*\n\n1. Heroku credit cards\n2. Bot deployment works 24/7\n3. social media followers\n4. Web coding and bug fixing\n\n\n\n>,
      igfg,
      null,
      m,
      { mentions: [m.sender] }
    );
    m.react('💕');

    userLastMessageMap.set(userId, currentTime);
  }

  return !0;
}
