const search = require('yt-search')
const Discord = require('discord.js')
module.exports = {
  name: "search",
  category: 'Music',
  description: 'Search for a song to be played',
  run: (bot, message, args, ops) => { 

  search(args.join(''), function(err, res){
        if(err)
            return console.log(err), message.channel.send("Something went wrong");
        let videos = res.videos.slice(0,10);
        
        let resp = new Discord.MessageEmbed();
        for(var i in videos){
            resp.addField(`[${parseInt(i)+1}]`, `${videos[i].title}\n`, true);
        }

        resp.setTitle(`\nChoose a number between 1-${videos.length}`);
    resp.setColor('RANDOM');
        message.channel.send(resp);

        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

        const collector = message.channel.createMessageCollector(filter);

        collector.videos = videos;

        collector.once('collect', function(m){
            let commandFile = require ("./play.js");
            commandFile.run(bot, message, [this.videos[parseInt(m.content)-1].url], ops);
        });

    });
}
}
