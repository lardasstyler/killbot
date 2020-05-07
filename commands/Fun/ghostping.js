const Discord = require('discord.js');
module.exports = {
  name: "ghostping",
  aliases: [],
  run: async (bot, message, args) =>{
    let user = message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send("You did not provide a user ID so therefore, I can't ghostping anyone!")
    
    message.channel.send(`${user}`).then(message.delete())
  }
}