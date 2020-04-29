const Discord = require('discord.js');
module.exports = {
  name: "fff",
  aliases: [],
  run: async (bot, message, args) =>{
    if (message.author.id !== '457182175075500053') return;
 let embed = new Discord.MessageEmbed()
.setTitle("Verifying", message.guild.IconURL)
.setDescription("To verify, type `?verify` then send your message! You will then have access to the whole server! ")
.setFooter(`PigPig and Raging's Discord Server | Verifying`)
.setColor("#2F3136")
message.channel.send(embed)
  }
}