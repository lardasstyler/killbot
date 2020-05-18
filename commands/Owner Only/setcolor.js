const Discord = require('discord.js');
module.exports = {
  name: "setcolor",
  aliases: [],
  run: async (bot, message, args) =>{
    if(message.author.id !== '265533494090924034') return;
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
    let color = args.slice(1).join(" ")
    role.setColor(color);
    message.channel.send(`${role}s color was set to \`${color}\`.`)
  }
}