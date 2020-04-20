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
    let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("I can't mute this user!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(mutee.hasPermission("ADMINISTRATOR")) return message.channel.send(errorEmbed1)
    let muterole = message.guild.roles.cache.get("674390381856686099");
    let mutetime = args[1];
    let errorEmbed2 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("Please specify the amount of time you want to mute this user for!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!mutetime) return message.channel.send(errorEmbed2)
  }
}