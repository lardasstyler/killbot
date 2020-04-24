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
    let noReason = new Discord.MessageEmbed()
        .setColor("#2F3136")
    .setTitle("**Command: Jokewarn**")
    .setDescription("Please state a reason to jokewarn this user. ")
    
  if(!reason) return message.channel.send(noReason);
    
    message.channel.send(`\`${user.user.tag}\` was jokewarned!`)
   
    
    let warnEmbed = new Discord.MessageEmbed()
    .setTitle("⚠️ You were jokewarned! ⚠️")
    .setColor("#2F3136")
    .addField("Server:", message.guild.name, true)
    .addField("Moderator:", `${message.author.tag}`, true)
    .addField("Reason:", `${reason}`, true)
    .setTimestamp()
    user.send(warnEmbed)
    message.delete(); 
  }
}