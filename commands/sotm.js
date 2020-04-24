const Discord = require('discord.js');
module.exports = {
  name: "motm",
  aliases: [],
  run: async (bot, message, args) =>{
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor("MOTM", message.guild.iconURL())
    .setDescription("<@365110535760379914> - coffeee")
    .setFooter('PigPig and Raging’s Discord Server | MOTM')
    message.channel.send(embed)
  }
}