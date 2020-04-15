const http = require("http");
const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "-";
const prefix1 = '@AutoBot'
const stats = require("covid19-stats");
var userTickets = new Map();

bot.on("ready", message => {
  console.log('women')
  bot.user.setActivity(`${bot.users.cache.size} members`, { type: "WATCHING" });
});

bot.on("message", async message => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
  if (message.author.bot) return;
  if (!message.guild) {
  let logs = bot.channels.cache.get("699758960885891092");
    let embed = new Discord.MessageEmbed()
    .setTitle("The Bot got a DM!")
    .setColor('RANDOM')
    .addField("User", message.author.tag, true)
    .addField("Content", message.content, true)
    .setFooter(`ID: ${message.author.id}`)
    .setTimestamp()
    logs.send(embed)
  }
  if (message.content.startsWith(prefix + "dm")) {
    let noEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(noEmbed)
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let user = message.mentions.members.first();
    let nouserEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not state a user to DM therefore, no one was DM'd!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!user) return message.channel.send(nouserEmbed)
    let dm = args.slice(2).join(' ')
    user.send(dm)
    message.delete()
    let logs = bot.channels.cache.get("699758960885891092");
    let logEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("A Staff Member Sent a DM!")
    .addField("Staff Member:", `<@${message.author.id}>`, true)
    .addField("User:", user.user.tag, true)
    .addField("Content:", dm, true)
    .setFooter(`ID: ${user.user.id}`)
    .setTimestamp()
    logs.send(logEmbed)
  }
  if (message.content === 'brb') {
   message.channel.send("don't come back")
  }

  if (message.content.startsWith(prefix + "createticket")) {
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
  } else if (message.content.startsWith(prefix + "closeticket")) {
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
  } else if (message.content.toLowerCase().includes(prefix + "coronavirus")) {
    let total = await stats.getStats();
    let embed = new Discord.MessageEmbed();
    if (!args[1]) {
      embed.setTitle("Totals for coronavirus:");
      embed.setColor("#E36947");
      embed.addField("Total cases:", total[0].totalCases, true);
      embed.addField("Active cases:", total[0].activeCases, true);
      embed.addField("Critical cases:", total[0].criticalCases, true);
      embed.addField("Total deaths:", total[0].totalDeaths, true);
      embed.addField("New deaths (Today):", total[0].newDeaths, true);
      embed.addField("Total recovered:", total[0].totalRecovered, true);

      embed.setImage(
        "https://raw.githubusercontent.com/ChrisMichaelPerezSantiago/covid19/HEAD/assets/img/logo.png"
      );
      message.channel.send(embed);
    } else {
      const capitalize = s => {
        if (typeof s !== "string") return "";
        return s.charAt(0).toUpperCase() + s.slice(1);
      };
      var index = total.findIndex(obj => obj.country == capitalize(args[1]));
      console.log(index);
      if (index == "-1")
        return message.channel.send(
          "Sorry, but please include a valid country!"
        );
      else {
        embed.setTitle(`Totals for ${capitalize(args[1])}:`);
        embed.setColor("#E36947");
        embed.addField("Total cases:", total[index].totalCases, true);
        embed.addField("Active cases:", total[index].activeCases, true);
        embed.addField("Critical cases:", total[index].criticalCases, true);
        embed.addField("Total deaths:", total[index].totalDeaths, true);
        embed.addField("New deaths (Today):", total[index].newDeaths, true);
        embed.addField("Total recovered:", total[index].totalRecovered, true);

        embed.setImage(
          "https://raw.githubusercontent.com/ChrisMichaelPerezSantiago/covid19/HEAD/assets/img/logo.png"
        );
        message.channel.send(embed);
      }
    }
  }
});
bot.on("message", async message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  if (message.content.startsWith(prefix + "covid19")) {
    let total = await stats.getStats();
    let embed = new Discord.MessageEmbed();
    if (!args[1]) {
      embed.setTitle("Totals for coronavirus:");
      embed.setColor("#E36947");
      embed.addField("Total cases:", total[0].totalCases, true);
      embed.addField("Active cases:", total[0].activeCases, true);
      embed.addField("Critical cases:", total[0].criticalCases, true);
      embed.addField("Total deaths:", total[0].totalDeaths, true);
      embed.addField("New deaths (Today):", total[0].newDeaths, true);
      embed.addField("Total recovered:", total[0].totalRecovered, true);

      embed.setImage(
        "https://raw.githubusercontent.com/ChrisMichaelPerezSantiago/covid19/HEAD/assets/img/logo.png"
      );
      message.channel.send(embed);
    } else {
      const capitalize = s => {
        if (typeof s !== "string") return "";
        return s.charAt(0).toUpperCase() + s.slice(1);
      };
      var index = total.findIndex(obj => obj.country == capitalize(args[1]));
      console.log(index);
      if (index == "-1")
        return message.channel.send(
          "Sorry, but please include a valid country!"
        );
      else {
        embed.setTitle(`Totals for ${capitalize(args[1])}:`);
        embed.setColor("#E36947");
        embed.addField("Total cases:", total[index].totalCases, true);
        embed.addField("Active cases:", total[index].activeCases, true);
        embed.addField("Critical cases:", total[index].criticalCases, true);
        embed.addField("Total deaths:", total[index].totalDeaths, true);
        embed.addField("New deaths (Today):", total[index].newDeaths, true);
        embed.addField("Total recovered:", total[index].totalRecovered, true);

        embed.setImage(
          "https://raw.githubusercontent.com/ChrisMichaelPerezSantiago/covid19/HEAD/assets/img/logo.png"
        );
        message.channel.send(embed);
      }
    }
  }
});

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
  if (message.content.startsWith(prefix + "ban")) {
  let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        errorEmbed1
      );
    message.delete();
    const user1 = message.mentions.members.first();
    let logs = message.guild.channels.cache.get("456272126756782101");
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not state a user to ban therefore, nobody was banned!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if (!user1) return message.channel.send(errorEmbed);
    await user1.ban(), message.channel.send(`${user1} was banned!`);
    const embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Banned User")
      .addField("User:", `<@${user1.id}>`, true)
      .addField("Mod:", `<@${message.author.id}>`, true)
      .setFooter(`USERS ID: ${user1.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.startsWith(prefix + "kick")) {
        let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        errorEmbed1
      );
    message.delete();
    const user = message.mentions.members.first();
    let logs = message.guild.channels.cache.get("456272126756782101");
        let errorEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not state a user to kick therefore, nobody was kicked!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if (!user) return message.channel.send(errorEmbed);
    await user.kick(), message.channel.send(`${user} was kicked!`);
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Kicked User")
      .addField("User:", `<@${user.id}>`, true)
      .addField("Mod:", `<@${message.author.id}>`, true)
      .setFooter(`USERS ID: ${user.id}`)
      .setTimestamp();
    logs.send(embed);
  }
  if (message.content.startsWith(prefix + "membercount")) {
    let guild = message.send()
    let embed = new Discord.MessageEmbed()
      .setColor("#3E70CE")
      .setTitle("Server Member Count")
      .setDescription(
        `This server has a total of **${bot.users.cache.size}** members!`
      )
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp();
    message.channel.send(embed);
  }
  if (message.content.startsWith(prefix + "ping")) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Bot Ping")
    .setColor("RANDOM")
    .setDescription(":ping_pong: Pong! " + Math.round(bot.ws.ping) + "ms!")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  }
  if (message.content.startsWith(prefix + "yesno")) {
    var choices = ["Yes", "No"];

    var output = choices[Math.floor(Math.random() * choices.length)];
    message.channel.send(`<@${message.author.id}> => ${output}`);
  }
  if (message.content.startsWith(prefix + "gamermeter")) {
    var choices = [
      "🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩",
      "🟩🟩🟩🟩🟩🟩🟩🟩🟩🟥",
      "🟩🟩🟩🟩🟩🟩🟩🟩🟥🟥",
      "🟩🟩🟩🟩🟩🟩🟩🟥🟥🟥",
      "🟩🟩🟩🟩🟩🟩🟥🟥🟥🟥",
      "🟩🟩🟩🟩🟩🟥🟥🟥🟥🟥",
      "🟩🟩🟩🟩🟥🟥🟥🟥🟥🟥",
      "🟩🟩🟩🟥🟥🟥🟥🟥🟥🟥",
      "🟩🟩🟥🟥🟥🟥🟥🟥🟥🟥",
      "🟩🟥🟥🟥🟥🟥🟥🟥🟥🟥",
      "🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥"
    ];
    var output = choices[Math.floor(Math.random() * choices.length)];
    const embed = new Discord.MessageEmbed()
    
    .setDescription(`**Lame** | ${output} | **Gamer**`)
    .setColor('WHITE')
    message.channel.send(embed)
  }
  if (message.content === prefix + "rps") {
    const user = message.mentions.members.first();
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not challenge a user!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!user) return message.channel.send(errorEmbed)
    let playerEmbed = new Discord.MessageEmbed()
    .setTitle("You were challenged!")
    .setDescription("You were challenge to a RPS game! Do you accept the challenge?")
    if(user) return message.channel.send(`||${user}||` + playerEmbed)
  }
  if (message.content === prefix + 'help') {
    let embed = new Discord.MessageEmbed()
    .setTitle("Help Menu")
    .setColor("BLUE")
    .setDescription("Please specify what you need help with! Here are some of the things that people commonly need help with!")
    .addField("-help staff", "Gives you a list of staff!")
    .addField("-help commands", "Gives you a list of commands!")
    .addField("-help support", "Shows you how to get support from a staff member!")
    .addField("-help version", "States the version and last update of the bot!")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  }
  if (message.content === prefix + "help staff") {
    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Staff Members")
    .setDescription("<@265533494090924034>\n<@324686137308479488>\n<@389179805368582154>\n<@412782358358523905>\n<@274311171518234634>\n<@530328255312560128>\n<@498495003769700352>\n<@457182175075500053>\n<@625500466335186967>\n<@515620004784373779>\n<@532370329662914561>\n<@501143839122391060>\n<@490933512027897868>\n<@649003865676709924>\n<@456641711486009355>")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed) 
    }
  if (message.content === prefix + "help commands") {
    let embed = new Discord.MessageEmbed()
    .setColor("#770D19")
    .setTitle("Commands")
    .addField("ban", "This command removes a member from the guild. Only for staff members.")
    .addField("kick", "This command temporarily removes a member from the guild. Only for staff members.")
    .addField("membercount", "States the guilds member count!")
    .addField("ping", "Shows the bots ping!")
    .addField("rps (r,p,s)", "Usage: rps r, rps p, rps s. Fun tiny command!")
    .addField("coronavirus/covid19", "Shows the stats of the current sickness going around. Use -coronavirus {country}")
    .addField("yesno", "Executing this command will make the bot state yes or no.")
    .addField("gamermeter", "Shows you how epic you are at gaming.")
    .addField("purge", "Bulk deletes chats! Only for staff.")
    .addField("warn", "Warns a user! Only for staff.")
    .addField("createticket", "Support command. If you need any help from a staff member just execute this command and ping a staff member in the ticket.")
    .addField("closeticket", "Support Command. Closes the ticket once you create it.")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  }
  if (message.content === prefix + "help whos joe") {
   let embed = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTitle("Who's Joe?")
   .setDescription("From my calculations, apparently 'Joe' is JOE MAMA! HA, GOTTEM!")
   message.channel.send(embed)
  }
  if (message.content === prefix + "help version") {
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Version")
    .addField("Version:", "1.2.5", true)
    .addField("Last Update:", "More stuff is logged and you won't get warned when you cuss in the bots DM's now.", true)
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  }
  if (message.content === prefix + "help support") {
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Support")
    .setDescription("Need help? Want to suggest something? Do -createticket or DM me for help! A staff member will get back to you ASAP! I would recommend DM'ing me other than creating a ticket!")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  }
    if (message.content.startsWith(prefix + "purge")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "You do not have the permission to use that command!"
      );
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const deleteCount = parseInt(args[1], 10);
    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      
      return message.reply(
        "Please provide a number between 2 and 100 for messages to purge"
      );
    const fetched = await message.channel.messages.fetch({
      limit: deleteCount
    });
    message.channel.bulkDelete(fetched);
  }
  if (message.content.startsWith(prefix + "warn")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
            let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(errorEmbed1);
    let user = message.mentions.users.first();
        let errorEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You did not state a user to warn therefore, nobody was warned!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
    if(!user) return message.channel.send(errorEmbed)
    let reason = args.slice(2).join(' ') 
    if(!reason) return message.channel.send("Please state a reason to warn this user!");
    let warnEmbed = new Discord.MessageEmbed()
    .setTitle("⚠️ You were warned! ⚠️")
    .setColor("BLUE")
    .addField("Server:", "PigPig and Raging’s Discord Server", true)
    .addField("Moderator:", `${message.author.tag}`, true)
    .addField("Reason:", `${reason}`, true)
    .setTimestamp()
    user.send(warnEmbed)
    message.delete(); 
    let logs = message.guild.channels.cache.get("456272126756782101");
    let embed = new Discord.MessageEmbed()
      .setColor("#E36947")
      .setTitle("Warned User")
      .setThumbnail(user.displayAvatarURL())
      .addField("User:", `<@${user.id}>`, true)
      .addField("Moderator:", `<@${message.author.id}>`, true)
      .addField("Reason:", `${reason}`, true)
      .setFooter(`USERS ID: ${user.id}`)
      .setTimestamp();
    logs.send(embed);    
}
  if (message.content.startsWith(prefix + "qwertyuiopasdfghjklzxcvbnm")) {
    message.channel.send("You found the secret command!")
  }
    if (message.content.toLowerCase().includes("poll")) {
    if (message.channel.id !== "607042156368101437") return;
    message.react("👍");
    message.react("👎");
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