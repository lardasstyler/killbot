const Discord = require('discord.js');
const prefix = '?';
module.exports = {
  name: "warn",
  aliases: "alert",
  run: async (bot, message, args) =>{
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    //Defining
    
    
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let reason = args.slice(1).join(' ') 
        
    
    
    //Command
    let warnEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Warning a User**")
    .setDescription("To warn a user, do `?warn [user] (reason)`\n \n You can mention the user to warn them or use their id!")
    if(!user) return message.channel.send(warnEmbed)
    
    
    


      let noReason = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Command: Warn**")
    .setDescription("Please state a reason to warn this user.")
    
    if(!reason) return message.channel.send(noReason);

   message.channel.send(`\`${user.user.tag}\` was warned for: \`${reason}\``)
    
    let warnEmbed1 = new Discord.MessageEmbed()
    .setTitle("⚠️ You were warned! ⚠️")
    .setColor("#2F3136")
    .addField("Server:", message.guild.name, true)
    .addField("Moderator:", `${message.author.tag}`, true)
    .addField("Reason:", `${reason}`, true)
    .setTimestamp()
    user.send(warnEmbed1)
    message.delete(); 
    let logs = message.guild.channels.cache.get("456272126756782101");
    let embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setAuthor(`Warn | ${user.user.tag}`, user.user.displayAvatarURL())
      .addField("User:", `${user.user.tag}`, true)
      .addField("Moderator:", `<@${message.author.id}>`, true)
      .addField("Reason:", `${reason}`, true)
      .setFooter(`ID: ${user.id}`)
      .setTimestamp();
    logs.send(embed)
  }
}