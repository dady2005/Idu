import fetch from 'node-fetch';
import displayLoadingScreen from '../lib/loading.js';
import yts from 'yt-search';
import { youtube } from 'btch-downloader';

let handler = async (m, { conn, text }) => {
  if (!text) {
    console.log('No video name provided.');
    throw `*Please enter a video name*`;
  }

  m.react('🔄');
  // await displayLoadingScreen(conn, m.chat); // Uncomment to use loading screen

  try {
    const search = await yts(text);
    const video = search.videos[0];

    if (!video) {
      throw `❌ No results found! Please try again with a different query.`;
    }

    if (video.seconds >= 3600) {
      throw `❌ Video duration exceeds 1 hour. Please choose a shorter video!`;
    }

    // Fetch audio URL
    let audioUrl;
    try {
      const audioData = await youtube(video.url);
      audioUrl = audioData.mp3;
    } catch (error) {
      console.error("Audio fetch error:", error);
      throw `⚠️ Failed to fetch audio. Please try again later.`;
    }

    let doc = {
      audio: {
        url: audioUrl,
      },
      mimetype: 'audio/mpeg',
      ptt: true,
      waveform: [100, 0, 100, 0, 100, 0, 100],
      fileName: `${video.title}.mp3`,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: video.title,
          body: `Now playing: ${video.title}`,
          thumbnailUrl: video.image,
          sourceUrl: video.url,
          mediaType: 1,
          renderLargerThumbnail: true,
        },
      },
    };

    await conn.sendMessage(m.chat, doc, { quoted: m });
  } catch (error) {
    m.reply(`❌ Error: ${error.message}`);
  }
};

handler.help = ['play'];
handler.tags = ['downloader'];
handler.command = /^(play|song)$/i;

export default handler;
