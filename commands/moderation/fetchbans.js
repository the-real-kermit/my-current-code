const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "fetchbanned",
	category: "moderation", 
	cooldown: 5, 
	usage: "fetchbanned",
  	description: "Get an updated feed of everyone who has been banned from your server.", 

	
  run: async (client, message, args, user, text, prefix) => {

    if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send({
      embed: {
        color: color.main,
        author: {
          name: "You don't have the nessecary permissions to run this command",
          icon_url: message.author.displayAvatarURL({ dynamic:true })
        }
      }
    })
    
    const fetchBans = message.guild.fetchBans();
    const bannedMembers = (await fetchBans)
    .map((member) => `\`${member.user.tag}\``)
    .join(" ");
    
    message.channel.send(bannedMembers)
	}
}