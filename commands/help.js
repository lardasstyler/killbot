const Discord = require('discord.js');
module.exports = {
  name: "help",
  aliases: "info",
  run: async (bot, message, args) => {
    if (args[0] === 'commands') {
      let commandsCount = '12'
      let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Commands List", message.guild.iconURL()) 
    .setDescription("**❓ Helpful**: `coronavirus`, `createticket`, `help`\n \n **😂 Fun**: `gamermeter`, `yesno`, `8ball`\n \n **👮 Staff**: `ban`, `dm`, `kick`, `purge`, `warn`\n \n **✨ Misc**: `ping`\n \n [**Rules!**](https://discordapp.com/channels/290987848302067712/561008923453423657/) (last updated 4/4/2020)")
    .setFooter(`${message.guild.me.displayName} | Total Commands: ${commandsCount}`, bot.user.displayAvatarURL())
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
    .setDescription("<@265533494090924034>\n<@324686137308479488>\n<@389179805368582154>\n<@412782358358523905>\n<@274311171518234634>\n<@530328255312560128>\n<@498495003769700352>\n<@457182175075500053>\n<@625500466335186967>\n<@515620004784373779>\n<@532370329662914561>\n<@501143839122391060>\n<@490933512027897868>\n<@649003865676709924>\n<@334475646116036618>\n")
    .setFooter(`Requested by ${message.author.tag}`)
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