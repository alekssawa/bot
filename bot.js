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

 const amount = 99;
async function delete_messages() { // Объявление асинхронной функции

    await mess.channel.messages.fetch({
        limit: amount
    }).then(messages => {
        mess.channel.bulkDelete(messages)
        mess.channel.send(`Удалено ${amount} сообщений!`)
    })
};
if (command === "clear")
 {
	 delete_messages();
	 message.reply(`Удаленно`);
 }
	
	
});

client.login(process.env.BOT_TOKEN);
