const Discord = require('discord.js');
module.exports = {
  name: `ban`,
  aliases: [`hardban`, `permban`],
  run: async (bot, message, args) => {
let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        errorEmbed1
      );
    message.delete();
    const user1 = message.mentions.members.first();
    let logs = message.guild.channels.cache.get("456272126756782101");
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not state a user to ban therefore, nobody was banned!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if (!user1) return message.channel.send(errorEmbed);
    await user1.ban(), message.channel.send(`${user1} was banned!`);
    const embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Banned User")
      .addField("User:", `<@${user1.id}>`, true)
      .addField("Mod:", `<@${message.author.id}>`, true)
      .setFooter(`USERS ID: ${user1.id}`)
      .setTimestamp();
    logs.send(embed);
  }
}