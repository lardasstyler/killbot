const Discord = require('discord.js');
module.exports = {
  name: "motm",
  aliases: [],
  run: async (bot, message, args) =>{
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor("MOTM", message.guild.iconURL())
    .setDescription("**Welcome to Member of the Month**! This is similar to **SOTM** but with members. We have had this contest in the past but removed it because we ran out of members to use for **MOTM**! Now, we have a lot more member than before!\n \n **Explanation:** It's pretty simple, a staff member chooses a member every month to be the **MOTM**! The **MOTM** will get a role called '**Member of the Month**' and will keep it until we elect the next member!")
    .setFooter('PigPig and Raging’s Discord Server | MOTM')
    message.channel.send(embed)
  }
}