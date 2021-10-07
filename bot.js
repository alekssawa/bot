const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "^";

client.on("ready" () => {
    console.log("Successfully logged into client.");
});

client.on("message", msg => {
    if (msg.content.toLowerCase().startsWith(prefix + "clearchat")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 99});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
});

client.login("BOT_TOKEN");
