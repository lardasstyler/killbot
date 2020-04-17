const Discord = require('discord.js');
module.exports = {
  name: "help version",
  aliases: "info version",
  run: async (bot, message, args) =>{
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Version")
    .addField("Version:", "1.5", true)
    .addField("Last Update:", "Less messier code!", true)
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  }
}