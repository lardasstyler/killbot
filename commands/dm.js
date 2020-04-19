const Discord = require('discord.js');
const prefix = '-';
module.exports = {
  name: "dm",
  aliases: "pm",
  run: async (bot, message, args) =>{
    let noEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(noEmbed)
    let user = message.mentions.members.first();
    let nouserEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not state a user to DM therefore, no one was DM'd!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!user) return message.channel.send(nouserEmbed)
    const women = message.content.slice(prefix.length).trim().split(/ +/g);
    let dm = women.slice(2).join(' ')
    user.send(dm)
    message.delete()
    let logs = bot.channels.cache.get("688867784947531857");
    let logEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("A Staff Member Sent a DM!")
    .addField("Staff Member:", `<@${message.author.id}>`, true)
    .addField("User:", user.user.tag, true)
    .addField("Content:", dm, true)
    .setFooter(`ID: ${user.user.id}`)
    .setTimestamp()
    logs.send(logEmbed)
  }
}