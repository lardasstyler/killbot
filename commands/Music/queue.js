const fs = require('fs')
const Discord = require('discord.js')

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
  
   
    
  let resp = `__Now Playing__\n[${nowPlaying.songTitle}](${nowPlaying.url}) | \`Requested By: ${nowPlaying.requester}\`\n\n__In queue__\n`;
  
  for (var i=1; i < queue.length; i++) {
    resp += ``${i}.\` **[${queue[i].songTitle}](${queue[i].url})** | \`Requested By: ${queue[i].requester}\`\n`;
  }
    let embed = new Discord.MessageEmbed() 
    .setDescription(resp)
  message.channel.send(embed);

}
};