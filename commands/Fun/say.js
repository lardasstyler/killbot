const Discord = require('discord.js');
const prefix = '?';
module.exports = {
  name: "say",
  aliases: [],
  run: async (bot, message, args) =>{
        if (message.content.toLowerCase().includes("@everyone")) return;
    if (message.content.toLowerCase().includes("@here")) return;
    const argu = message.content.slice(prefix.length).trim().split(/ +/g);
    let say = argu.slice(1).join(' ') 
    message.channel.send(say)
  }
}