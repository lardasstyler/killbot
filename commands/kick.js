const Discord = require('discord.js');
module.exports = {
  name: `kick`,
  aliases: [`boot`, `softban`],
  run: async (bot, message, args) => {
     let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        errorEmbed1
      );
    const user = message.mentions.members.first();
    let logs = message.guild.channels.cache.get("456272126756782101");
        let errorEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not state a user to kick therefore, nobody was kicked!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if (!user) return message.channel.send(errorEmbed);
        let errorEmbed4 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("I can't kick this user!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorEmbed4)
     message.delete();
    await user.kick(), message.channel.send(`${user} was kicked!`);
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Kicked User")
      .addField("User:", `<@${user.id}>`, true)
      .addField("Mod:", `<@${message.author.id}>`, true)
      .setFooter(`USERS ID: ${user.id}`)
      .setTimestamp();
    logs.send(embed);
  }
}