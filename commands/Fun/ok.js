const Discord = require('discord.js');
module.exports = {
  name: "ok",
  aliases: [],
  run: async (bot, message, args) =>{
    let output = Math.round(Math.random(1 * 1000 + 1))
    message.channel.send(`ok ${output}`)
}
}