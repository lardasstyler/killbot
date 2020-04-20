const Discord = require('discord.js');
const prefix = '-';
module.exports = {
  name: "announce",
  aliases: [],
  run: async (bot, args, message) =>{
    let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(errorEmbed1)
    let announce = message.guild.channels.cache.get("532779225254723584");
    const women = message.content.slice(prefix.length).trim().split(/ +/g);
    let ann = women.slice(1).join(' ') 
      let errorEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You didn't state anything to announce!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!ann) return message.channel.send("Please state a reason to warn this user!");
  }
}