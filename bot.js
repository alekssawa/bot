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
    	message.channel.send('ТЫ ЗАБАНЕН!');
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
    if (message.content === 'Пока') 
    {
    	message.channel.send('Увидемся)');
  	}
    if (message.content === 'Трансгендер') 
    {
    	message.channel.send('Ты трансгендер!!!)');
  	}
    if (message.content === 'Иди нахуй') 
    {
    	message.channel.send('Сейчас ты пойдешь туда!!!)');
  	}
        if (message.content === '#мут') 
    {
    	message.channel.send('ТЫ ЗАМУЧЕН!');
  	}
        if (message.content === 'иди нахуй') 
    {
    	message.channel.send('Сейчас ты пойдешь туда!!!)');
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
