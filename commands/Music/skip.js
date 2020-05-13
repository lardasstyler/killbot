const fs = require('fs')

module.exports = {
  name: 'skip',
  category: 'Music',
  aliases: ['s'],
  description: 'Skip to the next song playing',
  run:async (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  if (!fetched) return message.channel.send('There is currently nothing to skip!');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Tu n\'est pas connecté à un channel vocal');
    message.channel.send("⏩ ***Skipped!***")
   fetched.dispatcher.emit('end')
     
}
}
