module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "AYAN CHOWDHURY",
	description: "Notify bots or people entering the group",
	dependencies: {
		"fs-extra": ""
	}
};
module.exports.run = async function({ api, event }) {

	const request = require("request");
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`【 ${global.config.PREFIX} 】 ${global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`${global.config.BOTNAME}\n\n𝗛𝗲𝗹𝗹𝗼 𝗘𝘃𝗲𝗿𝘆𝗼𝗻𝗲🙋‍♂️ 𝗥𝗞𝗢 𝗕𝗥𝗢 𝗕𝗢𝗧👽 𝐢𝐬 𝐍𝐨𝐰 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝⛓️
		🌺🦋🌺 
𝐁𝐨𝐭 Made By RKO BRO 👑☘️
<------------------------------> 
BOT CONNECTED SUCCESFUL♻️ !!! 

APPROVAL ALLOW IN THIS GROUP❌!!!
<------------------------------>
\n\nBOT PREFIX: 【 ${global.config.PREFIX} 】\n\nUSE /HELP TO SEE ALL COMMAND♻️
𝗙𝗼𝗿 𝗘𝘅𝗮𝗺𝗽𝗹𝗲: /𝗵𝗲𝗹𝗽 /𝗺𝘂𝘀𝗶𝗰 /𝗽𝗮𝗶𝗿 /𝗮𝗹𝗯𝘂𝗺 /𝘀𝗮𝗱 /𝗴𝗲𝗺𝗶𝗻𝗶`, threadID);
	}
	else {
		try {
    const request = require("request");
			const fs = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			
			var mentions = [], nameArray = [], memLength = [], i = 0;
			
    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  
    
				nameArray.push(userName);
				mentions.push({ tag: userName, id: userID, fromIndex: 0 });
      
				memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "╔════•| ✿ |•════╗\n 🌿𝗛𝗲𝗹𝗹𝗼 🌿𝗙𝗿𝗶𝗲𝗻𝗱 🌿\n╚════•| ✿ |•════╝\n ✨🆆🅴🅻🅻 🅲🅾🅼🅴✨\n ❥𝐍𝐄𝐖~\n ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n    {uName}\n\n༄ 𝗜𝗻 𝗢𝘂𝗿 𝗚𝗿𝗼𝘂𝗽✺࿐\n {threadName}\n 🥰🖤🌸𝗛𝗮𝗽𝗽𝘆🍀𝗘𝗻𝗷𝗼𝘆🍀—🌸🥀\n🥀𝐌𝐞𝐥𝐞𝐫𝐚 𝐁𝐚𝐬𝐧𝐮🥀\n༄✺𝗔𝗻𝗶 𝘁𝗺𝗶 𝘆𝗼 𝗚𝗿𝗼𝘂𝗽 𝗞𝗼  {soThanhVien}th 𝗠𝗲𝗺𝗯𝗲𝗿 𝗛𝗮𝘂 𝗘𝗻𝗷𝗼𝘆 🥳 # ]࿐\n ╔╦══• •✠•❀•✠ • •══╦╗\n ♥ ═╩╝ " : msg = threadData.customJoin;
			msg = msg 
			.replace(/\{uName}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);			

      var link = [
"https://i.imgur.com/E49ptBn.jpg",
"",
"",
"",
      ];
				var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.jpg")).on("close", () => callback());       
      	    }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
	}
                                                  } 
