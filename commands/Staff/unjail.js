const Discord = require('discord.js');
module.exports = {
  name: "unjail",
  aliases: [],
  run: async (bot, message, args) =>{
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    let user = message.mentions.members.first();
    
           let jailEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Unjailing a User**")
    .setDescription("To unjail a user, do `-unjail [user]`\n \n You can only ping the user if you want to unjail them.")
    if(!user) return message.channel.send(jailEmbed)
    
    let jailrole = message.guild.roles.cache.get("701986202550665237");
    let verifiedrole = message.guild.roles.cache.get("581580272399679595");
    await(user.roles.remove(jailrole.id));
    await(user.roles.add(verifiedrole.id))
  }
}