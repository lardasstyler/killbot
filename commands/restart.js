const Discord = require('discord.js');
module.exports = {
  name: "restart",
  aliases: [],
  run: async (bot, message, args) =>{
     if (message.author.id !== '457182175075500053' || '400400244262699020') return;;
message.channel.send('Okay, restarting.').then(() =>{
 process.exit(0) 
})  
  }
}