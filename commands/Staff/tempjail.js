const Discord = require('discord.js');
const prefix = '?';
const ms = require('ms');
module.exports = {
  name: "tempjail",
  aliases: [],
  run: async (bot, message, args) =>{
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    
    //Defining Stuff
    
    
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let jailrole = message.guild.roles.cache.get("701986202550665237");
    let verifiedrole = message.guild.roles.cache.get("581580272399679595");
    let jailtime = args[1];
    let logs = message.guild.channels.cache.get("456272126756782101");
    
    //Command
    
    
    let jailEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Tempjailing a User**")
    .setDescription("To tempjail a user, do `?tempjail [user] [time]`\n \n You can mention the user to tempjail them or use their id!")
    
    
    if (!user) return message.channel.send(jailEmbed);
    
    
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Command: Tempjail**")
    .setDescription("I can't tempjail this user. Please select a user that is not staff.")
    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorEmbed)
    
    

    let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Command: Tempjail**")
    .setDescription("Please specify the amount of time you want to tempjail this user for. If it is forever, do `?jail [user]`.")
    if(!jailtime) return message.channel.send(errorEmbed1)
    
    await(user.roles.add(jailrole.id));
    await(user.roles.remove(verifiedrole.id)), message.channel.send(`\`${user.user.tag}\` was jailed!`)

  

    let embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setAuthor(`Tempjail | ${user.user.tag}`, user.user.displayAvatarURL())
      .addField("User:", `${user.user.tag}`, true)
      .addField("Moderator:", `<@${message.author.id}>`, true)
      .addField("Time:", `${ms(jailtime)} milisecs`, true)
      .setFooter(`USERS ID: ${user.id}`)
      .setTimestamp();
    logs.send(embed)
   let jailEmbed1 = new Discord.MessageEmbed()
    .setTitle("⚠️ You were put in jail! ⚠️")
    .setColor("#2F3136")
    .addField("Server:", message.guild.name, true)
    .addField("Moderator:", `${message.author.tag}`, true)
   .addField("Time:", `${ms(jailtime)} milisecs`, true)
    .setTimestamp()
    user.send(jailEmbed1)
    
    setTimeout(function(){
      user.roles.remove(jailrole.id)
      user.roles.add(verifiedrole.id)
    }, ms(jailtime))
  }
}