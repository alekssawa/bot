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
    if (message.content === '#бан') 
    {
    	message.channel.send('ЗАБАНЕН!');
  	}
    if (message.content === '@БОЛТУН#6109') 
    {
    	message.channel.send('Ты сильно ничтожен что-бы обращаться ко мне!!!');
  	}
    if (message.content === '@БОЛТУН') 
    {
    	message.channel.send('Ты сильно ничтожен что-бы обращаться ко мне!!!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
