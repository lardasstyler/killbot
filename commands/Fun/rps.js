const Discord = require('discord.js');
module.exports = {
  name: "rps",
  aliases: [],
  run: async (bot, message, args) =>{
    let user = message.mentions.users.first();
    
    message.channel.send(`📰 ${user}, you were challenged to a game of RPS! ✂️\n \n To accept type "yes"\n \n To decline type "no"`)
    
    if (user.messageContent === 'yes') message.channel.send("test")
  }
}