const Discord = require('discord.js');
module.exports = {
  name: "vote",
  aliases: [],
  run: async (bot, message, args) =>{
let time = args.slice(0)
    
   const filter = message => message.content.startsWith('yes')

message.channel.awaitMessages(filter, { time: time, errors: ['time'] })
  .then(collected => console.log(collected.size))
  .catch(collected => message.channel.send(`${collected.size} people voted!`));
  }
}