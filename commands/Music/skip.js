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
  
  let userCount = message.member.voiceChannel.members.size;
  
  let required = Math.ceil(userCount/2);
  
  if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
  
  if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`You have already voted. ${fetched.queue[0].voteSkips.length}/${required} is required to skip this song.`);
  
  fetched.queue[0].voteSkips.push(message.member.id);
  
  ops.active.set(message.guild.id, fetched);
  
  if (fetched.queue[0].voteSkips.length >= required) {
    message.channel.send('Skipping!');
    return fetched.dispatcher.emit('end');
  }
  message.channel.send(`You voted to skip. ${fetched.queue[0].voteSkips.length}/${required} is required to skip this song.`)
}
};
