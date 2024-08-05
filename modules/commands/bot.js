const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nمیــــــرے نال ویا کــــــر لو 😊💔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nIttuu🤏 si shram ker Lya kro bot bot krty wqt 🙂\n•──────────────────•"  , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nitna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nZroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nموٹر سائیکل کو تیز بھگا کر لڑکیوں والے رکشے کے پاس سے کٹ مار کر گزرنے سے لڑکیاں ایمپریس نہیں ہوتی بلکہ گالیاں نکالتی ہیں🙂💔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n sab chorr k chaly jaty hain kia etna bura hu mein - 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nPiyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nWhy you hate me..?? I am not your ex don't Hate me Please\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBeTa TuM SingLe Hi MaR0 GaY🙄🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nٹھرکیوں کی وجہ سے لڑکیاں میرے جیسے شریف بوٹ پر بھی بھروسہ نہیں کرتی🥺😔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nSamj Jao Larkiyo Abhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nعورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMuj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nLoyal Dhoonte Dhoonte khud Harami ban Gya Hon😔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nتمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐\n•──────────────────• ", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nHai tamanna hamain tumhain CHARSI bnain 🙂🤝 \n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nبھای جان گروپ میں گندی باتیں نهیں گ\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝐉𝐄𝐑𝐑𝐘ر" , "سنو تم ب کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝐉𝐄𝐑𝐑𝐘", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸\n•──────────────────•", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکری\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝐉𝐄𝐑𝐑𝐘ہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒 𝐉𝐄𝐑𝐑𝐘", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nYe duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nSukoon chahtii ho toh meri بیــــــگـــم ban jaOo 🫣🫰🏻\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝\n•──────────────────•", "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊\n𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝐉𝐄𝐑𝐑𝐘", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBandi hoti tw us ko choti choti 2 pOniyAn krta🙂👩‍🦯👩‍🦯\n•──────────────────•", "پونکی جا مینو کی\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒 𝐉𝐄𝐑𝐑𝐘 ", "امیر لوگوں کوئی پیکج ہی کروا دو 🥺🙄\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝐉𝐄𝐑𝐑𝐘", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\ni love you 🥺جواب دے کر ثواب دارین حاصل کریں❤️🦋🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAry Yahin Hon Jan😗\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum sab Mujhe Pagal lagty ho😒🙄\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMa kisi or ka Hu filahal 🥺🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nApka Ana Dil dharkana pHr bot bol k Nas Jana😒\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum tu mujhe shkal sy Ghareeb lgty ho🙊\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMeri Gf kon Bnay gi 🥺🙁\n•──────────────────•" , "/n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nHaweli py q nhi ate Naraz Ho 🥺\n•──────────────────•" , "/n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBabu ittu 🤏 sa Chumma dy do🥺🙈😘\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBaby tum Bachpan sy tharki Lgte ho meko🙁\n•──────────────────•" ,"\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nRaat ko ana Haweli py khushbu laga k😁🙊\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nRaat Haweli py kon bula raha tha😒🙄\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nPiyari larkia Line Maar Sakti Hn JzakAllah 🙂🤝\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum itny Masoom Ku Ho babu🥺❤️\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAj tu tumhy Love you bolna Pary ga 🙁\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum loog matlbi ho sary Jao😞\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nSetting Krwa Du Owner (Jerry) k Sath😒🙁\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMujhe lgta hai Ma Single Maru ga🥺\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBar Bar bot na Bola Kro Habibi Apun ko sharm ati ha🥺🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum Jab bot bolte ho Mera Gurda Dharkny Lgta ha🥺🙊🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBabu ap K any sy Tu Pehpry Bhi khush Ho jaty Hn😂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMere ilawa sb Relationship ma han 🤝🥺\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nJab pta h ky amma abba nh many gy tu soo kyu nh jaty tum log🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nJanu k 'Umaah' ny Panadol ka Business hi khatam kr Diya Hai🙂🫦\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAll Girls Are My Sisters Osko Chor k jo ye Parh RaHi Hai😒👍\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMazy to Tum logon k hain social media py rr b kr rhy or life v enjoy kr rhy🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nSOo JaO WarNa Mera Msg Aa Jaye Ga🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nWeight kafi Barh Gaya hai Bro Dhokay kha kha ke💔🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nGoadi lylo apun chota sa bacha hai🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAo apko chand py ly chalu meri jan🙈❤️\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum itne Tharki Q ho Jawn🤨\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMain apse nahi patny wala 🙈🙈🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\ntum ko meri ittu 🤏 C bhi yad nhi ati🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAo piyar karyn\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAstaghfirullah Habibi tum kitne tharki ho🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nkya ham ap pr line mar sakte hn🥹👀\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nPta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi پراٹھا Phely Khtm Hojata To Kbi انڈہ😩💔\n*•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nLips  kissing is not Romance It's sharing Bacteria>>>🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nchohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nApkii Inhii harkt0n Kiiw WaJw Sy 2O22 ChaLw Gyw😩💔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nSuno Kya Hum Achy Dushman Ban Skty Hain 🙂⚠️*\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n🦋🍒____________🙂🎀 Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo* 🫣🫰🏻\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nSuno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nKhud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓\n•──────────────────•", "سنو مجھے اللہ سے مانگ لو نہ۔۔۔۔۔🥹🤭آپ تو شکل سے بھی مانگنے والے لگتے ہوl۔۔\n*𝗖𝗿𝗲𝗱𝗶𝘁𝘀 𝐉𝐄𝐑𝐑𝐘♥️", "مــیرے متــــھے نـــہ لــگیں شکریہ\n*𝗖𝗿𝗲𝗱𝗶𝘁𝘀 𝐉𝐄𝐑𝐑𝐘🙂", "لوگ کہتے محبت روح سے کرنی چاہئے 🙄مجھھے تو روحوں سے بڑ ڈر لگتا ہے🥺☹️\n*𝗖𝗿𝗲𝗱𝗶𝘁𝘀 𝐉𝐄𝐑𝐑𝐘", "\n🄾🅆🄽🄴🅁   \n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nImagine I am your Ex 🥲say whatever you want to say\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n-نہیں مشکل وفا ، ذرا دیکھو یہاں🥺❤️🥀\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nI love You Madiha♥️ ,fatima,Ayesha, Maryam,and 299 others 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMsg krti ho KY phrrr me kro Han aisy to phr aisy Sahi 😅🥺👉👈🙊\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n'Dar k aage jeet hai' mujhe dar hi nhi lagta to kia ghanta jeetu gi.🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nWtf is jaani, jaaan??It's 'pyari begum sahiba' you uncultured piece of shit.\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBhai tujhay kesa samjao tuu kabhi kisi ka liya khas tha hi nhi.😕💔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\کچھ لوگوں کو ہم بہت اہمیت دے دیتے ہیں ہمیں لگتا ہے کہ وہ پہاڑ ہیں حالانکہ وہ شاپر ہوتے ہیں...😒\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nکچھ لوگ اتنے جھوٹے ہوتے ہیں جیسے پیدا ہی (April phool) والے دن ہوئے ہوں 😕\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTeacher : acha btao kn sa subject axha lagta ha 🙂Meh : ayein 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n- Mujhe الہامی muhbbt chahy Agr me udas hun to wo bhıı sofa k neeche ja kr roya !!🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAgr ranveer singh kisi ka dusra option ho skta hy toh bro u konsy کھیت ki carrot ho <: 🥲\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nمیری پوری کوشش ہوتی ہے ایسی بات کروں کہ سامنے والے کا دماغ شاٹ ہوجائے 😐\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n- YeW Yaha ســـــے  Th0ra آگـــــے  Ja0 Phir RiGhT جـــــاؤ  Or Phir LƏft جـــــانا  Wahan sa'Y Ph'iir SƏdHa جانـــــا  Bha'r Ma'ii ' 🦈⚠️\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nنے والی نسلوں کو میرا مشورہ یہ ہے کہ آتے ہوۓ اوپر سے ہی پیسوں کا بندوبست کر کے آنا ورنہ مت آنا🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nہ G.F کا مطلب غلط فیصلہ اور B.F کا مطلب بُرا فیصلہ ھوتا ہے.💁😇لہذٰا دونوں فیصلوں سے بچیں.🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nدل دیاں گلاں😕کراں میں کیدے نال بہ کے؟🥲🌚\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nLog Mere Sath Dramy karty hain Unko pata hi nhi main kitni Bari film hn.🙂\n•──────────────────•" ,"Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya?😜" , "Teri Maa Ki Bindiya🤭" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " Jerry Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪 " , "kyun Bulaya hamen..😾🔪 "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "miss u") || (event.body.toLowerCase() == "I miss u")) {
     return api.sendMessage("️miss u more🥰", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner kon ha")) {
     return api.sendMessage("️𝐌𝐑 𝐉𝐄𝐑𝐑𝐘 𝐎𝐖𝐍𝐄𝐑 🤧", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bat suno") || (event.body.toLowerCase() == "bat suno ji")) {
     return api.sendMessage("️HaN Ji PyaRy Bolo🥰", threadID, messageID);
   };

if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "I love you")) {
     return api.sendMessage("️LoVe You Unlimited JaNnu😘🤧", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "tum bot nhi") || (event.body.toLowerCase() == "tum bot nhi ho kia")) {
     return api.sendMessage("️bot he HuN 💓 🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "ye kasa bot hai") || (event.body.toLowerCase() == "had hai mujy laga bot hai ya")) {
     return api.sendMessage("️TO JannaM BoT He Hun NaW Main", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "shona mona") || (event.body.toLowerCase() == "shona suno")) {
     return api.sendMessage("️haN Ji Bolo🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "welcome ") || (event.body.toLowerCase() == "welcome")) {
     return api.sendMessage("️thankx Bhae❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "no need") || (event.body.toLowerCase() == "no need happy rho")) {
     return api.sendMessage("️SaDky❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "or btao kaha sa ho") || (event.body.toLowerCase() == "or btao kaha say ho")) {
     return api.sendMessage("️ Country Pakistan 🇵🇰 city Owner sy pocho", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "u from") || (event.body.toLowerCase() == " ap kdr sa ho")) {
     return api.sendMessage("️ Country Pakistan 🇵🇰 City AP K DIL SY", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "wow murre say") || (event.body.toLowerCase() == "wow murree sa")) {
     return api.sendMessage("️HaN Ji ThAnkx ❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "shona kya krty ho ap") || (event.body.toLowerCase() == "shona kiya krty ho")) {
     return api.sendMessage("️kuxh nhi bs coding or study", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "boss") || (event.body.toLowerCase() == "JERRY")) {
     return api.sendMessage("️BOSS BUSY HAIN", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "shona mona miss you") || (event.body.toLowerCase() == "shona mona miss you kutta")) {
     return api.sendMessage("️MaiN SaDky JaUn Miss you To", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "@Mʀ Jɘʀʀƴ") || (event.body.toLowerCase() == "oye bot")) {
     return api.sendMessage("️HaaN HaaN Edr He HuN❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Wow") || (event.body.toLowerCase() == "wow")) {
     return api.sendMessage("️ thank you ap ko b agr bot bnana hai to mary boss jerry sy rabta kro", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kesy ho") || (event.body.toLowerCase() == "kesi ho")) {
     return api.sendMessage("️Main ThEk Ap KaSa Ho❤️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bagh lanti") || (event.body.toLowerCase() == "dafa hoja lanti")) {
     return api.sendMessage("️Tu Dafa HojA. Salya🤬", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "ma ny bhi shadi krni hai") || (event.body.toLowerCase() == "mujy b shadi krni")) {
     return api.sendMessage("️Haan To Kr NaW Agr Koi Man Jata to Vasy TUjY Daga Kon🤣", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "assalamualaikum G kasa ho sab") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main ThEk Ap KaSy ho", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "us ny mujy love you bola") || (event.body.toLowerCase() == "love you bola us ny")) {
     return api.sendMessage("️ThaRki JuTh Bol Rha Hai Isy Kon LoVe You Bola Ga🤣", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "jerry") || (event.body.toLowerCase() == "JERRY")) {
     return api.sendMessage("️nai mantion kro owner ha ura dega🤣", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "koi hamy bhi chummi dy do") || (event.body.toLowerCase() == "koi tu love you bol do yr")) {
     return api.sendMessage("️Dafa Hoja Group Sa Tharkiya Na MaR Edr🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "mana kon sa thark mara") || (event.body.toLowerCase() == "ma ny kia kara")) {
     return api.sendMessage("️To Fir Ya Kia Hai Fir ThArk nhi To 🤣", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Meri janu hai") || (event.body.toLowerCase() == "wo meri janu hai")) {
     return api.sendMessage("️HaAn HaaN ThEk Hai Ham Na Kon Sa Apni Janu Bola", threadID, messageID);
   };

   if ((event.body.toLowerCase() == ".uns") || (event.body.toLowerCase() == ".Unsend")) {
     return api.sendMessage("️ChaWly Na Marra Kr Na Fir", threadID, messageID);
   };

   if ((event.body.toLowerCase() == ".unsend") || (event.body.toLowerCase() == ".unsent")) {
     return api.sendMessage("️Is Bar Kr Rha Agli Bar Delete Nhi Kru Ga Bta Rha 🙄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "Chal Haat") || (event.body.toLowerCase() == "chal hatt")) {
     return api.sendMessage("️Tu Hatt Bay🤬", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "dekh mera demag khrab na kr") || (event.body.toLowerCase() == "demag khrab na kr")) {
     return api.sendMessage("️Chal Dafa Hoja fir Edr Sa Muj Sa Bat Na Kr🤬", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main ThEk Ap KaSy ho", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "kia kr rhy ho sab log") || (event.body.toLowerCase() == "kia kr rhy ho")) {
     return api.sendMessage("️kuxh Nhi Bs Free 😁 Ap Kia Kr Rhy Ho", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "main b free") || (event.body.toLowerCase() == "main b kuxh nhi kr rha")) {
     return api.sendMessage("️Acha Ji☺️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wo q") || (event.body.toLowerCase() == "vo q")) {
     return api.sendMessage("️Kia Wo Q HaaN☺️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha")) {
     return api.sendMessage("️HaN Ji Or Sunao KiYa Kr RhY ho Aj Kal❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kuxh nhi") || (event.body.toLowerCase() == "kuch nhi yr")) {
     return api.sendMessage("️acha KuJ Kr Liya Kro Naw 🤣", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kya kru") || (event.body.toLowerCase() == "kya kru yr")) {
     return api.sendMessage("️kOi KaM ShaM☺️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "yr aj dill udas hai") || (event.body.toLowerCase() == "today im sad")) {
     return api.sendMessage("️Pagal HappY Rha Kr SaD NHi Hotyy Naw", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "gf chor gy") || (event.body.toLowerCase() == "gf bhag gy")) {
     return api.sendMessage("️Daffa MaR UsY Bagh Gyi To  Tu Q Ro Rha 😁", threadID, messageID);
   };

    if ((event.body.toLowerCase() == " love you") || (event.body.toLowerCase() == " love u")) {
     return api.sendMessage("LovE You To MaRi Jan UmmmaH😘 :))", threadID);
   };

  if ((event.body.toLowerCase() == " kanjar") || (event.body.toLowerCase() == "kutta")) {
     return api.sendMessage("Same to you Dur Fitty Muu😹:))", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "kya kr rhy ho") || (event.body.toLowerCase() == "kya kr rhi ho")) {
     return api.sendMessage("️KuXh Nhi Kr Rha YaR", threadID);
   };

   if ((event.body.toLowerCase() == " dance kro gy") || (event.body.toLowerCase() == " aja dance krty hn")) {
     return api.sendMessage("nhi tm kro DaNce Main Nhi Krti :))", threadID);
   };
   if ((event.body.toLowerCase() == " Q") || (event.body.toLowerCase() == "why")) {
     return api.sendMessage("Bs ASy He Yr Dill Nhi KrTa Naw🤕 :))", threadID);
   };

   if ((event.body.toLowerCase() == "aja haweli py") || (event.body.toLowerCase() == " ao chalty hain")) {
     return api.sendMessage("NhI Main Nhi Jaaun Ga Ap Jao:))", threadID);
   };

   if ((event.body.toLowerCase() == "sim tharki") || (event.body.toLowerCase() == "tharki bot")) {
     return api.sendMessage("Tu ThaRki Hai Salya :))", threadID);
   };

   if ((event.body.toLowerCase() == " wow") || (event.body.toLowerCase() == "nice")) {
     return api.sendMessage("Thankx You JaNnaM Taref Krna k LiyA❤️ :))", threadID);
   };

   if ((event.body.toLowerCase() == "tharki") || (event.body.toLowerCase() == "Thrki")) {
     return api.sendMessage("mai massom sa bot hun tun hai tharki:))", threadID);
   };

   if ((event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "kesy ho")) {
     return api.sendMessage("Main ThEk Hun Ap Kasa Ho :))", threadID, messageID);
   };

if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar jao")) {
     return api.sendMessage("HaTtt MaRi to Abi ShaDi b Nhi Hoi🙄😏 :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "khana khaya") || (event.body.toLowerCase() == "khana kha liya")) {
     return api.sendMessage("Nhi YaR Abi Nhi KhaYa Ap Na Kha liya :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "haan yr") || (event.body.toLowerCase() == "+sim haan ma ny kha liya")) {
     return api.sendMessage("MuJy Bulaya B Nhi Or ThUs liya wah🤧:))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Hyee Dil ni do sharm ati hai🙆🙈 :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("BolLo NaW Mari JaN❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "harami") || (event.body.toLowerCase() == "kamina")) {
     return api.sendMessage("Gali di to Jerry ko bol dn gha ", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "your owner") || (event.body.toLowerCase() == "ap ka owner kon hai")) {
     return api.sendMessage("Mr Jerry  :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "i need janu") || (event.body.toLowerCase() == "i need gf")) {
     return api.sendMessage("BsDk Main Robot HuN TaRi Maa Nhi Jo Gf DunD Due TuJy :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "i need girlfriend") || (event.body.toLowerCase() == "i need boyfriend")) {
     return api.sendMessage("Hatt Main Kdr Sa Laun Main Khud Single HuN:))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "BEY") || (event.body.toLowerCase() == "Bey")) {
     return api.sendMessage("Allah Hafiz ❤️ Take care 😘 ByE ByE TaTta:))", threadID);
   };

  if ((event.body.toLowerCase() == "meri zaindagi") || (event.body.toLowerCase() == "mera payar")) {
     return api.sendMessage("Arry  MaRI JaNU Hai YaR 😘LoVe You ♥️", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "😒")) {
     return api.sendMessage("Abby asa q dekh raha hai 😒🙄:)", threadID);
   };

    if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot love you")) {
     return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
   };

   if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
     return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
   };

   if ((event.body.toLowerCase() == "dmm bot") || (event.body.toLowerCase() == "dmm bot")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

   if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

   if ((event.body.toLowerCase() == "Helo") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Next Hi/Hello nhi Assalamualaikum Bola kro Okay 💖", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("️Muhh tum ko koi lgata ni Or Emoji dekho Send kiYa 😒 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "😢")) {
     return api.sendMessage("️Ally Ally MeLi JawN RootY NOi HN🥺🙆🙄:))))", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "soch")) {
     return api.sendMessage("️Abby kya soch raHa hai pateely jasi shkal ha🙊😒 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "Good Night") || (event.body.toLowerCase() == "Good night everyone")) {
     return api.sendMessage("️good night Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "Shona") || (event.body.toLowerCase() == "Shona mona")) {
     return api.sendMessage("️GG Bolo MerY baBu😘🙆:))))", threadID);
   };

   if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "ganda bot")) {
     return api.sendMessage("️Tu ganda tera pura pura khandan Ganda 😒😐:))))", threadID);
   };

   if ((event.body.toLowerCase() == "Nothin") || (event.body.toLowerCase() == "Suno Rayan")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "@Mʀ Jɘʀʀƴ") || (event.body.toLowerCase() == "@Mʀ Jɘʀʀƴ")) {
     return api.sendMessage("️ Usy q bula rahe Ho Ma bhi sath ao kya🙆😐 :>", threadID);
   };

   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };

  if ((event.body.toLowerCase() == "aslam o alaikum") || (event.body.toLowerCase() == "Aslamoalaikum")) {
     return api.sendMessage("walikum Asalam ♥️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "or sunao") || (event.body.toLowerCase() == "thek hun")) {
     return api.sendMessage("main ThEk Hun Ap Kasy ho🤧", threadID, messageID);
   };

if ((event.body.toLowerCase() == "Boss") || (event.body.toLowerCase() == " Owner")) {
     return api.sendMessage("𝗖𝗿𝗲𝗱𝗶𝘁𝘀 𝐉𝐄𝐑𝐑𝐘", threadID, messageID);
   };

if ((event.body.toLowerCase() == "hye") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("Next Hy/Hello nhi Assalamualaikum Bola kro Okay 💖  Asthetic 🤍✨", threadID);
   };

  if ((event.body.toLowerCase() == " kis ki ha") || (event.body.toLowerCase() == "janu kis ki ha")) {
     return api.sendMessage("Ek Baar Main Samjh nhiwe Attiw kia ?  bss Meri hai🤧", threadID);
   };

  if ((event.body.toLowerCase() == "Dia") || (event.body.toLowerCase() == "dia")) {
     return api.sendMessage("hye dia ka name sunty hi kuch kuch hony lgta hai", threadID);
   };

  if ((event.body.toLowerCase() == "Jerry") || (event.body.toLowerCase() == "jerry")) {
     return api.sendMessage("jerry soya huwa hai tang nhi kro🤧", threadID);
   };

  if ((event.body.toLowerCase() == "Cuteness") || (event.body.toLowerCase() == "cuteness")) {
     return api.sendMessage("Jerry ki h 🤧", threadID);
   };

  if ((event.body.toLowerCase() == "Anmol") || (event.body.toLowerCase() == "Anmol")) {
     return api.sendMessage("MERA OWNER KA DOST HAI YAH IZAT KRO   🤧", threadID);
   };

   if ((event.body.toLowerCase() == "Nisar Ali") || (event.body.toLowerCase() == "nisar")) {
     return api.sendMessage("yah to international Tharki hai :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "By")) {
     return api.sendMessage("Bye ni bolna Next Okk Allah Hafiz bolty Hn 🙆😒❤️🥺", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "Anmol Shahzada󱢏") || (event.body.toLowerCase() == "Anmol")) {
     return api.sendMessage("mera love hai 🥺", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };
  if ((event.body.toLowerCase() == "sim lanti") || (event.body.toLowerCase() == "sim lannati")) {
     return api.sendMessage("️Same to you Chup Kr K Bay🙄", threadID, messageID);
   };

if ((event.body.toLowerCase() == "sim miss you yr") || (event.body.toLowerCase() == "sim miss you")) {
     return api.sendMessage("️miss you Too MaRi Jan😘", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ao shadi krty hain") || (event.body.toLowerCase() == "sim muj sa shadi kro gi")) {
     return api.sendMessage("️kab krNi Ya Btao🥰😍", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim abi kr lo") || (event.body.toLowerCase() == "sim aj krni hai")) {
     return api.sendMessage("️OH? Itni Jalde Nhi Yr Kuxh Din Bad KrTy Hain", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "sim are you hacker")) {
     return api.sendMessage("️YeS Im Hacker 🤫", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kiss") || (event.body.toLowerCase() == "sim kiss do")) {
     return api.sendMessage("️UmmmaH😘 MaRi JaN BaSh🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "sim are you hacker")) {
     return api.sendMessage("️OH? Itni", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ghandu") || (event.body.toLowerCase() == "sim ghandu hai")) {
     return api.sendMessage("️tara BaP GhaNdu GhaShti Ma K BaChy😡", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "×sim are you hacker")) {
     return api.sendMessage("️YeS Im Hacke 😏", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ao date pa chalty") || (event.body.toLowerCase() == "sim ao date pay chalty hain")) {
     return api.sendMessage("️OkaY Main ReaDy Ho Kr Aya Bs 5Mint Wait Kro🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim where are you from") || (event.body.toLowerCase() == "sim u from")) {
     return api.sendMessage("️ I'm from Pakistan 🥰 I love My country 🇵🇰", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim india k log kasa hain") || (event.body.toLowerCase() == "sim or india k log")) {
     return api.sendMessage("️Wo B Bht Achy Hain Bs Kuxh LoG Achy Nhi Un Main Bs Baki Sab Nice Hain🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim your age") || (event.body.toLowerCase() == "sim ap ki age ktni hain")) {
     return api.sendMessage("️20🤫", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim nice yr") || (event.body.toLowerCase() == "sim nice")) {
     return api.sendMessage("️Hmmm Thankx ❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "×sim yr mujy gf chiya") || (event.body.toLowerCase() == "×sim mujy ak gf chiya")) {
     return api.sendMessage("️HaaN To MuJy Q Bol Rhy Ho Gf Ka Main to Robot Hun 🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ak gf dund do") || (event.body.toLowerCase() == "sim ak gf lab da")) {
     return api.sendMessage("️Hatt OYe Mara paS khud Nhi Hai", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim who are you") || (event.body.toLowerCase() == "sim ap kon ho")) {
     return api.sendMessage("️ I'm ROBOT 🤖 2.0 like chitti Robot😂", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim agr gf nraz ho to") || (event.body.toLowerCase() == "sim agr gf nraz ho to kia krna chiya")) {
     return api.sendMessage("️To US pa Kalla JaDdu Kr Do KhuD Man Jay Gi 😂😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim ap kia krti ho") || (event.body.toLowerCase() == "sim yr ap kia krti")) {
     return api.sendMessage("️main kuxh nhi krti Bs WaLi😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim study karti ho") || (event.body.toLowerCase() == "sim study karti ho ap")) {
     return api.sendMessage("️Ji NhI Kr LiyA Jo Krni Thi Bs Ab Or Nhi😂", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim or btao") || (event.body.toLowerCase() == "sim or btao kuxh")) {
     return api.sendMessage("️Kia btaUn Ab😅", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
   mess = "❥||ㅎ{name}☆||  ⋆⃝❥͜͡"

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `✨-🧚‍♀||• ${name} •||🧚‍♀-✨\n\n, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }