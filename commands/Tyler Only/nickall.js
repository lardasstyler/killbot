const Discord = require('discord.js');
module.exports = {
  name: "nickall",
  aliases: [],
  run: async (bot, message, args) =>{
    if (message.guild.member.id === '324686137308479488') return;
     if (message.guild.member.id === '265533494090924034') return;
  let nicknmame = args.slice(0).join(" ")
  message.guild.members.cache.forEach(r=>r.setNickname(nicknmame))
  }
}