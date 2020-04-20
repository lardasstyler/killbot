const Discord = require('discord.js');
const prefix = '-';
module.exports = {
  name: "giverole",
  aliases: " ",
  description: " ",
  run: async (bot, message, args) =>{
    let roles = message.mentions.roles.first();
    let user = message.mentions.members.first();
    await(user.roles.add(roles.id)); 
  }
}