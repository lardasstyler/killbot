const Discord = require('discord.js');
module.exports = {
  name: "fff",
  aliases: [],
  run: async (bot, message, args) =>{
    if (message.author.id !== '457182175075500053') return;
 let embed = new Discord.MessageEmbed()
.setTitle("Embeding")
.setDescription("gay")
.setFooter(`Requested by ${message.author.tag}`)
.setColor("RANDOM")
message.channel.send(embed)
  }
}