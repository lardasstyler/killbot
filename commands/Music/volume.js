const fs = require('fs')
module.exports = {
  name: 'volume',
  description: 'Sets the volume of the music between 1 and 200',
  category: 'Music',
  run:(client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('Nothing is playing!');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('We are not in the same VC right now!');
  
  if (!args[0] || args[0] > 200 || args[0] < 0) return message.channel.send('An error occured! Please set the volume to something between 0 and 200 by doing \`;volume [1-200]\`');

  fetched.dispatcher.setVolume(args[0]/100) 
  message.channel.send(`\`Set the volume to ${args[0]} successfully.\``)
}
};