const Discord = require('discord.js');
module.exports = {
  name: "yesno",
  aliases: "yn",
  run: async (bot, message, args) =>{
  var choices = ["Yes", "No"];

    var output = choices[Math.floor(Math.random() * choices.length)];
    message.channel.send(`<@${message.author.id}> => ${output}`);
  }
}