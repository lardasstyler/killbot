const Discord = require('discord.js');
const prefix = '?';
const ms = require('ms');
module.exports = {
  name: "tempmute",
  aliases: [],
  run: async (bot, message, args) =>{
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    
    //Defining Stuff
    
    
    let user = message.mentions.members.first();
    let muterole = message.guild.roles.cache.get("674390381856686099");
    let verifiedrole = message.guild.roles.cache.get("581580272399679595");
    let mutetime = args[1];
    let logs = message.guild.channels.cache.get("456272126756782101");
    
    //Command
    
    
    let muteEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Tempmuting a User**")
    .setDescription("To tempmute a user, do `-tempmute [user] [time]`\n \n You can only ping the user if you want to tempmute them.")
    
    
    if (!user) return message.channel.send(muteEmbed);
    
    
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Command: Tempmute**")
    .setDescription("I can't tempmute this user. Please select a user that is not staff.")
    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorEmbed)
    
    

    let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Command: Tempmute**")
    .setDescription("Please specify the amount of time you want to tempmute this user for. If it is forever, do `-mute [user]`.")
    if(!mutetime) return message.channel.send(errorEmbed1)
    
    await(user.roles.add(muterole.id));
    await(user.roles.remove(verifiedrole.id)), message.channel.send(`\`${user.user.tag}\` was muted!`)

  

    let embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setAuthor(`Tempmute | ${user.user.tag}`, user.user.displayAvatarURL())
      .addField("User:", `${user.user.tag}`, true)
      .addField("Moderator:", `<@${message.author.id}>`, true)
      .addField("Time:", `${ms(mutetime)} milisecs`, true)
      .setFooter(`USERS ID: ${user.id}`)
      .setTimestamp();
    logs.send(embed)
   let muteEmbed1 = new Discord.MessageEmbed()
    .setTitle("⚠️ You were muted! ⚠️")
    .setColor("#2F3136")
    .addField("Server:", message.guild.name, true)
    .addField("Moderator:", `${message.author.tag}`, true)
   .addField("Time:", `${ms(mutetime)} milisecs`, true)
    .setTimestamp()
    user.send(muteEmbed1)
    
    setTimeout(function(){
      user.roles.remove(muterole.id)
      user.roles.add(verifiedrole.id)
    }, ms(mutetime))
  }
}