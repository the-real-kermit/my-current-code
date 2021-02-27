const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "rainbow",
	category: "fun",
	cooldown: 0, 
	usage: "rainbow",
  	description: "Random command that reacts with some colors",

	
  run: async (client, message, args, user, text, prefix) => {

    message.react('🟥');
    message.react('🟧');
    message.react('🟨');
    message.react('🟩');
    message.react('🟦');
    message.react('🟪');
	}
}