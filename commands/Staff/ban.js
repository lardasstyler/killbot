const Discord = require('discord.js');
module.exports = {
  name: `ban`,
  aliases: [`hardban`, `permban`],
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    //Defining Stuff
    const user = message.mentions.members.first();
    let logs = message.guild.channels.cache.get("456272126756782101");
    let reason = args.slice(2).join(" ")
    //Command
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Banning a User**")
    .setDescription("To ban a user, do `-ban [user] (reason)`\n \n You can only ping the user if you want to ban them.")
    if (!user) return message.channel.send(errorEmbed);
        message.delete();
    await user.ban(), message.channel.send(`${user} was banned!`);
    const embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Banned User")
      .addField("User:", `<@${user.id}>`, true)
      .addField("Mod:", `<@${message.author.id}>`, true)
      .setFooter(`USERS ID: ${user.id}`)
      .setTimestamp();
    logs.send(embed);
  }
}