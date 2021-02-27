   const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "roleinfo",
	category: "info", 
	cooldown: 5, 
	usage: "roleinfo <role>",
  	description: "Shows the role information", 

	
  run: async (client, message, args, user, text, prefix) => {
let embednorole = new MessageEmbed()
.setAuthor("Please enter a valid role!", message.author.displayAvatarURL({ dynamic: true }))
.setColor(color.main)
if (!args[0]) return message.channel.send(embednorole)
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send(embednorole);

        const status = {
            false: "No",
            true: "Yes"
        }

        let roleembed = new MessageEmbed()
            .setColor(color.main)
            .setAuthor("Role Info")
            .setThumbnail(message.guild.iconURL())
            .addField("**ID**", `\`${role.id}\``, true)
            .addField("**Name**", role.name, true)
            .addField("**Hex**", role.hexColor)
            .addField("**Members**", role.members.size)
            .addField("**Position**", role.position)
            .addField("**Mentionable**", status[role.mentionable])
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(roleembed);
    }
}