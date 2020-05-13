const Discord = require('discord.js');
module.exports = {
  name: "rps",
  aliases: [],
  run: async (bot, message, args) =>{
    let user = message.mentions.users.first();
    
    message.channel.send(`📰 ${user}, you were challenged to a game of RPS! ✂️\n \n To accept type "yes"\n \n To decline type "no"`)
    
   const filter = message => message.content.startsWith('yes')

message.channel.awaitMessages(filter, { time: 30000, errors: ['time'] })
  .then(collected => console.log(collected.size))
  .catch(collected => message.channel.send(`Fight!`));
  }
}