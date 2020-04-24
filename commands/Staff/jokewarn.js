const Discord = require('discord.js');
const prefix = '-';
module.exports = {
  name: "jokewarn",
  aliases: "alert",
  run: async (bot, message, args) =>{
if(!message.member.hasPermission('MANAGE_MESSAGES')) return; 
    
    
    let user = message.mentions.users.first();
    
    
    
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Jokewarning a User**")
    .setDescription("To jokewarn a user, do `-jokewarn [user] (reason)`\n \n You can only ping the user if you want to jokewarn them.")
    if (!user) return message.channel.send(errorEmbed);


    let reason = args.slice(2).join(' ') 
    if(!reason) return message.channel.send("Please state a reason to warn this user!");
    let chatEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`***${user.tag} was warned., ${reason}***`)
    message.channel.send(chatEmbed)
    let warnEmbed = new Discord.MessageEmbed()
    .setTitle("⚠️ You were jokewarned! ⚠️")
    .setColor("BLUE")
    .addField("Server:", message.guild.name, true)
    .addField("Moderator:", `${message.author.tag}`, true)
    .addField("Reason:", `${reason}`, true)
    .setTimestamp()
    user.send(warnEmbed)
    message.delete(); 
  }
}