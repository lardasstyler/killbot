const Discord = require('discord.js');
module.exports = {
  name: "purge",
  aliases: "clear",
  run: async (bot, message, args) =>{
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
        let purgeEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Command: Purge**")
    .setDescription("Please provide a number between 2 and 100 for messages to purge.")
   
    
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      
      
      return message.channel.send(purgeEmbed);
   
    const fetched = await message.channel.messages.fetch({
      limit: deleteCount
    });
    message.channel.bulkDelete(fetched);
  }
}