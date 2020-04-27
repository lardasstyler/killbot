const Discord = require('discord.js');
module.exports = {
  name: `kick`,
  aliases: [`boot`, `k`],
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return;
    //Defining Stuff
    
    
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let logs = message.guild.channels.cache.get("456272126756782101");
    
    
    //Command
    
    let kickEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Kicking a User**")
    .setDescription("To kick a user, do `?kick [user]`\n \n You can mention the user to kick them or use their id!")
    if (!user) return message.channel.send(kickEmbed);
    
    
    message.delete();
    
    
    await user.kick(), message.channel.send(`\`${user.user.tag}\` was kicked!`);
    
    
    const embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle("Kicked User")
      .addField("User:", `<@${user.id}>`, true)
      .addField("Moderator:", `<@${message.author.id}>`, true)
      .setFooter(`ID: ${user.id}`)
      .setTimestamp();
    logs.send(embed);
  }
}