const Discord = require('discord.js');
module.exports = {
  name: "fff",
  aliases: [],
  run: async (bot, message, args) =>{
    if (message.author.id !== '648698528872398848') return;
 let embed = new Discord.MessageEmbed()
.setAuthor("Applications & Appeals", message.guild.iconURL())
.setDescription("To apply or appeal your ban [click me](https://docs.google.com/forms/d/e/1FAIpQLSdF7XfZrLxTSe1rRBQZTgH_7PXuQxz4M6noL1kDTH--agbgIQ/viewform)! If you are applying and you get denied, you have to wait at least **29-31** days to apply again. Be sure to not be lazy while applying and try your best! Good luck!")
.setFooter(`PigPig and Raging's Discord Server | Applications & Appeals`)
.setColor("#FF69B4")
message.channel.send(embed)
  }
}