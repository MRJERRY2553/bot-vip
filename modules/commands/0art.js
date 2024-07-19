module.exports.config = {
  name: "facebook",
  version: "1.0.",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "Any Facebook Video Reel Story Full Video Download Available🥰Credits RKO",
  commandCategory: "other",
  usages: "Facebook Reel Story video link",
  cooldowns: 2,
};

module.exports .run = async function ({ api, event, args }) {
  const axios = require('axios');
const fs = require('fs-extra');
  let link = args.join(" ");

  if (!args[0]) {
    api.sendMessage("please put a valid fb video link", event.threadID, event.messageID);
    return;
  }

  api.sendMessage("𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙞𝙣𝙜 𝙫𝙞𝙙𝙚𝙤, 𝙥𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩...\n\n💝", event.threadID, event.messageID);

  try {
    let path = __dirname + `/cache/fbVID.mp4`;

    const aa = await axios.get(`https://nzlw59-3000.csb.app/dipto/alldl?url=${encodeURI(link)}`);

    const vid = (await axios.get(aa.data.result, { responseType: "arraybuffer", })).data;

    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));

    api.sendMessage({
      body: `VIDEO DOWNLOAD\n\n ♻️𝗖𝗥𝗘𝗗𝗜𝗧:𝗥𝗞𝗢 𝗕𝗥𝗢💝💞 `,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);

  } catch (e) {
     api.sendMessage(`${e}`, event.threadID, event.messageID);
  };

};
