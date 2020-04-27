const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "whois",
    aliases: ["who", "user", "info"],
     category: 'Moderation',
    description: "Returns user information",
    run: async (bot, message, args) => {
      
      
      
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
 
        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .cache.filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setDescription(`<@${member.user.id}>`)
            .setFooter(`ID: ${member.user.id}`)
            .setTimestamp()
            .setThumbnail(member.user.displayAvatarURL())
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

    
            .addField('Joined', joined, true)
            .addField('Registered', created, true)
        .addField('Display Name', member.displayName)
            .addField('Status', member.presence.status)
           .addField('Roles', roles)

        message.channel.send(embed);
    }
}