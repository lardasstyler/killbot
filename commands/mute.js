const Discord = require('discord.js');
const ms = require('ms');
const prefix = '-';
module.exports = {
  name: "mute",
  aliases: [],
  run: async (bot, message, args) =>{
    let mutee = message.mentions.members.first();
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not specify a user to mute therefore, nobody was muted!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!mutee) return message.channel.send(errorEmbed)
    if(mutee.hasPermission("ADMINISTRATOR")) 
  }
}