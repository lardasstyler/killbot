const http = require('http');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200)
});
app.listen(process.env.PORT);
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '/'
const stats = require('covid19-stats')
var userTickets = new Map();


bot.on('ready', message =>{
  
    console.log(`${bot.user.tag} is now online!`)
    
})

bot.on('message', async message =>{
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
if(message.author.bot) return;

if(message.content.startsWith(prefix + "createticket")) {
   
    if(userTickets.has(message.author.id) || 
    message.guild.channels.cache.some(channel => channel.name.toLowerCase() === message.author.username + 's-ticket')) {
        message.author.send(`<@${message.author.id}>, you already have a ticket!`);
    } 
    else {
      
        let guild = message.guild;

        guild.channels.create(`${message.author.username}s-ticket`, {
            type: 'text',
            permissionOverwrites: [
                {
                    allow: 'VIEW_CHANNEL',
                    id: message.author.id
                },
                {
                    deny: 'VIEW_CHANNEL',
                    id: guild.id
                },
                {
                    allow: 'VIEW_CHANNEL',
                    id: '684812734453383173'
                }
            ]
        }).then(ch => {
          message.delete()
            userTickets.set(message.author.id, ch.id);
        }).catch(err => console.log(err));
    }
} else 


     if (message.content.startsWith(prefix + "closeticket")) { 
        if(userTickets.has(message.author.id)) { 
            if(message.channel.id === userTickets.get(message.author.id)) {
                message.channel.delete('Closing ticket...')
                .then(channel => {
                    console.log("Deleted " + channel.name);
                    userTickets.delete(message.author.id);
                })
                .catch(err => console.log(err));
            }
        }
    } else if (message.content.toLowerCase().includes(prefix + "coronavirus")) {
          let total = await stats.getStats();
    let embed = new Discord.MessageEmbed();
  if (!args[1]) {
    embed.setTitle('Totals for coronavirus:');
    embed.setColor('#E36947')
    embed.addField('Total cases:', total[0].totalCases, true)
    embed.addField('Active cases:', total[0].activeCases, true)
    embed.addField('Critical cases:', total[0].criticalCases, true)
    embed.addField('Total deaths:', total[0].totalDeaths, true)
    embed.addField('New deaths (Today):', total[0].newDeaths, true)
    embed.addField('Total recovered:', total[0].totalRecovered, true)

    embed.setImage('https://raw.githubusercontent.com/ChrisMichaelPerezSantiago/covid19/HEAD/assets/img/logo.png')
    message.channel.send(embed)
  }
    else {
      const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
var index = total.findIndex(obj => obj.country==capitalize(args[1]));
      console.log(index)
      if (index == '-1') return message.channel.send('Sorry, but please include a valid country!')
      else {
        embed.setTitle(`Totals for ${capitalize(args[1])}:`);
    embed.setColor('#E36947')
    embed.addField('Total cases:', total[index].totalCases, true)
    embed.addField('Active cases:', total[index].activeCases, true)
    embed.addField('Critical cases:', total[index].criticalCases, true)
    embed.addField('Total deaths:', total[index].totalDeaths, true)
    embed.addField('New deaths (Today):', total[index].newDeaths, true)
    embed.addField('Total recovered:', total[index].totalRecovered, true)
    
    embed.setImage('https://raw.githubusercontent.com/ChrisMichaelPerezSantiago/covid19/HEAD/assets/img/logo.png')
    message.channel.send(embed)
      }
      
    }
     } 
})
bot.on('message', async message =>{
const args = message.content.slice(prefix.length).trim().split(/ +/g);
  if (message.content.startsWith(prefix + "covid19")) {
          let total = await stats.getStats();
    let embed = new Discord.MessageEmbed();
  if (!args[1]) {
    embed.setTitle('Totals for coronavirus:');
    embed.setColor('#E36947')
    embed.addField('Total cases:', total[0].totalCases, true)
    embed.addField('Active cases:', total[0].activeCases, true)
    embed.addField('Critical cases:', total[0].criticalCases, true)
    embed.addField('Total deaths:', total[0].totalDeaths, true)
    embed.addField('New deaths (Today):', total[0].newDeaths, true)
    embed.addField('Total recovered:', total[0].totalRecovered, true)

    embed.setImage('https://raw.githubusercontent.com/ChrisMichaelPerezSantiago/covid19/HEAD/assets/img/logo.png')
    message.channel.send(embed)
  }
    else {
      const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
var index = total.findIndex(obj => obj.country==capitalize(args[1]));
      console.log(index)
      if (index == '-1') return message.channel.send('Sorry, but please include a valid country!')
      else {
        embed.setTitle(`Totals for ${capitalize(args[1])}:`);
    embed.setColor('#E36947')
    embed.addField('Total cases:', total[index].totalCases, true)
    embed.addField('Active cases:', total[index].activeCases, true)
    embed.addField('Critical cases:', total[index].criticalCases, true)
    embed.addField('Total deaths:', total[index].totalDeaths, true)
    embed.addField('New deaths (Today):', total[index].newDeaths, true)
    embed.addField('Total recovered:', total[index].totalRecovered, true)
    
    embed.setImage('https://raw.githubusercontent.com/ChrisMichaelPerezSantiago/covid19/HEAD/assets/img/logo.png')
    message.channel.send(embed)
      }
      
    }
     }
})

