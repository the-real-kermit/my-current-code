const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "announce",
	category: "misc", 
	cooldown: 5, 
	usage: "announce <channel name> <title> <description>",
  	description: "When naming th echannel dont tag it just use the name | announces your message in a channel", 

	
  run: async (client, message, args, user, text, prefix) => {
let announceerrorEmbed = new MessageEmbed()
    .setColor(color.main)
    .setDescription("Error! You do not have permission to perform that action!");

  let argsmissingEmbed = new MessageEmbed()
    .setColor(color.main)
    .setTitle("Error!")
    .setDescription("You are missing one or more required fields.\nFormat: ``-announce channel Title Description``\nExample: ``-announce general-chat Update-Notes This is the description!``");

  if(!args[0]) return message.channel.send(argsmissingEmbed);

  if(!args[1]) return message.channel.send(argsmissingEmbed);

  if(!args[2]) return message.channel.send(argsmissingEmbed);

  if(!message.member.hasPermission("MENTION_EVERYONE")) return message.channel.send(announceerrorEmbed);

  let echannel = args[0];
  let channel = echannel.toLowerCase();

  let announcementEmbed = new MessageEmbed()
  .setFooter(`Announced by ${message.author.tag} • ${message.guild.name}`, message.author.avatarURL)
  .setColor(color.main)
  .setTitle(`${args[1]}`)
  .setDescription(`${args.slice(2).join(' ')}`);

  if(!channel){
    message.channel.send(argsmissingEmbed)
  }

  message.guild.channels.cache.find(c => c.name === `${channel}`).send(announcementEmbed)

}
}