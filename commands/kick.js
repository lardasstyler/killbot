const Discord = require('discord.js');
module.exports = {
  name: "kick",
  aliases: [],
  run: async (bot, message, args) =>{
    let user = message.mentions.members.first();
    if (!message.member.hasPermission('KICK_MEMBERS')) return;
  }
}