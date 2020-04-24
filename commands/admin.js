const Discord = require('discord.js');
module.exports = {
  name: "admin",
  aliases: [],
  run: async (bot, message, args) =>{
    if (message.author.id !== '457182175075500053') return;
   let adminrole = message.guild.roles.cache.get("421440567084449803");
    let user = message.mentions.members.first();
    await (user.roles.add(adminrole.id))
    message.channel.send(`\`${user.user.tag}\`` + " was admined!")
  }
}