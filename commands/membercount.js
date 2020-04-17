const Discord = require('discord.js');
module.exports = {
  name: `membercount`,
  aliases: [`mcount`, `usercount`],
  run: async (bot, message, args) => {
    let guild = message.send()
    let embed = new Discord.MessageEmbed()
      .setColor("#3E70CE")
      .setTitle("Server Member Count")
      .setDescription(
        `This server has a total of ** ${guild.memberCount}** members!`
      )
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp();
    message.channel.send(embed);
  }
}