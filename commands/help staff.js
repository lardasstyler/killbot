const Discord = require('discord.js');
module.exports = {
  name: "help staff",
  aliases: "info staff",
  run: async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Staff Members")
    .setDescription("<@265533494090924034>\n<@324686137308479488>\n<@389179805368582154>\n<@412782358358523905>\n<@274311171518234634>\n<@530328255312560128>\n<@498495003769700352>\n<@457182175075500053>\n<@625500466335186967>\n<@515620004784373779>\n<@532370329662914561>\n<@501143839122391060>\n<@490933512027897868>\n<@649003865676709924>\n<@456641711486009355>")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed) 
  }
}