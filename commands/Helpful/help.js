const Discord = require('discord.js');
module.exports = {
  name: "help",
  aliases: "info",
  run: async (bot, message, args) => {
    if (args[0] === 'commands') {
      let commandsCount = '20'
      let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Commands List", message.guild.iconURL()) 
    .setDescription("**❓ Helpful**: `coronavirus`, `report`, `ping`, `help`\n \n **😂 Fun**: `gamermeter`, `yesno`, `8ball`, `say`, `avatar`\n \n **👮 Staff**: `ban`, `dm`, `kick`, `purge`, `warn`, `mute`, `jail`, `tempjail`, `tempmute`, `unjail`, `unmute`, `announce`")
    .setFooter(`${message.guild.me.displayName} | Total Commands: ${commandsCount}`, bot.user.displayAvatarURL())
    .setTimestamp()
    message.channel.send(embed)
    }
    
    else if (args[0] === 'version') {
          let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("AutoBots Version", bot.user.displayAvatarURL()) 
    .setDescription("**✅ Version**: 2.0.7\n \n**⬆️ Last Update**: Unjail command, Unmute command, Tempjail command, Tempmute command, less messier code and more benefits for staff members!")
    .setFooter(`${message.guild.me.displayName}'s Version | v2.0.7`)
    .setTimestamp()
    message.channel.send(embed)
    }
    
    else if (args[0] === 'support') {
          let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Support")
    .setDescription("Need help? Want to suggest something? Need to report a user? Do `-report [user] (reason)` or dm me! A staff member will get back to you ASAP!")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
    }
    
   else if (args[0] === 'staff') {
          let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Staff Team", message.guild.iconURL())
    .setDescription("To view the list of our staff team go to this [link!](https://staff-team.glitch.me/)")
    .setFooter(`Help from ${message.guild.me.displayName} `, bot.user.displayAvatarURL())
    .setTimestamp()
    message.channel.send(embed) 
    } else {
      let embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setAuthor("Help Menu", message.guild.iconURL())
     .setDescription("**🤖 Commands**: Shows you the list of commands!\n \n**❓ Support**: Shows you how to get support from a staff member!\n \n**👮 Staff**: Shows you a list of the staff members!\n \n**✅ Version**: Shows you the version of the bot and the newest update!\n \n *Commands Usages:* `-help {commands, support, staff, version}`\n \n [**Rules!**](https://discordapp.com/channels/290987848302067712/561008923453423657/) (last updated 4/4/2020)\n[**Apply!**](https://docs.google.com/forms/d/e/1FAIpQLSf1o3Mv-YYWCloHKatzEthl2mzLcnFDriuuwIoUHilQKXLbZA/viewform) (read <#605875748724670479> for more info)")
     .setFooter(`Help from ${message.guild.me.displayName} `, bot.user.displayAvatarURL())
     .setTimestamp()
    message.channel.send(embed)
    }
  }
 }