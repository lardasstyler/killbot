const Discord = require('discord.js');
module.exports = {
  name: "reload",
  aliases: [],
  run: async (bot, message, args) =>{
                                  // Tylers ID
  if(message.author.id !== "457182175075500053") return;
  // arguments (1) to provide a command.
  if(!args[0]) return message.channel.send("Provide a command to reload")
    // Command Name (name)
  let command = args[0].toLowerCase()

  try{
    // How to run the command => (prefix)relaod (name)
    delete require.cache[require.resolve(`./${command}.js`)]
    bot.commands.delete(command)

    const pull = require(`./${command}.js`)
    bot.commands.set(command, pull)
} catch(e) {
        //Not successful.
    return message.channel.send(`Reload Unsuccessful for: \`${args[0].toLowerCase()}\``)
    }
    //successful.
    message.channel.send(`\`${args[0].toLowerCase()}\` reloaded`
    
}
}