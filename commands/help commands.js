const Discord = require('discord.js');
module.exports = {
  name: "help commands",
  aliases: "info commands",
  run: async (bot, message, args) =>{
    let embed = new Discord.MessageEmbed()
    .setColor("#770D19")
    .setTitle("Commands")
    .addField("ban", "This command removes a member from the guild. Only for staff members.")
    .addField("kick", "This command temporarily removes a member from the guild. Only for staff members.")
    .addField("membercount", "States the guilds member count!")
    .addField("ping", "Shows the bots ping!")
    .addField("rps (r,p,s)", "Usage: rps r, rps p, rps s. Fun tiny command!")
    .addField("coronavirus/covid19", "Shows the stats of the current sickness going around. Use -coronavirus {country}")
    .addField("yesno", "Executing this command will make the bot state yes or no.")
    .addField("gamermeter", "Shows you how epic you are at gaming.")
    .addField("purge", "Bulk deletes chats! Only for staff.")
    .addField("warn", "Warns a user! Only for staff.")
    .addField("createticket", "Support command. If you need any help from a staff member just execute this command and ping a staff member in the ticket.")
    .addField("closeticket", "Support Command. Closes the ticket once you create it.")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  }
}