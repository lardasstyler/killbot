const Discord = require('discord.js');
module.exports = {
  name: "tylerstalking",
  aliases: [],
  run: async (bot, message, args) =>{
    let embed = new Discord.MessageEmbed()
    .setColor("#FF69B4")
    .setAuthor("Applications & Appeals", message.guild.iconURL())
    .setDescription("To apply or appeal your ban [click me!](https://docs.google.com/forms/d/e/1FAIpQLSf1o3Mv-YYWCloHKatzEthl2mzLcnFDriuuwIoUHilQKXLbZA/viewform) If you are applying and you get denied, you have to wait at least **29-31** days to apply again. Be sure to not be lazy while applying and try your best! Good luck!")
    .setFooter("PigPig and Raging’s Discord Server | Applications & Appeals")
    message.channel.send(embed)
  }
}