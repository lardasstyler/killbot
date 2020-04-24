const Discord = require('discord.js');
const prefix = '-';
const ms = require('ms');
module.exports = {
  name: "tempjail",
  aliases: [],
  run: async (bot, message, args) =>{
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    
    //Defining Stuff
    
    
    let user = message.mentions.members.first();
    let jailrole = message.guild.roles.cache.get("701986202550665237");
    let verifiedrole = message.guild.roles.cache.get("581580272399679595");
    let jailtime = args[1];
    
    //Command
    
    
    let jailEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Jailing a User**")
    .setDescription("To jail a user, do `-jail [user]`\n \n You can only ping the user if you want to jail them.")
    
    
    if (!user) return message.channel.send(jailEmbed);
    
    
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Command: Jail**")
    .setDescription("I can't jail this user. Please select a user that is not staff.")
    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorEmbed)
    
    

    let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Command: Jail**")
    .setDescription("Please specify the amount of time you want to jail this user for. If it is forever, do -jail [user].")
    if(!jailtime) return message.channel.send(errorEmbed1)
    
    await(user.roles.add(jailrole.id));
    await(user.roles.remove(verifiedrole.id)), message.channel.send(`\`${user.user.tag}\` was banned!`)

  
    let logs = message.guild.channels.cache.get("456272126756782101");
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Jail | ${mutee.user.tag}`, mutee.user.displayAvatarURL())
      .addField("User:", `${mutee.user.tag}`, true)
      .addField("Moderator:", `<@${message.author.id}>`, true)
      .addField("Time:", `${ms(mutetime)} milisecs`, true)
      .setFooter(`USERS ID: ${mutee.id}`)
      .setTimestamp();
    logs.send(embed)
   let jailEmbed = new Discord.MessageEmbed()
    .setTitle("⚠️ You were put in jail! ⚠️")
    .setColor("BLUE")
    .addField("Server:", message.guild.name, true)
    .addField("Moderator:", `${message.author.tag}`, true)
   .addField("Time:", `${ms(mutetime)} milisecs`, true)
    .setTimestamp()
    mutee.send(jailEmbed)
    
    setTimeout(function(){
      mutee.roles.remove(jailrole.id)
      mutee.roles.add(verifiedrole.id)
    }, ms(mutetime))
  }
}