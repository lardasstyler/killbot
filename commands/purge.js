const Discord = require('discord.js');
module.exports = {
  name: "purge",
  aliases: "clear",
  run: async (bot, message, args) =>{
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "You do not have the permission to use that command!"
      );
    
    const deleteCount = parseInt(args[1], 10);
    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      
      return message.reply(
        "Please provide a number between 2 and 100 for messages to purge"
      );
    const fetched = await message.channel.messages.fetch({
      limit: deleteCount
    });
    message.channel.bulkDelete(fetched);
  }
}