const Discord = require('discord.js');
const prefix = '-';
module.exports = {
  name: "report",
  aliases: [],
  run: async (bot, message, args) =>{
    const women = message.content.slice(prefix.length).trim().split(/ +/g);
    let report = women.slice(2).join(' ')
    let user = message.mentions.users.first();
              let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
  }
}