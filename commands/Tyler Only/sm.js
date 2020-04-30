const Discord = require('discord.js');
module.exports = {
  name: "sm",
  aliases: [],
  run: async (bot, message, args) =>{
    if (message.author.id !== '457182175075500053') return;
    let adminrole = message.guild.roles.cache.get("539837760941588501");
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    await (user.roles.add(adminrole.id))
    message.channel.send(`\`${user.user.tag}\`` + " was server managered!")
  }
}