const Discord = require('discord.js');
module.exports = {
  name: "avatar",
  aliases: [],
  run: async (bot, message, args) =>{
    let user = message.mentions.members.first();
    let embed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setImage(message.author.displayAvatarURL())
    .setDescription("**Here is your avatar!**")
    if(!user) return message.channel.send(embed)
    
    let newEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setImage(user.user.displayAvatarURL())
    .setDescription(`\`${user.user.username}\`s Avatar`)
    message.channel.send(newEmbed)
  }
}