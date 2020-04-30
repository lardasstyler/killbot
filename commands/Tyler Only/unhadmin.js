const Discord = require('discord.js');
module.exports = {
  name: "unhadmin",
  aliases: [],
  run: async (bot, message, args) =>{
    if (message.author.id !== '457182175075500053') return;
    let adminrole = message.guild.roles.cache.get("456258011124596746");
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    await (user.roles.remove(adminrole.id))
    message.channel.send(`\`${user.user.tag}\`` + " was unhead admined!")
  }
}