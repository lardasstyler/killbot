const Discord = require('discord.js');
module.exports = {
  name: "fff",
  aliases: [],
  run: async (bot, message, args) =>{
    if (message.author.id !== '457182175075500053') return;
    const embed = new Discord.MessageEmbed()
    .setColor('#2F3136')
    .setAuthor("Verifying", message.guild.iconURL())
    .setDescription("To verify, type `?verify`! You then will have access to the whole entire server! If the command isn't working, contact `ty#6653`!")
    .setFooter('PigPig and Raging’s Discord Server | Verification')
    message.channel.send(embed)
  }
}