const Discord = require('discord.js');
const prefix = '-';
const ms = require('ms');
module.exports = {
  name: "jail",
  aliases: [],
  run: async (bot, message, args) =>{
         let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(errorEmbed1)
    let mutee = message.mentions.members.first();
    const women = message.content.slice(prefix.length).trim().split(/ +/g);
    let reason = women.slice(3).join(' ') 
    let errorEmbed7 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not specify a reason to jail this user therefore, nobody was jailed!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!reason) return message.channel.send(errorEmbed7);
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not specify a jail to mute therefore, nobody was jailed!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!mutee) return message.channel.send(errorEmbed)
    let errorEmbed4 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("I can't jail this user!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(mutee.hasPermission("ADMINISTRATOR")) return message.channel.send(errorEmbed4)
    let jailrole = message.guild.roles.cache.get("701986202550665237");
    let verifiedrole = message.guild.roles.cache.get("581580272399679595");
    let mutetime = args[1];
    let errorEmbed2 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("Please specify the amount of time you want to jail this user for!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!mutetime) return message.channel.send(errorEmbed2)
    
    await(mutee.roles.add(jailrole.id));
    await(mutee.roles.remove(verifiedrole.id))
    let chatEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`***${mutee.user.tag} was jailed., ${reason}***`)
    message.channel.send(chatEmbed)
    let logs = message.guild.channels.cache.get("456272126756782101");
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Jail | ${mutee.user.tag}`, mutee.user.displayAvatarURL())
      .addField("User:", `${mutee.user.tag}`, true)
      .addField("Moderator:", `<@${message.author.id}>`, true)
      .addField("Time:", `${ms(mutetime)} milisecs`, true)
      .addField("Reason:", reason, true)
      .setFooter(`USERS ID: ${mutee.id}`)
      .setTimestamp();
    logs.send(embed)
   let jailEmbed = new Discord.MessageEmbed()
    .setTitle("⚠️ You were put in jail! ⚠️")
    .setColor("BLUE")
    .addField("Server:", message.guild.name, true)
    .addField("Moderator:", `${message.author.tag}`, true)
   .addField("Time:", `${ms(mutetime)} milisecs`, true)
    .addField("Reason:", `${reason}`, true)
    .setTimestamp()
    mutee.send(jailEmbed)
    
    setTimeout(function(){
      mutee.roles.remove(jailrole.id)
      mutee.roles.add(verifiedrole.id)
    }, ms(mutetime))
  }
}