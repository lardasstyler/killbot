const Discord = require('discord.js');
module.exports = {
  name: "servername",
  aliases: [],
  run: async (bot, message, args)=>{
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let name = args.slice(0).join(" ")
    await message.guild.setName(name)
  }
}