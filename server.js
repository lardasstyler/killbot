const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 't!'
const token = 'NjkxODg3MTE4MzgwODI2NjU2.XnmlDg.fSKY3C6wWq4p4nQ2nmKUdAepamg';
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
                    id: '689638910275485778'
                },
                {
                    allow: 'VIEW_CHANNEL',
                    id: '689638877345874114'
                },
                {
                    allow: 'VIEW_CHANNEL',
                    id: '689638820148543552'
                },
                {
                    allow: 'VIEW_CHANNEL',
                    id: '690979066983219241'
                },
                {
                    allow: 'VIEW_CHANNEL',
                    id: '457182175075500053'
                }
            ]
        }).then(ch => {
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
         message.channel.send(embed)
     }







    
})


bot.login(token)