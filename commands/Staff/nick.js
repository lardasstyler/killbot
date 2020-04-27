const Discord = require('discord.js');
module.exports = {
  name: "nick",
  aliases: [],
  run: async (bot, message, args) =>{
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
    
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let nickname = args.slice(1).join(" ")
      let nickEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Changing a Users Nickname**")
    .setDescription("To change a users nickname, do `?nick [user] (nickname)`. \n \n You can mention the user to nickname them or use their id!")
    if(!user) return message.channel.send(nickEmbed)
          let nonickEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("**Command: Nick**")
    .setDescription("Please provide a nickname.")
    
    if(user.id === '457182175075500053') return;
    if(!nickname) return message.channel.send(nonickEmbed)
    
    user.setNickname(nickname)
    message.channel.send(`\`${user.user.username}\`s nickname was set to \`${nickname}\`.`)
  }
}