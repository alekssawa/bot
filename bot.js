const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  let channel = bot.channels.get("AFK")

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    channel.join()
          // ...  
      });
  });

  } else if(newUserChannel === undefined){
      // ...
  }
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
