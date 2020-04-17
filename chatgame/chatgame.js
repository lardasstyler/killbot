const Discord = require('discord.js');
const overide = '456641711486009355';
var schedule = require('node-schedule');
const fs = require('fs')
module.exports = {
  name: "cg",
  run: (bot, message, args) => {
    if (message) {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("stop")
    }
const quiz = require('./questions.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = response => response.content.toLowerCase() === item.correct_answer.toLowerCase();
    
let game = new Discord.MessageEmbed().setTitle('A wild chat game appeared!');
if (item.type === 'boolean') game.setDescription(`TRUE OR FALSE: ${item.question}`).setFooter(`If you get the answer in the next 5 minutes, you get 250 coins! | Difficulty: ${item.difficulty}`).setColor('RANDOM');
else game.setDescription(`${item.question}`).setFooter(`If you get the answer in the next 5 minutes, you get 250 coins! | Difficulty: ${item.difficulty}`).setColor('RANDOM')
    bot.channels.cache.get('671897035137613834').send(game).then((lastEmbed) => {
 let collector = lastEmbed.channel.createMessageCollector(filter, { max: 1, time: 280000, errors: ['time'] })
		collector.on('collect', collected => {
      let coins = bot.getCoins.get(collected.author.id, collected.guild.id)
      coins = { 
         id: `${collected.guild.id}-${collected.author.id}`, 
         user: collected.author.id, 
         guild: collected.guild.id, 
         wallet: coins.wallet,
         bank: Number(coins.bank) + Number(250),
         job: coins.job,
         income: coins.income
         }
    bot.setCoins.run(coins);
return bot.channels.cache.get('671897035137613834').send(`${collected.author} got the correct answer and 250 coins!!`)
  })
		collector.on('end', collected => {
      if (collected.size === 0) {
			return bot.channels.cache.get('671897035137613834').send('Looks like nobody got the answer this time. The correct answer was: **' + item.correct_answer + '**');
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