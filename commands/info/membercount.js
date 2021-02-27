const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "membercount",
	category: "info", 
	cooldown: 5, 
	usage: "membercount",
  	description: "Find out how many members and bots are in your server.", 

	
  run: async (client, message, args, user, text, prefix) => {

  let embed = new MessageEmbed()
  .setTitle("Member Count:")
  .setDescription(`Total members: **${message.guild.memberCount}** \nHumans: **${message.guild.members.cache.filter(member => !member.user.bot).size}** \nBots: **${message.guild.members.cache.filter(member => member.user.bot).size}**`)
  .setColor(color.main)
  .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true}))
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed)
}
}
