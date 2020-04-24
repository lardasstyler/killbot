const Discord = require('discord.js');
const stats = require("covid19-stats");
module.exports = {
  name: `coronavirus`,
  aliases: [`covid19`, `covid`],
  run: async (bot, message, args) => {
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
}