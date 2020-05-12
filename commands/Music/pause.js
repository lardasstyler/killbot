const fs = require('fs')
module.exports = {
  name: 'pause',
  description: 'Pauses the music playing',
  category: 'Music',
  run:(client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('Nothing to pause!');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('We are not in the same VC right now!');
  
  if (fetched.dispatcher.paused) return message.channel.send('Already paused!');
  
  fetched.dispatcher.pause() 
  message.channel.send(':thumbsup:')
}
};