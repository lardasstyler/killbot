const Discord = require('discord.js');
module.exports = {
  name: "mute",
  aliases: [],
  run: async (bot, message, args) =>{
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    
    //Defining Stuff
    
    
    let user = message.mentions.members.first();
    let muterole = message.guild.roles.cache.get("701986202550665237");
    let verifiedrole = message.guild.roles.cache.get("581580272399679595");
    let logs = message.guild.channels.cache.get("456272126756782101");
    
    //Command
    
    
    let muteEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Muting a User**")
    .setDescription("To mute a user, do `?mute [user]`\n \n You can only ping the user if you want to mute them.")
    
    
    if (!user) return message.channel.send(muteEmbed);
    
    
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Command: Mute**")
    .setDescription("I can't mute this user. Please select a user that is not staff.")
    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorEmbed)
    
    

    
    await(user.roles.add(muterole.id));
    await(user.roles.remove(verifiedrole.id)), message.channel.send(`\`${user.user.tag}\` was muted!`)

  

    let embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setAuthor(`Mute | ${user.user.tag}`, user.user.displayAvatarURL())
      .addField("User:", `${user.user.tag}`, true)
      .addField("Moderator:", `<@${message.author.id}>`, true)
      .addField("Time:", `Forever`, true)
      .setFooter(`USERS ID: ${user.id}`)
      .setTimestamp();
    logs.send(embed)
   let jailEmbed1 = new Discord.MessageEmbed()
    .setTitle("⚠️ You were muted! ⚠️")
    .setColor("#2F3136")
    .addField("Server:", message.guild.name, true)
    .addField("Moderator:", `${message.author.tag}`, true)
   .addField("Time:", `Forever`, true)
    .setTimestamp()
    user.send(jailEmbed1)
}
}