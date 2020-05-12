const fs = require('fs')
module.exports = {
  name: "resume",
  category: 'Music',
  description: 'Continues the song that\'s currently playing',
  run: (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('Nothing to play!');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('We are not in the same VC right now!');
 
  fetched.dispatcher.resume();

}
}
