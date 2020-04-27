const Discord = require('discord.js');
module.exports = {
  name: "nickall",
  aliases: [],
  run: async (bot, message, args) =>{
  let nicknmame = args.slice(0).join(" ")
  message.guild.members.cache.forEach(r=>r.setNickname(nicknmame))
  }
}