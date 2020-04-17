const Discord = require('discord.js');
module.exports = {
  name: "gamermeter",
  aliases: "gamer",
  run: async (bot, message, args) =>{
    var choices = [
      "🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩",
      "🟩🟩🟩🟩🟩🟩🟩🟩🟩🟥",
      "🟩🟩🟩🟩🟩🟩🟩🟩🟥🟥",
      "🟩🟩🟩🟩🟩🟩🟩🟥🟥🟥",
      "🟩🟩🟩🟩🟩🟩🟥🟥🟥🟥",
      "🟩🟩🟩🟩🟩🟥🟥🟥🟥🟥",
      "🟩🟩🟩🟩🟥🟥🟥🟥🟥🟥",
      "🟩🟩🟩🟥🟥🟥🟥🟥🟥🟥",
      "🟩🟩🟥🟥🟥🟥🟥🟥🟥🟥",
      "🟩🟥🟥🟥🟥🟥🟥🟥🟥🟥",
      "🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥"
    ];
    var output = choices[Math.floor(Math.random() * choices.length)];
    const embed = new Discord.MessageEmbed()
    
    .setDescription(`**Lame** | ${output} | **Gamer**`)
    .setColor('WHITE')
    message.channel.send(embed)
  }
}