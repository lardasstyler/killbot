const Discord = require('discord.js');
module.exports = {
  name: "motm",
  aliases: [],
  run: async (bot, message, args) =>{
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor("MOTM", message.guild.iconURL())
    .setDescription("If you are on this list, you can't vote. Be sure to vote wisely because this ends in a day!")
    .setFooter('PigPig and Raging’s Discord Server | MOTM')
    message.channel.send(embed)
  }
}