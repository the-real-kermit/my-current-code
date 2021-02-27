const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "servercount",
	category: "info", 
	cooldown: 5, 
	usage: "servercount",
  	description: "Tells you how many servers Magma is in.", 

	
  run: async (client, message, args, user, text, prefix) => {
  
  let embed = new MessageEmbed()
  .setTitle(`${client.user.username} Server Count:`)
  .setDescription(`${client.user.username} is in **${client.guilds.cache.size}** Servers!`)
  .setColor(color.main)
  .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
  .setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
  message.channel.send(embed)

	}
}

