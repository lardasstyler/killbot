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
const prefix = 't!'
const stats = require('covid19-stats')
var userTickets = new Map();


bot.on('ready', message =>{
  
    console.log(`${bot.user.tag} is now online!`)
    
})

bot.on('message', async message =>{
  //message.delete()
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
    } else if (message.content.startsWith(prefix + "help")) {
         const embed = new Discord.MessageEmbed();
         embed.setTitle("Help Desk")
         embed.addField("Ticket Commands", "t!createticket\nt!closeticket\nt!coronavirus/covid19")
         embed.setColor("BLUE")
         message.channel.send(embed)
     } else if (message.content.toLowerCase().includes(prefix + "coronavirus")) {
          let total = await stats.getStats();
    let embed = new Discord.MessageEmbed();
  if (!args[1]) {
    embed.setTitle('Totals for coronavirus:');
    embed.setColor('BLUE')
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
    embed.setColor('BLUE')
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
    embed.setColor('BLUE')
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
    embed.setColor('BLUE')
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
  
if (message.channel.id === '569682953148432394') {
  message.delete()
}
})


bot.login(process.env.TOKEN)