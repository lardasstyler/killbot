const Discord = require('discord.js');
module.exports = {
  name: "avatar",
  aliases: [],
  run: async (bot, message, args) =>{
    let user = message.mentions.members.first();
    let embed = new Discord.MessageEmbed()
    .setImage(message.author.displayAvatarURL())
    .setDescription("**Here is your avatar!**")
    message.channel.send(embed)
    
    let newEmbed = new Discord.MessageEmbed()
    
  }
}