.const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
config: {
name: "lofianime",
credits: "RKO BRO",
version: "1.0",
cooldowns: 5,
hasPermission: 0,
description: "Get aesthetic lo-fi anime videos",
commandCategory: "fun",
usages: "{p}lofianime",
},

run: async function ({ api, event, args, message }) {
api.setMessageReaction("🕐", event.messageID, (err) => {}, true);

try {
const response = await axios.get(`https://lofi-anime-bq8f.onrender.com/kshitiz`, { responseType: "stream" });

const tempVideoPath = path.join(__dirname, "cache", `${Date.now()}.mp4`);

const writer = fs.createWriteStream(tempVideoPath);
response.data.pipe(writer);

writer.on("finish", async () => {
const stream = fs.createReadStream(tempVideoPath);

message.reply({
body: `Aesthetic Anime Video`,
attachment: stream,
});

api.setMessageReaction("✅", event.messageID, (err) => {}, true);
});
} catch (error) {
console.error(error);
message.reply("Sorry, an error occurred while processing your request.");
}
}
};
