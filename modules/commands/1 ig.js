/** Don't change Credit...AYAN is real owner**/
module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AYAN",
  description: "command",
  commandCategory: "prefix reply",
  usages: "ig",
  cooldowns: 11,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🐰🍒𝐂𝐨𝐨𝐥 𝐂𝐨𝐨𝐥 𝐂𝐨𝐨𝐥 𝐂𝐨𝐨𝐥 𝐂𝐨𝐨𝐥 𝐂𝐨𝐨𝐥 𝐂𝐨𝐨𝐥 𝐂𝐨𝐨𝐥_🙊🙈",
"--ღღ🦋🖤✨-\n\n--𝐋𝐨𝐯𝐞 𝐢'𝐬 𝐁𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 __☺️🦋✨\n\n--𝐥𝐟 𝐭𝐡𝐞 𝐥𝐨𝐯𝐞𝐝 𝐨𝐧𝐞 𝐢𝐬 𝐫𝐢𝐠𝐡𝐭..!🦋🍁💫\n\n...!☺️🖤🙂✨🌼",
"❥◎⃝! میں خلاء میں تیرتا ہوں🙃 \n\n❥کبھی مسکراتا ہوں -😁💚_اور کبھی روتا ہوں😅\n\n🍁💫مجھے لگتا ہے کہ میں روتے ہوئے\n \n☺️🖤اس دنیا سے چلا جاؤں😅🥀",
"❥»̶̶͓͓͓̽̽̽⑅⃝✺❥᭄❥\n\n___💚__دنیا جھوٹے ...\n\nوہموں سے بھری پڑی ہے...!💚🌺\n\n____🥀_اس لیے دنیا کے لوگ....!\n\nٓج بہترین اداکار ہیں...👎🥀",
"💜🔐🌈 ___\n\n- 𝗧𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲-!! 😽🧡✨\n\n🍁_𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐰𝐚𝐧𝐭𝐬 𝐡𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐚𝐧𝐝 𝐈 𝐰𝐚𝐧𝐭 𝐲𝐨𝐮 𝐢𝐧 𝐞𝐯𝐞𝐫𝐲 𝐡𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬⚜️— -!!-) 😊🖤\n\n___💜🔐🌈",
">🐰✨𝑻𝒉𝒊𝒔 𝒍𝒊𝒏𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖🖤🌸\n\n___نظروں سے نہیں، دل کی صورت سے!!😇✨\n\n- محبت قریب ہو یا دور، میں تمہیں سوچ کر مسکراتا ہوں!!🖤🐰\n\n💖🦋",
"༅༎💙🦋\n༆𝐓𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞_⚠︎🙅🏻‍♂️✨\n\n😽︵۵𝐏𝐞𝐨𝐩𝐥𝐞 𝐚𝐫𝐞 𝐥𝐢𝐤𝐞 𝐫𝐚𝐢𝐧, 𝐦𝐚𝐧𝐲 𝐩𝐞𝐨𝐩𝐥𝐞 𝐰𝐢𝐥𝐥 𝐜𝐨𝐦𝐞, 𝐦𝐚𝐧𝐲 𝐩𝐞𝐨𝐩𝐥𝐞 𝐰𝐢𝐥𝐥 𝐠𝐨💔🥰\n\n:༅༎💙🦋 𝐓𝐡𝐞 𝐫𝐢𝐠𝐡𝐭 𝐩𝐞𝐫𝐬𝐨𝐧 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐫𝐢𝐠𝐡𝐭 𝐧𝐞𝐱𝐭 𝐭𝐨 𝐲𝐨𝐮 𝐚𝐬 𝐚 𝐬𝐡𝐚𝐝𝐨𝐰 -/ ఌ︵💚🌻",
"(-𝙄 𝙖𝙢 𝘼𝙙𝙙𝙞𝙘𝙩𝙚𝙙 𝙏𝙤👀🙈\n\n_')𝙈𝙮 𝙁𝙖𝙫𝙤𝙧𝙞𝙩𝙚 𝙋𝙚𝙧𝙨𝙤𝙣..!\n\n🐰🦋\n\n💖🔐🍭)😇",

"𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙩𝙝𝙞𝙨 𝙡𝙞𝙣𝙚-!!🦋🐭\n\n🐰' —'পারফেক্ট' কাউকে পাবার থেকে'কাউকে' পারফেক্ট' বানিয়ে নিতে পারাটা' বড় অর্জন'--)🌼💜",
"°🐹💙🍒\n\n_𝗧𝗿𝘂𝘀𝘁 𝗺e 🔐💚\n°\n\n__!!☁️✨🌺আপনাকে পাওয়ার দাবি!আমি মৃত্যুর পরও ছাড়বো না,,🔐💚 🙂" 
 ];
;
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/tTj9Ffqy/images-47.jpg",
"https://i.postimg.cc/Hs4X5DTW/download-9.jpg",
"https://i.postimg.cc/zvTW04Wj/download-10.jpg",
"https://i.postimg.cc/90PRGZ5g/download-8.jpg",
"https://i.postimg.cc/Hs4X5DTW/download-9.jpg",
"https://i.postimg.cc/5tHXsZWC/download-7.jpg",
"https://i.postimg.cc/Vs9dZqpD/images-52.jpg",
"https://i.postimg.cc/4NJnDKTZ/images-51.jpg",
"https://i.postimg.cc/66hpf94P/images-48.jpg",
"https://i.postimg.cc/bYLq23Kc/images-42.jpg",
"https://i.postimg.cc/sX4smcxW/images-46.jpg",
"https://i.postimg.cc/m2DB37sc/images-43.jpg"
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache55.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache55.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache55.jpg")).on("close",() => callback());
   };
