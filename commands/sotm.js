const Discord = require('discord.js');
module.exports = {
  name: "sotm",
  aliases: [],
  run: async (bot, message, args) =>{
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription("<@285913506212085762> - Nongo")
    message.channel.send(embed)
  }
}