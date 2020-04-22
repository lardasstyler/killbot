const Discord = require('discord.js');
module.exports = {
  name: "kick",
  aliases: [],
  run: async (bot, message, args) =>{
    if (!message.member.hasPermission('KICK_MEMBERS')) return;
    let user = message.mentions.members.first();
    let channel = message.guild.channels.cache.get("456272126756782101");
    let errorEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription("<:exx:702650687145902103> The user you chose is a staff member, I can't kick them!")
    if (user.hasPermission('MANAGE_MESSAGES')) return message.channel.send(errorEmbed)
  }
}