const Discord = require('discord.js');
const prefix = '-';
module.exports = {
  name: "announce",
  aliases: [],
  run: async (bot, message, args) =>{
    let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(errorEmbed1)
    let announce = message.guild.channels.cache.get("532779225254723584");
    let user = message.mentions.users.first();
    const women = message.content.slice(prefix.length).trim().split(/ +/g);
    let ann = women.slice(1).join(' ') 
      let errorEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You didn't state anything to announce!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!ann) return message.channel.send(errorEmbed);
    let announceEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Announcement", message.guild.iconURL())
    .setDescription(ann)
    .setFooter(`Announced by ${message.author.tag}`)
    .setTimestamp()
    announce.send(announceEmbed)
  }
}