
const Discord = require('discord.js')
const ytdl = require('ytdl-core');
const rm = require('discord.js-reaction-menu');


module.exports = {
  name: "play",
  description: 'Plays a song', 
  category: 'Music',
  aliases: ['p'],
  run: async (bot, message, args, ops) => {

  if (!message.member.voice.channel) return message.channel.send('You aren\'t connected to a VC!');


    if (!args[0]) return message.channel.send('Please remember to put a URL or video name!');
    let validate = await ytdl.validateURL(args[0]);
  
    

    if (!validate) {
      let commandFile = require('./search.js');
      return commandFile.run(bot, message, args, ops);
  
    }

    let info = await  ytdl.getInfo(args[0]);

   let data = ops.active.get(message.guild.id) || {};
    if (!data.connection) data.connection = await message.member.voice.channel.join();
    if(!data.queue) data.queue = [];
    data.guildID = message.guild.id;

    data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id

    });

    if (!data.dispatcher) play(bot, ops, data);
    else {
        message.channel.send(`🎧 \`Added to queue: ${info.title}\``)
    }
    ops.active.set(message.guild.id, data);


}
}
async function play(bot, ops, data) {
  bot.channels.cache.get(data.queue[0].announceChannel).send(`🎧 \`Now playing: ${data.queue[0].songTitle}\``);//`🎧 \`Now playing: ${data.queue[0].songTitle}\``

    data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, {filter: 'audioonly'}));
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('end', function() {
        end(bot, ops, this);

    });

}
function end(bot, ops, dispatcher){

    let fetched = ops.active.cache.get(dispatcher.guildID);

    fetched.queue.shift();
  
    if (fetched.queue.length > 0) {
        ops.active.set(dispatcher.guildID, fetched);
        play(bot, ops, fetched);
    } else {
        ops.active.delete(dispatcher.guildID);

        let vc = bot.guilds.get(dispatcher.guildID).me.voice.channel;  

        if (vc) vc.leave();

    }

}

