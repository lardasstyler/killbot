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
  setInterval(() => {
let activities = [`${bot.users.cache.size} members` , "people use -help" , "some servers"]
let game = activities[Math.floor(Math.random() * activities.length)];
bot.user.setActivity(game,{
      type: "WATCHING",
      url: "https://www.twitch.tv/ninja"
  });
}, 10000)
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
    let chatEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`***${user.tag} was warned., ${reason}***`)
    message.channel.send(chatEmbed)
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
    logs.send(embed)


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