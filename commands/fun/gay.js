 const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const Random = require("srod-v2");
let Discord = require("discord.js")

module.exports = {	
	name: "gay",
	category: "fun", 
	cooldown: 5, 
	usage: "gay <user>",
  	description: "Makes them gay", 

	
  run: async (client, message, args, user, text, prefix) => {

const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Data = await Random.Gay({ Image: Member.user.displayAvatarURL({ format: "png" }), Color: color.main });

    return message.channel.send(Data);
  }
};