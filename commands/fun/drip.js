const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const Random = require("srod-v2");

module.exports = {	
	name: "drip",
	category: "", 
	cooldown: 5, 
	usage: "drip <user> <-- Optional ",
  	description: "Makes you a lil more drippy", 

	
  run: async (client, message, args, user, text, prefix) => {


const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new MessageEmbed()
    .setColor(color.main)
    .setImage(encodeURI(`https://vacefron.nl/api/drip?user=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
}