const Discord = require('discord.js');
const prefix = '?';
module.exports = {
  name: "say",
  aliases: [],
  run: async (bot, message, args) =>{
     if (!message.member.hasPermission("ADMINISTRATOR")) return;
    const argu = message.content.slice(prefix.length).trim().split(/ +/g);
    let say = argu.slice(1).join(' ') 
    message.channel.send(say)
  }
}