bot.on('message', async message =>{
 if (message.content.toLowerCase().includes("nigger")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (n word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (n word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
   if (message.content.toLowerCase().includes("nigga")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (n word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (n word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
    if (message.content.toLowerCase().includes("fuck")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (f word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (f word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
    if (message.content.toLowerCase().includes("fag")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (fa word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (fa word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
      if (message.content.toLowerCase().includes("shit")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (s word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (s word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("shit")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (s word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (s word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
    if (message.content.toLowerCase().includes("shirk")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (s word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (s word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
      if (message.content.toLowerCase().includes("shirk")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (s word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (s word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
        if (message.content.toLowerCase().includes("asshole")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (a word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (a word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
          if (message.content.toLowerCase().includes("anus")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (a word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (a word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
            if (message.content.toLowerCase().includes("arse")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (a word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (a word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
              if (message.content.toLowerCase().includes("dick")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (d word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (d word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
              if (message.content.toLowerCase().includes("dag")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (d word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (d word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
              if (message.content.toLowerCase().includes("dyke")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (d word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (d word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
                if (message.content.toLowerCase().includes("cum")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (c word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (c word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
                if (message.content.toLowerCase().includes("cock")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (c word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (c word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
                  if (message.content.toLowerCase().includes("cunt")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (c word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (c word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
                  if (message.content.toLowerCase().includes("clot")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (c word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (c word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
                  if (message.content.toLowerCase().includes("clit")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (c word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (c word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
                    if (message.content.toLowerCase().includes("jerkoff")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (joff word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (joff word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
                      if (message.content.toLowerCase().includes("bitch")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (b word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (b word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
                        if (message.content.toLowerCase().includes("bastard")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (b word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (b word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
                          if (message.content.toLowerCase().includes("piss")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (p word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (p word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp()
    logs.send(embed);
  }
  if (message.content.startsWith(prefix + "ban")) {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "You do not have permission to use that command!"
      );
    message.delete();
    const user1 = message.mentions.members.first();
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!user1) return message.channel.send("Please state a user to ban!");
    await user1.ban(), message.channel.send(`${user1} was banned!`);
    const embed = new Discord.MessageEmbed()
      .setColor('#E36947')
      .setTitle("Banned User")
      .addField("User:", `<@${user1.tag}>`, true)
      .addField("Mod:", `<@${message.author.id}>`, true)
      .setFooter(`USERS ID: ${user1.id}`)
      .setTimestamp()
    logs.send(embed);
  }
  if (message.content.startsWith(prefix + "kick")) {
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        "You do not have the permission to use that command!"
      );
    message.delete();
    const user = message.mentions.members.first();
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!user) return message.channel.send("Please state a user to kick!");
    await user.kick(), message.channel.send(`${user} was kicked!`);
    let embed = new Discord.MessageEmbed()
       .setColor('#E36947')
       .setTitle("Kicked User")
      .addField("User:", `<@${user.username}>` + `${message.user.discriminator}`, true)
      .addField("Mod:", `<@${message.author.id}>`, true)
      .setFooter(`USERS ID: ${user.id}`)
      .setTimestamp()
    logs.send(embed);
  }



if (message.author.id === '457182175075500053') return
if (message.guild.id === '290987848302067712') {
  //message.delete()
}
  if (message.author.id === '490933512027897868') {
    //message.delete()
  }

})


bot.login(process.env.TOKEN)