const { MessageEmbed } = require("discord.js");
const beautify = require("beautify");
const ids = "648698528872398848", "265533494090924034","412782358358523905" 

module.exports = {
    name: "eval",
    aliases: ["e", "evaluate", "evaluation", "run"],
    description: "Evaluates and runs your JS code",
    usage: "<code to eval>",
    run: async (bot, message, args) => {
        if(message.author.id !== ids) {
            return message.channel.send("You do not have permission to run this command!")
            .then(m => m.delete({ timeout: 5000}));
        }

        if(!args[0]) {
            message.channel.send("Please put code to evaluate!")
            .then(m => m.delete({ timeout: 5000}));
        }

        try {
            if (args.join(" ").toLowerCase().includes("token")) {
                return;
            }

            const toEval = args.join(" ")
            const evaluated = eval(toEval)

            let embed = new MessageEmbed()
                .setColor("#00FF00")
                .setTimestamp()
                .setFooter(bot.user.username, bot.user.displayAvatarURL())
                .setTitle("Eval")
                .addField("To evaluate:", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
                .addField("Evaluated:", evaluated)
                .addField("Type of:", typeof(evaluated));

            message.channel.send(embed);
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