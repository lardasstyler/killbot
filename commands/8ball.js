const Discord = require('discord.js');
const prefix = '-';
module.exports = {
  name: "8ball",
  aliases: [],
  run: async (bot, message, args) =>{
     let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You don't have a second argument!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!args[0]) return message.channel.send(errorEmbed1)
    var choices = ["Yes", "No", "Maybe", "Probably", "Probably not"];

    var output = choices[Math.floor(Math.random() * choices.length)];
    message.channel.send(`<@${message.author.id}> => ${output}`);
  }
}