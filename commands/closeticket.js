const Discord = require('discord.js');
var userTickets = new Map();
module.exports = {
  name: `closeticket`,
  aliases: [`openticket`, `ticket`],
  run: async (bot, message, args) => {
    if (userTickets.has(message.author.id)) {
      if (message.channel.id === userTickets.get(message.author.id)) {
        message.channel
          .delete("Closing ticket...")
          .then(channel => {
            console.log("Deleted " + channel.name);
            userTickets.delete(message.author.id);
          })
          .catch(err => console.log(err));
      }
    }
  }
}