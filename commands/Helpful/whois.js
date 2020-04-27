const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "whois",
    aliases: ["who", "user", "info"],
     category: 'Moderation',
    description: "Returns user information",
    run: async (bot, message, args) => {
      
      
      
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || getMember(message, args.join(" "))
 
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
            .addField('Registered', created, true)
            .addField('Joined', joined, true)
            .addField('Display Name', member.displayName, true)
            .addField('Status', member.presence.status, true)
        .addField('Activity', member.user.presence.activity, true)
            .addField('Roles', roles)
        

        message.channel.send(embed);

    }
}