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
    if (message.content === 'Бот') 
    {
    	message.channel.send('Ты сильно ничтожен что-бы обращаться ко мне!!!');
  	}
   if (message.content === 'Тук') 
    {
    	message.channel.send('По ебалу стук!!!');
  	} 
    if (message.content === 'Время') 
    {
    	message.channel.send('Петушкам время не надо');
  	}
    if (message.content === 'Привет') 
    {
    	message.channel.send('Тебе привет от всего коллектива)');
  	}
    if (message.content === 'пока') 
    {
    	message.channel.send('Увидемся)');
  	}
    if (message.content === 'трансгендер') 
    {
    	message.channel.send('Ты трансгендер!!!)');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
