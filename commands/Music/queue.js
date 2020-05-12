const fs = require('fs')

module.exports = {
  name: 'queue',
  description: 'Displays the song queue',
  category: 'Music',
  aliases: ['q', 'np', 'nowplaying'],
  run: async (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('Nothing!');
  
  let queue = fetched.queue;
  
  let nowPlaying = queue[0];
  
  let resp = `__**Now Playing**__\n**${nowPlaying.songTitle}** -- **Requested By:** *${nowPlaying.requester}*\n\n__**In queue**__\n`;
  
  for (var i=1; i < queue.length; i++) {
    resp += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${queue[i].requester}*\n`;
  }
  message.channel.send(resp);

}
};