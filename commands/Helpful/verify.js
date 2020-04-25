const Discord = require('discord.js');
module.exports = {
  name: "verify",
  aliases: [],
  run: async (bot, message, args) =>{
  let verifiedrole = message.guild.roles.cache.get("581580272399679595");
  await(message.member.roles.add(verifiedrole.id)), message.delete()
    let embed = new Discord.MessageEmbed()
    .setTitle("**Verified**")
    .setColor("#2F3136")
    .setDescription(`You are now verified in ${message.guild.name}! Please read <#561008923453423657> to have the best experience!`)
    message.author.send(embed)
  }
}