const Discord = require('discord.js');
const { inspect } = require("util");
const me = "648698528872398848";
module.exports = {
  name: "eval",
  run: async (bot, message, args) =>{
    if(message.author.id == me) {
      let toEval = args.join(" ");
      let evaluated = inspect(eval(toEval, { depth: 0} ))
      try {
        if(!toEval) {
          message.channel.send("I can't eval that!")
        } else {
          
        }
       } catch(e) {
        message.channel.send(`Error!: \`${e.message}\``)
      }
    } else {
      return;
    }
    
}
}