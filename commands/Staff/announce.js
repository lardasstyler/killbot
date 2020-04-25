const Discord = require('discord.js');
const prefix = '?';
module.exports = {
  name: "announce",
  aliases: [],
  run: async (bot, message, args) =>{

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    
    let announce = message.mentions.channels.first();
    

    let ann = args.slice(2).join(' ') 
    let annEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Announcing**")
    .setDescription("To announce anything to any channel, do `-announce #channel (announcement)`.")
    if(!ann) return message.channel.send(annEmbed);
    let announceEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Announcement", message.guild.iconURL())
    .setDescription(ann)
    .setFooter(`Announced by ${message.author.tag}`)
    .setTimestamp()
    announce.send(announceEmbed)
  }
}