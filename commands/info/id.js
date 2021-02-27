const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "id",
	category: "info", 
	cooldown: 3, 
	usage: "id <user>",
  	description: "Get a user's ID", 

	
  run: async (client, message, args, user, text, prefix) => {

    let victim = message.mentions.members.first()
    
    let authoridembed = new MessageEmbed()
    .setAuthor(`${message.author.username}'s ID:`, message.author.displayAvatarURL({ dynamic:true }))
    .setColor(color.main)
    .setDescription(`\`\`\`\n${message.author.id}\n\`\`\``)
    .setFooter(`Requested by ${message.author.username} at`)
    .setTimestamp()
    
    if(!victim) message.channel.send(authoridembed)
    //
    let idembed = new MessageEmbed()
    .setAuthor(`${victim.user.username}'s ID:`, victim.user.displayAvatarURL({ dynamic:true }))
    .setColor(color.main)
    .setDescription(`\`\`\`\n${victim.user.id}\n\`\`\``)
    .setFooter(`Requested by ${message.author.username} at`)
    .setTimestamp()
    
    message.channel.send(idembed)
    
	}
}
//