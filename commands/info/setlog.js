const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const db = require("quick.db")

module.exports = {	
	name: "setmodlog",
	category: "info",
	cooldown: 10,
	usage: "setmodlog <in channel>",
  	description: "", 

	
  run: async (client, message, args, user, text, prefix) => {
if (message.member.hasPermission("ADMINISTRATOR")) {
  let channel = message.channel.id
  let guild = message.guild
  db.set(`LOGCHANNEL_${guild}`, channel)
  let logchannel = new MessageEmbed()
    .setAuthor(`${message.guild.name}`)
    .setTitle("Set Log Channel!")
    .setColor(color.main)
    .setDescription(`Set the log channel to ${message.channel.name}, ${message.channel.id}!\n\nIf you want this to be changed just run ${prefix}setmodlog in a different channel!`)
  message.channel.send(logchannel)
} else {
 let noperms = new MessageEmbed()
   .setAuthor("Youd ont have ADMIN", message.author.displayAvatarURL({ dynamic:true }))
   .setColor(color.main)
  message.channel.send(noperms)
}
	}
}