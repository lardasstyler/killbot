const Discord = require('discord.js');
module.exports = {
  name: "reload",
  aliases: [],
  run: async (bot, message, args) =>{
                                  // Tylers ID
         let errorEmbed1 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription(`The reload was unsuccessfull for \`${args[0].toLowerCase()}\`!`)
    .setFooter("Check your message you idiot!")
    .setTimestamp()
     let errorEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Error!")
    .setDescription("You do not have the permission to use this command!")
    .setFooter("Having problems? Contact ty#6653!")
    .setTimestamp()
  if(message.author.id !== "457182175075500053") return message.channel.send(errorEmbed)
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
    return message.channel.send(errorEmbed1)
    }
    //successful.
    message.channel.send(`\`${args[0].toLowerCase()}\` has been reloaded!`)
    }
  }
