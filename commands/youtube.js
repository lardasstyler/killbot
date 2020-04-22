const Discord = require('discord.js');
module.exports = {
  name: "eh",
  aliases: [],
  run: async (bot, message, args) =>{
    let embed = new Discord.MessageEmbed()
    .setTitle("Hi Youtube!")
    .setDescription("Hey youy tugehifvguwgfer")
    .setColor("RANDOM")
    message.channel.send(embed)
  }
}