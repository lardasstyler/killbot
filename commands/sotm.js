const Discord = require('discord.js');
module.exports = {
  name: "sotm",
  aliases: [],
  run: async (bot, message, args) =>{
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription("If you ask for members to vote for you, you will be disqualified!")
    message.channel.send(embed)
  }
}