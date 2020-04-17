const Discord = require('discord.js');
module.exports = {
  name: "help support",
  aliases: "info support",
  run: async (bot, message, args) =>{
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Support")
    .setDescription("Need help? Want to suggest something? Do -createticket or DM me for help! A staff member will get back to you ASAP! I would recommend DM'ing me other than creating a ticket!")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  }
}