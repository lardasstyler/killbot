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
const prefix = '-';

bot.on("ready", message => {

})
const init = async message =>{
  fs.readdir(`./commands`, (err, files) =>{
    if(err) return console.log(err);
    files.forEach(file =>{
      const props = require(`./commands/${file}`);
      bot.commands.set(props.name, props);
      bot.aliases.forEach(alias => bot.aliases.set(alias, props.name));
      console.log(`bruh ${file} moment`)
    })
  })
}
init();

bot.on('message', (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = bot.commands.get(command) || bot.aliases.get(bot.aliases.get(command));
  if(cmd) cmd.run(bot, message, args)
})

bot.on("message", async message => {
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
});
setInterval(() =>{
   let commandFile = require("./commands/chatgame.js");
       commandFile.run(bot);
 //}, 1000)


bot.on("message", async message => {
  if(!message.guild) return;

  if (message.content.toLowerCase().includes("nigger")) {
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (n word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (n word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("nigga")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (n word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (n word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("fuck")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (f word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (f word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("fag")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (fa word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (fa word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("shit")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (s word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (s word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("shirk")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (s word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (s word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("asshole")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (a word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (a word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("anus")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (a word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (a word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("arse")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (a word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (a word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("dick")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (d word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (d word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("dyke")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (d word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (d word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("cock")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (c word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (c word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("cunt")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (c word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (c word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("clot")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (c word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (c word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("clit")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (c word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (c word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("jerkoff")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (joff word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (joff word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("bitch")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (b word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (b word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("bastard")) {
    if(!message.guild) return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (b word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (b word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.toLowerCase().includes("piss")) {
    if(!message.guild) return;
    if (message.author.id === '457182175075500053') return;
    if (message.author.bot) return;
    message.delete();
    message.author.send(
      "**You were warned in PigPig and Raging’s Discord Server!**\nReason: saying non gamer word (p word)."
    );
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!logs) {
      return console.log("Logs channel not found!");
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Auto Warn")
      .addField("User", `<@${message.author.id}>`, true)
      .addField("Reason:", "saying non gamer word (p word)", true)
      .setFooter(`ID: ${message.author.id}`)
      .setTimestamp();
    logs.send(embed);
  }

    if (message.content.toLowerCase().includes("poll")) {
    if (message.channel.id !== "607042156368101437") return;
    message.react("👍");
    message.react("👎");
  } 
  if (message.content.toLowerCase().includes("why is he spinning")) {
    message.channel.send("oh i dont know, ask yourself that! or just ask <@412782358358523905>")
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



bot.login(process.env.TOKEN);