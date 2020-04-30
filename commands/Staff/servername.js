const Discord = require('discord.js');
module.exports = {
  name: "servername",
  aliases: [],
  run: async (bot, message, args)=>{
    if (message.author.id !== '457182175075500053') return;
    let name = args.slice(0).join(" ")
    await message.guild.setName(name)
  }
}