const Discord = require('discord.js');
module.exports = {
  name: "ok",
  aliases: [],
  run: async (bot, message, args) =>{
    let output = Math.round(Math.random(1000 * 1 + 1))
    message.channel.send(`ok ${output}`)
}
}