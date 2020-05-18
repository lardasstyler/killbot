const Discord = require('discord.js');
module.exports = {
  name: "setcolor",
  aliases: [],
  run: async (bot, message, args) =>{
    let ownerrole = message.guild.roles.cache.get("421440567084449803")
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
    let color = args.slice(1).join(" ")
    role.setColor(color);
    message.channel.send(`${role}s color was set to \`${color}\`.`)
  }
}