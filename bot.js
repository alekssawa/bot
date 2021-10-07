const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "^";
	
client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
	
 if (command === "ping")
 {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! Это сообщение имеет задержку ${timeTaken}ms.`);
 }
	
    if (msg.content.toLowerCase().startsWith(prefix + "clearchat")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 99});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
	

});



client.login(process.env.BOT_TOKEN);
