const Discord = require('discord.js');
module.exports = {
  name: "verify",
  aliases: [],
  run: async (bot, message, args) =>{
    let verified = message.guild.roles.cache.get("581580272399679595")
    if(message.member.hasRole("role")) return message.channel.send("test")

  }
}