const { MessageEmbed } = require("discord.js");
const beautify = require("beautify");

module.exports = {
    name: "eval",
    aliases: ["e", "evaluate", "evaluation", "run"],
    description: "Evaluates and runs your JS code",
    usage: "<code to eval>",
    run: async (bot, message, args) => {

        if(message.author.id !== "648698528872398848") {
            return message.channel.send("You do not have permission to run this command!")
            .then(m => m.delete({ timeout: 5000}));
        }

        if(!args[0]) {
            message.channel.send("Please put code to evaluate!")
            .then(m => m.delete({ timeout: 5000}));
        }

        try {

            const toEval = args.join(" ")
            const evaluated = eval(toEval)

  
          let bruh = message.guild.channels.cache.get("712168685846134794")
          
          let embed = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Eval")
          .setFooter(bot.user.username, bot.user.displayAvatarURL())
          .setTimestamp()
          .setDescription(`\n \n **To Evaluate**:` + `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\`` + "\n **Evaluated**: " + evaluated + "\n \n **Type Of**: " + typeof(evaluated));
          bruh.send(embed)
        } catch (e) {

            let embed = new MessageEmbed()
                .setColor("#FF0000")
                .setTitle("\:x: Error!")
                .setDescription(e)
                .setFooter(bot.user.username, bot.user.displayAvatarURL())

            message.channel.send(embed);
        }
    }
}