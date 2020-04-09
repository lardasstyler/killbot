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
const prefix = "/";
const prefix1 = '@AutoBot'
const stats = require("covid19-stats");
var userTickets = new Map();

bot.on("ready", message => {
  console.log('women')
  bot.user.setActivity(`${bot.users.cache.size} members`, { type: "WATCHING" });
});

bot.on("message", async message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  if (message.author.bot) return;

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
  if (message.content.toLowerCase().includes("shit")) {
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
  if (message.content.toLowerCase().includes("cum")) {
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
  if (message.content.toLowerCase().includes("cock")) {
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
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "You do not have permission to use that command!"
      );
    message.delete();
    const user1 = message.mentions.members.first();
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!user1) return message.channel.send("Please state a user to ban!");
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
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        "You do not have the permission to use that command!"
      );
    message.delete();
    const user = message.mentions.members.first();
    let logs = message.guild.channels.cache.get("456272126756782101");
    if (!user) return message.channel.send("Please state a user to kick!");
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
  if (message.content.startsWith(prefix + "marry")) {
    const user = message.mentions.members.first();
    if (!user)
      return message.channel.send(
        "Please state a person you would like to marry!"
      );
    if (user)
      return message.channel.send(
        `⛪ <@${message.author.id}> ** has proposed to**` +
          ` ${user} 💍\n💍 ${user.user.username}` +
          ", Do you accept? 🔔\n**Type `yes` to accept or `no` to decline.**"
      );
    await message.content.includes("yes");
    if (message.user(user)) {
      message.channel.send(
        `Congratulations to <@${message.author.id}> & <@${user}> on their marriage!`
      );
    } 
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
  if (message.content === prefix + 'help') {
    let embed = new Discord.MessageEmbed()
    .setTitle("Help Menu")
    .setColor("BLUE")
    .setDescription("Please specify what you need help with! Here are some of the things that people commonly need help with!")
    .addField("/help staff", "Gives you a list of staff!")
    .addField("/help commands", "Gives you a list of commands!")
    .addField("/help credits", "Gives credit to the person who made the bot!")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  }
  if (message.content === prefix + "help staff") {
    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Staff Members")
    .setDescription("<@265533494090924034>\n<@324686137308479488>\n<@389179805368582154>\n<@412782358358523905>\n<@274311171518234634>\n<@530328255312560128>\n<@498495003769700352>\n<@457182175075500053>\n<@625500466335186967>\n<@515620004784373779>\n<@532370329662914561>\n<@501143839122391060>\n<@490933512027897868>")
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
    .addField("yesno", "Executing this command will make the bot state yes or no.")
    .addField("gamermeter", "Shows you how epic you are at gaming.")
    .addField("purge", "Bulk deletes chats! Only for staff.")
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
  if (message.content === prefix + "help credits") {
    let embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setDescription("This bot and its entirety was made by the Discord.js Beginners Support community. Join our server for your JavaScript worries. https://discord.gg/htuxXBm (Non gamer words allowed)")
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
    if (message.content.toLowerCase().includes("poll")) {
    if (message.channel.id !== "607042156368101437") return;
    message.react("👍");
    message.react("👎");
  }
  });
bot.on("guildMemberAdd", member => {
  let welcome = member.guild.channels.cache.find(
    channel => channel.name === "welcome-and-goodbye"
  );
  if (!welcome) return;
  welcome.send(
    "Hey " +
      `${member}` +
      `, welcome to **PigPig and Raging’s Discord Server** <:PigHug:541037969876713492> ! Head over to <#561008923453423657> and <#690009082379501570> for more information about the server!`
  );
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

bot.login(process.env.TOKEN);
