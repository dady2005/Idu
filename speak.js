import axios from "axios";

const model = ["bella", "echilling", "adam", "prabowo", "thomas_shelby", "michi_jkt48", "jokowi", "megawati", "nokotan", "boboiboy", "yanzgpt"];

const tts = async (text, voiceModel) => {
  if (!model.includes(voiceModel)) {
    throw new Error("Invalid voice model.");
  }
  
  try {
    const response = await axios.post("https://elevenlabs.io/app/speech-synthesis/text-to-speech", {
      text: text,
      voice: voiceModel
    }, {
      headers: {
        'xi-api-key': 'sk_231378f2f4b1c1c130f28323cbebf1de9470141d65069952', // Replace with your Eleven Labs API key
        'Content-Type': 'application/json'
      },
      responseType: "arraybuffer"
    });
    
    return response.data;
  } catch (error) {
    console.error("Error details:", error.response ? error.response.data : error.message);
    throw new Error("Failed to generate voice-over. Check the console for details.");
  }
};

let handler = async (message, { conn, text, args, usedPrefix, command }) => {
  if (!text && !(message.quoted && message.quoted.text)) {
    return message.reply("Reply with a message or type .tts hello mr lazack device");
  }
  
  if (!text && message.quoted && message.quoted.text) {
    text = message.quoted.text;
  }
  
  const chunks = [];
  for (let i = 0; i < text.length; i += 500) {
    const chunk = text.slice(i, i + 500);
    chunks.push(chunk);
  }
  
  message.react("⏳");
  
  try {
    for (const chunk of chunks) {
      const audioData = await tts(chunk, "thomas_shelby");
      const audioMessage = {
        audio: Buffer.from(audioData), // Convert to Buffer
        mimetype: "audio/mp4", // Correct MIME type for MP3
        ptt: true // Set to true for voice message
      };
      await conn.sendMessage(message.chat, audioMessage, { quoted: message });
    }
  } catch (error) {
    message.reply("An error occurred while generating the voice-over. Check the console for details.");
    console.error("Detailed error:", error);
  }
  
  message.react("✅");
};

handler.help = ["tooltts"];
handler.tags = ["tools"];
handler.command = ["speak", "tt"];

export default handler;
