const Discord = require('discord.js');
module.exports = {
  name: "unmute",
  aliases: [],
  run: async (bot, message, args) =>{
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    
    
    let user = message.mentions.members.first();
    
       let muteEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Unmuting a User**")
    .setDescription("To unmute a user, do `?unmute [user]`\n \n You can only ping the user if you want to unmute them.")
    if(!user) return message.channel.send(muteEmbed)
    let muterole = message.guild.roles.cache.get("703300041347170334");
    let verifiedrole = message.guild.roles.cache.get("581580272399679595");
    await(user.roles.remove(muterole.id));
    await(user.roles.add(verifiedrole.id))
  }
}