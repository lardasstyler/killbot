const Discord = require('discord.js');
module.exports = {
  name: `kick`,
  aliases: [`boot`, `k`],
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return;
    //Defining Stuff
    
    
    const user = message.mentions.members.first();
    let logs = message.guild.channels.cache.get("456272126756782101");
    
    
    //Command
    
    let kickEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Kicking a User**")
    .setDescription("To kick a user, do `-kick [user]`\n \n You can only ping the user if you want to kick them.")
    if (!user) return message.channel.send(kickEmbed);
    
    
    message.delete();
    
    
    await user.ban(), message.channel.send(`\`${user.user.tag}\` was kicked!`);
    
    
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