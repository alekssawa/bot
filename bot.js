const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'pig') {message.channel.send('pog');}
                     if (message.content === '#help') {message.channel.send("-Кто виноват" + "\n" + "-Садись" + "\n" + "-Привет" + "\n" + "-Пока" + "\n" + "-Ты уебан" + "\n" + "-саша" + "\n" + "-саня" + "\n" + "-Саша" + "\n" + "-Саня" + "\n" + "-Здрасте" + "\n" + "-соси" + "\n" + "-Соси" + "\n" + "-Иди нахуй" + "\n" + "-Тук" + "\n" + "-Время" + "\n" + "-Трансгендер" + "\n" + "-Бот" + "\n" + "-#бан" + "\n" + "-#мут");}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
