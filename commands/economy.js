const db = require('quick.db');
const Discord = require('discord.js');
const prefix = '-';
module.exports = {
  name: "test",
  aliases: ["idk", "yet"],
  run: async (bot, message, args) =>{
    if (message.author.bot) return;
    if (!message.guild) return;
    const dad = message.content.slice(prefix.length).trim().split(/ +/g);
  }
}