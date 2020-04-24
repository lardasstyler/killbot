const Discord = require('discord.js');
module.exports = {
  name: "nopings",
  aliases: [],
  run: async (bot, message, args) =>{
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    
    let pingrole = message.guild.roles.cache.get("617459453067001856")
    let nopingrole = message.guild.roles.cache.get("703311925450375249")
    
    await(message.member.roles.remove(pingrole.id))
    await(message.member.roles.add(nopingrole.id)), message.channel.send(`\`${message.author.tag}\` was given "\`Non-Pingable Staff\`"!`)
  }
}