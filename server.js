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
var userTickets = new Map();


bot.on('ready', message =>{
    console.log(`${bot.user.tag} is now online!`)
    bot.user.setActivity(`t!help | ${bot.users.cache.size} members`)
})

bot.on('message', async message =>{
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
    } else


     if (message.content.startsWith(prefix + "help")) {
         const embed = new Discord.MessageEmbed();
         embed.setTitle("Help Desk")
         embed.addField("Ticket Commands", "t!createticket\nt!closeticket")
         embed.setColor("BLUE")
         message.channel.send(embed)
     }







    
})


bot.login(process.env.TOKEN)