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
    
    await(mutee.addRole(muterole.id));
    let chatEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`***${mutee.tag} was muted!**`)
    message.channel.send(chatEmbed)
    let logs = message.guild.channels.cache.get("456272126756782101");
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Mute | ${mutee.tag}`, mutee.displayAvatarURL())
      .addField("User:", `${mutee.tag}`, true)
      .addField("Moderator:", `<@${message.author.id}>`, true)
      .addField("Time:", ms(mutetime), true)
      .setFooter(`USERS ID: ${mutee.id}`)
      .setTimestamp();
    logs.send(embed)
    
    setTimeout(function(){
      mutee.removeRole(muterole)
    }, ms(mutetime))
  }
}