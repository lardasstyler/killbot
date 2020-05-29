const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    //message.delete(30);

    const message = `**Ban:**  
   \` Bans a member ``
   `` )ban (member) (reason) ``
   name 
   `` Changes a member name ``
    `` )name (member) (new name) ``
    kick 
    `` Kicks a member ``
    `` )kick (member) (reason) ``
    purge 
    `` Deletes an amount of messages ``
    `` )purge (amount e.g. 3) ``
    `

    message.reply("Admin commands sent to your dms :1:")//.then(m => m.delete(60000))

    var embed = new Discord.MessageEmbed()
        .setTitle(:tenor:  Admin Command List :tenor:)
        .setColor("RANDOM")
        .setDescription(${message_})
        .setThumbnail(${message.author.avatarURL})
        .setFooter(More will be added soon);

    message.author.send(embed);
    return;


}

module.exports.help = {
    name: "help-admin",
    aliases: ["help-admin"]
}