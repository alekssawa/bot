const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'pig') 
    {
    	message.reply('pog');
  	}
    if (message.content === 'бан') 
    {
    	message.reply('ЗАБАНЕН!(');
  	}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
