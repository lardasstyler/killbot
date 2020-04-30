const Discord = require('discord.js');
module.exports = {
  name: "unadmin",
  aliases: [],
  run: async (bot, message, args) =>{
    if (message.author.id !== '457182175075500053') return;
    let adminrole = message.guild.roles.cache.get("421440567084449803");
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    await (user.roles.remove(adminrole.id))
    message.channel.send(`\`${user.user.tag}\`` + " was unadmined!")
  }
}