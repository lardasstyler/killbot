const Discord = require('discord.js');
module.exports = {
  name: "role",
  aliases: [],
  run: async (bot, message, args) =>{
    if (args[0] === 'test') {
      let role = 
       await(message.author.roles.add())
    }
  }
}