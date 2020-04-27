const Discord = require('discord.js');
const prefix = '?';
module.exports = {
  name: "dm",
  aliases: "pm",
  run: async (bot, message, args) =>{

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let nouserEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**DM'ing a User**")
    .setDescription("To DM a user, do `?dm [user] [content]`\n \n You can mention the user to DM them or use their id!")
    
    if(!user) return message.channel.send(nouserEmbed)
    
    

    let dm = args.slice(2).join(' ')
    
    
    user.send(dm)
    message.delete()
    let logs = bot.channels.cache.get("688867784947531857");
    let logEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("A Staff Member Sent a DM!")
    .addField("Staff Member:", `<@${message.author.id}>`, true)
    .addField("User:", user.user.tag, true)
    .addField("Content:", dm, true)
    .setFooter(`ID: ${user.user.id}`)
    .setTimestamp()
    logs.send(logEmbed)
  }
}