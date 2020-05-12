const Discord = require('discord.js');
module.exports = {
  name: "unsm",
  aliases: [],
  run: async (bot, message, args) =>{
    if (message.author.id !== '648698528872398848') return;
    let adminrole = message.guild.roles.cache.get("539837760941588501");
     let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    await (user.roles.remove(adminrole.id))
    message.channel.send(`\`${user.user.tag}\`` + " was unserver managered!")
  }
}