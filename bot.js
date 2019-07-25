const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'pig') {message.channel.send('pog');}
    if (message.content === '#help') {message.channel.send("***(1) Кто виноват***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(2) Норм***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(3) Куда***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(4) Спать***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(5) music***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(6) mem***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(7) Садись***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(8) Привет***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(9) Пока***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(10) Ты уебан***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(11) саша***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(12) саня***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(13) Саша***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(14) Саня***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(15) Здрасте***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(16) соси***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(17) Соси***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(18) Иди нахуй***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(19) Тук***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(20) Время***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(21) Трансгендер***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(22) Бот***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(23) #бан***"
                                                           + "\n" + "***------------------***"
                                                           + "\n" + "***(24) #мут***");}
    if (message.content === '#бан') {message.channel.send('ТЫ ЗАБАНЕН!');}
    if (message.content === '@БОЛТУН#6109') {message.channel.send('Ты сильно ничтожен что-бы обращаться ко мне!!!');}
    if (message.content === '@БОЛТУН') {message.channel.send('Ты сильно ничтожен что-бы обращаться ко мне!!!');}
    if (message.content === 'Бот') {message.channel.send('Ты сильно ничтожен что-бы обращаться ко мне!!!');}
    if (message.content === 'Тук') {message.channel.send('По ебалу стук!!!');} 
    if (message.content === 'Время') {message.channel.send('Петушкам время не надо');}
    if (message.content === 'Привет') {message.channel.send('Тебе привет от всего коллектива)');}
    if (message.content === 'Пока') {message.channel.send('Увидемся)');}
    if (message.content === 'Трансгендер') {message.channel.send('Ты трансгендер!!!)');}
    if (message.content === 'Иди нахуй') {message.channel.send('Сейчас ты пойдешь туда!!!)');}
    if (message.content === '#мут') {message.channel.send('ТЫ ЗАМУЧЕН!');}
    if (message.content === 'иди нахуй') {message.channel.send('Сейчас ты пойдешь туда!!!)');}
    if (message.content === 'соси') {message.channel.send('Сам соси!!!)');}
    if (message.content === 'Соси') {message.channel.send('Сам СОСИ!!!)');}
    if (message.content === 'Здрасте') {message.channel.send('Хай)');}
    if (message.content === 'Саня') {message.channel.send('Александр в данный момент занят!!!)');}
    if (message.content === 'Саша') {message.channel.send('Александр в данный момент занят!!!)');}
    if (message.content === 'саня') {message.channel.send('Александр в данный момент занят!!!)');}
    if (message.content === 'саша') {message.channel.send('Александр в данный момент занят!!!)');}
    if (message.content === 'Ты уебан') {message.channel.send('Крути барабан!)');}
    if (message.content === 'Садись') {message.channel.send('Бан!)');}
    if (message.content === 'Норм') {message.channel.send('Подрочил!!');}
    if (message.content === 'Куда') {message.channel.send('Куда сука ушол!!!');}
    if (message.content === 'Спать') {message.channel.send("Всем спать Суки!!" + "\n" + "Спать блять!!");}
    if (message.content === 'Кто виноват') {message.channel.send('Навальный!!)');}
    if (message.content === 'music') {message.channel.send("-play https://www.youtube.com/playlist?list=PLSdfU8nTff5TkhpGvJaACJVpcgYzjNec_" + "\n" + "!!!load 4cce102d-3ce9-48d6-b298-21cb460f9c98 -- ТРЕШ!!:astonished:");}
    if (message.content === 'mem') {message.channel.send("https://drive.google.com/drive/folders/1u53rcXnMHh0UZ_is_5afnSU3rGQf6D62?usp=sharing");}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
