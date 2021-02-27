const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "rolemember",
	category: "info", 
	cooldown: 5, 
	usage: "rolemember <role>",
  	description: "Shows all the members that have that mentioned role", 

	
  run: async (client, message, args, user, text, prefix) => {


if (args.includes("@everyone")) return;
        
        if (args.includes("@here")) return;
    
       let norole = new MessageEmbed()
       .setAuthor("Please enter a valid role!", message.author.displayAvatarURL({ dynamic: true }))
       .setColor(color.main)
        
       
       if (!args[0]) return message.channel.send(norole)

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!role) return message.channel.send("**Please Enter A Valid Role!**");

        let membersWithRole = message.guild.members.cache.filter(member => {
            return member.roles.cache.find(r => r.name === role.name);
        }).map(member => {
            return member.user.tag;
        })
        if (membersWithRole > 2048) return message.channel.send('**List Is Too Long!**')

        let roleEmbed = new MessageEmbed()
            .setColor(color.main)
            .setThumbnail(message.guild.iconURL())
            .setTitle(`Users with the __${role.name}__ role!`)
            .setDescription(membersWithRole.join("\n"));
        message.channel.send(roleEmbed);
    }
}