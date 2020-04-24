const Discord = require('discord.js');
const prefix = '-';
module.exports = {
  name: "report",
  aliases: [],
  run: async (bot, message, args) =>{
    const women = message.content.slice(prefix.length).trim().split(/ +/g);
    let report = women.slice(2).join(' ')
    let user = message.mentions.users.first();
      let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not state a user to report!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!user) return message.channel.send(errorEmbed1)
          let errorEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not state a reason to report this user!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!report) return message.channel.send(errorEmbed)
    message.delete()
    let logs = message.guild.channels.cache.get("701399067397455942");
    let logEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Report | ${user.tag}`, user.displayAvatarURL())
    .addField("User:", `${user.tag}`, true)
      .addField("Reporter:", `<@${message.author.id}>`, true)
      .addField("Reason:", `${report}`, true)
      .setFooter(`USERS ID: ${user.id}`)
      .setTimestamp();
    logs.send(logEmbed)
    let authorEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Your report has been submitted and will be reviewed ASAP!")
    message.author.send(authorEmbed)
  }
}