const Discord = require('discord.js');
module.exports = {
  name: `ban`,
  aliases: [`hardban`, `permban`],
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    //Defining Stuff
    
    
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let logs = message.guild.channels.cache.get("456272126756782101");
    
    
    //Command
    
    let banEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Banning a User**")
    .setDescription("To ban a user, do `?ban [user]`\n \n You can mention the user to ban them or use their id!")
    if (!user) return message.channel.send(banEmbed);
    
    
    message.delete();
    
    
    await user.kick(), message.channel.send(`\`${user.user.tag}\` was banned!`);
    
    
    const embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle("Banned User")
      .addField("User:", `${user.tag}`, true)
      .addField("Moderator:", `<@${message.author.id}>`, true)
      .setFooter(`ID: ${user.id}`)
      .setTimestamp();
    logs.send(embed);
  }
}