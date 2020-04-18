const Discord = require('discord.js');
//tyler
//you idiot
// look at line 6
module.exports = {
  //im smart
  run: "help",
  aliases: "info",
  run: async (bot, message, args) => {
    if (args[0] === 'commands') {
      let embed = new Discord.MessageEmbed()
    .setColor("#770D19")
    .setTitle("Commands")
    .addField("ban", "This command removes a member from the guild. Only for staff members.")
    .addField("kick", "This command temporarily removes a member from the guild. Only for staff members.")
    .addField("ping", "Shows the bots ping!")
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
    
    else if (args[0] === 'version') {
          let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Version")
    .addField("Version:", "1.5", true)
    .addField("Last Update:", "Less messier code!", true)
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
    }
    
    else if (args[0] === 'support') {
          let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Support")
    .setDescription("Need help? Want to suggest something? Do -createticket or DM me for help! A staff member will get back to you ASAP! I would recommend DM'ing me other than creating a ticket!")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
    }
    
   else if (args[0] === 'staff') {
          let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Staff Members")
    .setDescription("<@265533494090924034>\n<@324686137308479488>\n<@389179805368582154>\n<@412782358358523905>\n<@274311171518234634>\n<@530328255312560128>\n<@498495003769700352>\n<@457182175075500053>\n<@625500466335186967>\n<@515620004784373779>\n<@532370329662914561>\n<@501143839122391060>\n<@490933512027897868>\n<@649003865676709924>\n<@456641711486009355>")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed) 
    } else {
      let embed = new Discord.MessageEmbed()
    .setTitle("Help Menu")
    .setColor("RANDOM")
    .setDescription("Please specify what you need help with! Here are some of the things that people commonly need help with!")
    .addField("-help staff", "Gives you a list of staff!")
    .addField("-help commands", "Gives you a list of commands!")
    .addField("-help support", "Shows you how to get support from a staff member!")
    .addField("-help version", "States the version and last update of the bot!")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
    }
  }
 }