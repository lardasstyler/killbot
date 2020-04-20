const Discord = require('discord.js');
const overide = '456641711486009355';
var schedule = require('node-schedule');
const fs = require('fs')
module.exports = {
  name: "cg",
  run: (bot, message, args) => {
    if (message) {
    if (!message.author.id.includes('457182175075500053')) {
    if (!message.author.id.includes('456641711486009355')) return message.channel.send('Error: Missing permissions')
    }
    }
const quiz = require('./questions.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = response => response.content.toLowerCase() === item.correct_answer.toLowerCase();
    
let game = new Discord.MessageEmbed().setTitle('A wild chat game appeared!');
if (item.type === 'boolean') game.setDescription(`TRUE OR FALSE: ${item.question}`).setFooter(`If you get the answer in the next 5 minutes, you get 250 coins! | Difficulty: ${item.difficulty}`).setColor('RANDOM');
else game.setDescription(`${item.question}`).setFooter(`If you get the answer in the next 5 minutes, you get 250 coins! | Difficulty: ${item.difficulty}`).setColor('RANDOM')
    bot.channels.cache.get('569682953148432394').send(game).then((lastEmbed) => {
 let collector = lastEmbed.channel.createMessageCollector(filter, { max: 1, time: 0, errors: ['time'] })
		collector.on('collect', collected => {
bot.channels.cache.get('569682953148432394').send(`${collected.author} got the correct answer!`)
  })
		collector.on('end', collected => {
      if (collected.size === 0) {
			return bot.channels.cache.get('569682953148432394').send('Looks like nobody got the answer this time. The correct answer was: **' + item.correct_answer + '**');
      }
      else {
        return console.log('error')
      } 
  })	
});
function listJson(jsonfile){ // List all json file /return json data
        let  data = fs.readFileSync(jsonfile);
            let json= JSON.parse(data);
            return json;
}
  }
}