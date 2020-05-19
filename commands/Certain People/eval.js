const Discord = require('discord.js');
module.exports = {
  name: "eval",
  run: async (bot, message, args) =>{
    if(message.author.id !== "648698528872398848") return;
    
    if(!args[0]) return message.channel.send("Please include something to evaluate.")
    
    try {
       if(args.join(" ").toLowerCase().includes("token")) return;
      
      const toEval = args.join(" ");
      const evaluated = eval(toEval);
      
      let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter("")
    } catch (e) {
      
    }
    
}
}