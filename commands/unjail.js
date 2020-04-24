const Discord = require('discord.js');
module.exports = {
  name: "unjail",
  aliases: [],
  run: async (bot, message, args) =>{
             let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(errorEmbed1)
    let user = message.mentions.members.first();
    let jailrole = message.guild.roles.cache.get("701986202550665237");
    let verifiedrole = message.guild.roles.cache.get("581580272399679595");
    await(user.roles.remove(jailrole.id));
    await(user.roles.add(verifiedrole.id))
  }
}