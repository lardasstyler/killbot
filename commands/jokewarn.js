const Discord = require('discord.js');
const prefix = '-';
module.exports = {
  name: "jokewarn",
  aliases: "alert",
  run: async (bot, message, args) =>{
            let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(errorEmbed1);
    let user = message.mentions.users.first();
        let errorEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not state a user to warn therefore, nobody was warned!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!user) return message.channel.send(errorEmbed)
    const women = message.content.slice(prefix.length).trim().split(/ +/g);
    let reason = women.slice(2).join(' ') 
    if(!reason) return message.channel.send("Please state a reason to warn this user!");
    let chatEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`***${user.tag} was warned., ${reason}***`)
    message.channel.send(chatEmbed)
    let warnEmbed = new Discord.MessageEmbed()
    .setTitle("⚠️ You were warned! ⚠️")
    .setColor("BLUE")
    .addField("Server:", message.guild.name, true)
    .addField("Moderator:", `${message.author.tag}`, true)
    .addField("Reason:", `${reason}`, true)
    .setTimestamp()
    user.send(warnEmbed)
    message.delete(); 
  }
}