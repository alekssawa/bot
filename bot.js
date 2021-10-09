const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "^";

client.on("ready" () => {
    console.log("Successfully logged into client.");
});

client.on("message", function(message) {
    
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
    
    if (command === "ping")
 {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! Это сообщение имеет задержку ${timeTaken}ms.`);
 }
    
});

client.login("BOT_TOKEN");
