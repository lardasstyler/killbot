const Discord = require('discord.js');
module.exports = {
  name: "jail",
  aliases: [],
  run: async (bot, message, args) =>{
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    
    //Defining Stuff
    
    
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let jailrole = message.guild.roles.cache.get("701986202550665237");
    let verifiedrole = message.guild.roles.cache.get("581580272399679595");
    let logs = message.guild.channels.cache.get("456272126756782101");
    
    //Command
    
    
    let jailEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Jailing a User**")
    .setDescription("To jail a user, do `?jail [user]`\n \n You can mention the user to jail them or use their id!")
    
    
    if (!user) return message.channel.send(jailEmbed);
    
    
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Command: Jail**")
    .setDescription("I can't jail this user. Please select a user that is not staff.")
    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorEmbed)
    
    

    
    await(user.roles.add(jailrole.id));
    await(user.roles.remove(verifiedrole.id)), message.channel.send(`\`${user.user.tag}\` was jailed!`)

  

    let embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setAuthor(`Jail | ${user.user.tag}`, user.user.displayAvatarURL())
      .addField("User:", `${user.user.tag}`, true)
      .addField("Moderator:", `<@${message.author.id}>`, true)
      .addField("Time:", `Forever`, true)
      .setFooter(`USERS ID: ${user.id}`)
      .setTimestamp();
    logs.send(embed)
   let jailEmbed1 = new Discord.MessageEmbed()
    .setTitle("⚠️ You were put in jail! ⚠️")
    .setColor("#2F3136")
    .addField("Server:", message.guild.name, true)
    .addField("Moderator:", `${message.author.tag}`, true)
   .addField("Time:", `Forever`, true)
    .setTimestamp()
    user.send(jailEmbed1)
}
}