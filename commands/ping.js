const Discord = require('discord.js');
module.exports = {
  name: `ping`,
  aliases: [`pong`, `botping`],
  run: async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("Bot Ping")
    .setColor("RANDOM")
    .setDescription(":ping_pong: Pong! " + `${Math.round(bot.ws.ping)}` + "ms!")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  }
}