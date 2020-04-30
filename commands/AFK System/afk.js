const Discord = require('discord.js');
const rafk = require('./afk.json')
module.exports = {
  name: "afk",
  aliases: [],
  run: async (bot, message, args) =>{
    //Defining
    
    let reason = args.slice(0).join(" ")
    if(!reason) reason.set("AFK")
    
    //Command
    
  }
}