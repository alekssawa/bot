const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
client.on("voiceStateUpdate", (old_member, new_member) => {
    // channel_name - название канала, к которому должен присоединяться бот в случае,
    // если в этом канале появился пользователь.
    let channel = client.channels.find(val => val.name == 'AFK');
    // check будет содержать в себе null, если new_member подключился не к нужному каналу.
    let check = channel.members.find(val => val.user.username == new_member.user.username);
    if (check != null) {
        // Здесь выполняется то, что вам нужно в случае, если в нужном канале появился пользователь
        console.log(`Will connect to ${channel.name}`);
    } else {
        // Здесь код, который выполняется в случае, если пользователь зашёл не в нужный канал. Этот блок else можно вообще удалить.
        console.log(`Will not connect to ${channel.name}`);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
