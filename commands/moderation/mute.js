const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "mute",
	category: "moderation", 
	cooldown: 3, 
	usage: "mute <user>",
  	description: "Use this to mute a mentioned user", 

	
  run: async (client, message, args, user, text, prefix) => {

    let muted = message.mentions.users.first()
    let nomuted = new MessageEmbed()
    .setAuthor(`Please mention a valid user to mute!`, message.author.displayAvatarURL({ dynamic:true }))
    .setColor(color.main)
    if(!muted) return message.channel.send(nomuted)
    
    
	}
}