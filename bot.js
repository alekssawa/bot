const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "^";
const CLEAR_MESSAGES = '^clearMessages';
	
bot.on('ready', () => {

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
	
 if (command === "ping")
 {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! Это сообщение имеет задержку ${timeTaken}ms.`);
 }
	
  /*console.log('ClearMessagesBot is Ready!');
  bot.on('message', message => {
    if (message.content == CLEAR_MESSAGES) {


      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        return;
      }

      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; // number of messages deleted

            message.channel.sendMessage("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
            console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });
      }
    }
  });*/
});


client.login(process.env.BOT_TOKEN);
