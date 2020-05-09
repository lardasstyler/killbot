const Discord = require('discord.js');
module.exports = {
  name: "purge",
  aliases: "clear",
  run: async (bot, message, args) =>{
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
    if (isNaN(args[0])) return message.channel.send("Please provide a valid number!")
    if(args[0] > 100) return message.channel.send("Please provide a number less than 100!")
    message.channel.bulkDelete(args[0])
    message.delete()
  }
}