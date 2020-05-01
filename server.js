const http = require("http");
var schedule = require('node-schedule');
const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
const Discord = require('discord.js');
const bot = new Discord.Client();
var servers = {};
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
const fs = require('fs');
const prefix = '?';
const db = require('quick.db')

bot.on("ready", message => {
bot.user.setActivity("have fun with corona", { type: "PLAYING"})
})
const ascii = require("ascii-table");
let table = new ascii("Commands");
table.setHeading("Command", "Load status");
  fs.readdirSync("./commands/").forEach(dir => {
    
    const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
    for (let file of commands) {
      let pull = require(`./commands/${dir}/${file}`);
    
      if (pull.name) {
        bot.commands.set(pull.name, pull);
        table.addRow(file, '✅');
      } else {
        table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
        continue;
      }
    
      if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name));
    }
  });
  console.log(table.toString());
bot.on('message', (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = bot.commands.get(command) || bot.aliases.get(bot.aliases.get(command));
  if(cmd) cmd.run(bot, message, args)
})

bot.on("message", async message => {
if (message.channel.id === '569682953148432394') {
  if(message.author.id === '457182175075500053') return;
 // message.delete()
}
const args = message.content.slice(prefix.length).trim().split(/ +/g);
  if (message.author.bot) return;
  if (!message.guild) {
  let logs = bot.channels.cache.get("688867784947531857");
    let embed = new Discord.MessageEmbed()
    .setTitle("The Bot got a DM!")
    .setColor('RANDOM')
    .addField("User", message.author.tag, true)
    .addField("Content", message.content, true)
    .setFooter(`ID: ${message.author.id}`)
    .setTimestamp()
    logs.send(embed)
  }
  if (message.content === 'brb') {
   message.channel.send("don't come back")
  }
  if(message.channel.id === '581579298381627392') {
    message.delete()
  }
});
var j = schedule.scheduleJob('0 30 * * * *', function(){
   let commandFile = require("./commands/Chatgame/chatgame.js");
       commandFile.run(bot);
 })


bot.on("message", async message => {
    if (message.content.toLowerCase().includes("poll")) {
    if (message.channel.id !== "607042156368101437") return;
    message.react("👍");
    message.react("👎");
  } 
  if (message.content.toLowerCase().includes("why is he spinning")) {
    message.channel.send("oh i dont know, ask yourself that! or just ask <@412782358358523905>")
  }
  if (message.content.includes("<:Da_Gram:697468382643224656>")) {
  // if (message.author.id == '529462265934643230') return;
  if (message.channel.id === "605121757166436406") return;
let winks = await db.fetch(`winks_${message.author.id}`);
 db.add(`winks_${message.author.id}`, 1)
   if (winks == null) winks = 1
    message.channel.send(`${message.author.username} has been on da gram for a bit... They have been on it a total of ${winks} times!`)
    console.log(winks)
  }
  });
bot.on("guildMemberAdd", member => {
  let logs = member.guild.channels.cache.get("688867784947531857")
  let welcome = member.guild.channels.cache.find(
    channel => channel.name === "welcome-and-goodbye"
  );
  if (!welcome) return;
  welcome.send(
    "Hey " +
      `${member}` +
      `, welcome to **PigPig and Raging’s Discord Server** <:PigHug:541037969876713492> ! Head over to <#561008923453423657> and <#690009082379501570> for more information about the server!`
  )
});
bot.on("guildMemberRemove", member => {
  let goodbye = member.guild.channels.cache.find(
    channel => channel.name === "welcome-and-goodbye"
  );
  if (!goodbye) return;
  goodbye.send(
    `**${member.user.username}` +
      `#${member.user.discriminator}**` +
      " just left the server 🙁"
  );
});

bot.on('messageDelete', async message =>{
  if (message.author.id === '457182175075500053') return
  if (message.author.bot) return;
  let embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle("Deleted Message")
  .setThumbnail(message.author.displayAvatarURL())
  .addField("User:", `<@${message.author.id}>`, true)
  .addField("Channel:", message.channel, true)
  .addField("Message:", message.content, true)
  .setFooter(`Author: ${message.author.id} | Message ID: ${message.id}`)
  .setTimestamp()
  let logs = message.guild.channels.cache.get("688867784947531857")
  logs.send(embed)
})
bot.on('messageUpdate', async (oldMessage, newMessage) =>{
  if(oldMessage.content === "https://") return;
  if (oldMessage.author.bot) return;
  let embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle("Edited Message")
  .setThumbnail(oldMessage.author.displayAvatarURL())
  .addField("User:", `<@${oldMessage.author.id}>`, true)
  .addField("Channel:", oldMessage.channel, true)
  .addField("Old Message:", oldMessage.content, true)
  .addField("New Message:", newMessage.content, true)
  .setFooter(`Author: ${oldMessage.author.id} | Message ID: ${oldMessage.id}`)
  .setTimestamp()
  let logs = oldMessage.guild.channels.cache.get("688867784947531857")
  logs.send(embed)
})
bot.on('messageReactionAdd', async (reaction, user) => {
    const handleStarboard = async () => {
        const starboard = bot.channels.cache.get("704504755577159780");
        const msgs = await starboard.messages.fetch({ limit: 100 });
        const existingMsg = msgs.find(msg => 
            msg.embeds.length === 1 ?
            (msg.embeds[0].footer.text.startsWith(reaction.message.id) ? true : false) : false);
        if(existingMsg) existingMsg.edit(`This message got **${reaction.count}** stars!`);
        else {
            const embed = new Discord.MessageEmbed()
                .setAuthor(reaction.message.author.tag, reaction.message.author.displayAvatarURL())
                .setDescription(`\n \n **🙎 Author:** ${reaction.message.author} \n \n **🗨️ Content:** ${reaction.message.content}\n \n **🔗 URL:** ${reaction.message.url}`)
            .setFooter(reaction.message.id)
            if(starboard)
                starboard.send(`1 - 🌟`, embed);
        }
    }
    if(reaction.emoji.name === '🌟') {
        if(reaction.message.channel.name.toLowerCase() === 'starboard') return;
        if(reaction.message.partial) {
            await reaction.fetch();
            await reaction.message.fetch();
            handleStarboard();
        }
        else
            handleStarboard();
    }
});

bot.on('messageReactionRemove', async (reaction, user) => {
    const handleStarboard = async () => {
        const starboard = bot.channels.cache.get("704504755577159780");
        const msgs = await starboard.messages.fetch({ limit: 100 });
        const existingMsg = msgs.find(msg => 
            msg.embeds.length === 1 ? 
            (msg.embeds[0].footer.text.startsWith(reaction.message.id) ? true : false) : false);
        if(existingMsg) {
            if(reaction.count === 0)
                existingMsg.delete({ timeout: 2500 });
            else
                existingMsg.edit(`${reaction.count} - 🌟`)
        };
    }
    if(reaction.emoji.name === '🌟') {
        if(reaction.message.channel.name.toLowerCase() === 'starboard') return;
        if(reaction.message.partial) {
            await reaction.fetch();
            await reaction.message.fetch();
            handleStarboard();
        }
        else
            handleStarboard();
    }
});



bot.login(process.env.TOKEN);