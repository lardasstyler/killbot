const Discord = require('discord.js');
var userTickets = new Map();
module.exports = {
  name: `createticket`,
  aliases: [`openticket`, `ticket`],
  run: async (bot, message, args) => {
     if (
      userTickets.has(message.author.id) ||
      message.guild.channels.cache.some(
        channel =>
          channel.name.toLowerCase() === message.author.username + "s-ticket"
      )
    ) {
      message.author.send(
        `<@${message.author.id}>, you already have a ticket!`
      );
    } else {
      let guild = message.guild;

      guild.channels
        .create(`${message.author.username}s-ticket`, {
          type: "text",
          permissionOverwrites: [
            {
              allow: "VIEW_CHANNEL",
              id: message.author.id
            },
            {
              deny: "VIEW_CHANNEL",
              id: guild.id
            },
            {
              allow: "VIEW_CHANNEL",
              id: "684812734453383173"
            }
          ]
        })
        .then(ch => {
          message.delete();
          userTickets.set(message.author.id, ch.id);
        })
        .catch(err => console.log(err));
    }
  }
}