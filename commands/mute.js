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
    let verifiedrole = message.guild.roles.cache.get("581580272399679595");
    let mutetime = args[1];
    let errorEmbed2 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("Please specify the amount of time you want to mute this user for!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!mutetime) return message.channel.send(errorEmbed2)
    
    await(mutee.roles.add(muterole.id));
    await(mutee.roles.remove(verifiedrole.id))
    let chatEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**${mutee.user.tag} was muted!**`)
    message.channel.send(chatEmbed)
    let logs = message.guild.channels.cache.get("456272126756782101");
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Mute | ${mutee.user.tag}`, mutee.user.displayAvatarURL())
      .addField("User:", `${mutee.user.tag}`, true)
      .addField("Moderator:", `<@${message.author.id}>`, true)
      .addField("Time:", `${ms(mutetime)} milisecs`, true)
      .setFooter(`USERS ID: ${mutee.id}`)
      .setTimestamp();
    logs.send(embed)
    
    setTimeout(function(){
      mutee.roles.remove(muterole.id)
      mutee.roles.add(verifiedrole.id)
    }, ms(mutetime))
  }
}