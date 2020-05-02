const Discord = require('discord.js');
module.exports = {
  name: "fff",
  aliases: [],
  run: async (bot, message, args) =>{
    if (message.author.id !== '457182175075500053') return;
 let embed = new Discord.MessageEmbed()
.setAuthor("Applications & Appeals", message.guild.IconURL)
.setDescription("To apply or appeal your ban click me! If you are applying and you get denied, you have to wait at least **29-31** days to apply again. Be sure to not be lazy while applying and try your best! Good luck!")
.setFooter(`PigPig and Raging's Discord Server | Applications & Appeals`)
.setColor("PINK")
message.channel.send(embed)
  }
}