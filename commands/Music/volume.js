const fs = require('fs')
const Discord = require('discord.js')

module.exports = {
  name: 'stop',
  category: 'Music',
  description: 'Stops the music playing',
  aliases: [],
  run: async (bot, message, args, ops) => {
  let vError = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle('Error!')
                .setDescription('You have to be in a voice channel to do that!')
                if (!message.member.voiceChannel) return message.channel.send(vError);
                let vcotError = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle('Error!')
                .setDescription('The bot is not in a voice channel!')
                if (!message.guild.me.voiceChannel) return message.channel.send(vcotError);
                message.guild.me.voiceChannel.leave();
}
};