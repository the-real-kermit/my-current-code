const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "unmute",
	category: "moderation", 
	cooldown: 3, 
	usage: "unmute <user>",
  	description: "Use this to unmute a mentioned user", 

	
  run: async (client, message, args, user, text, prefix) => {

    let unmuted = message.mentions.users.first()
    let noumuted = new MessageEmbed()
    .setAuthor(`Please mention a valid user to unmute!`, message.author.displayAvatarURL({ dynamic:true }))
    .setColor(color.main)
    if(!unmuted) return message.channel.send(noumuted)
    
    
	}
}