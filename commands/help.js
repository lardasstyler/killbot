const Discord = require('discord.js');
module.exports = {
  run: "help",
  aliases: "info",
  run: async (bot, message, args) => {
      let embed = new Discord.MessageEmbed()
    .setTitle("Help Menu")
    .setColor("RANDOM")
    .setDescription("Please specify what you need help with! Here are some of the things that people commonly need help with!")
    .addField("-help staff", "Gives you a list of staff!")
    .addField("-help commands", "Gives you a list of commands!")
    .addField("-help support", "Shows you how to get support from a staff member!")
    .addField("-help version", "States the version and last update of the bot!")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  }
 }