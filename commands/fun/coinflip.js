const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "coinflip",
	category: "fun", 
	cooldown: 5, 
	usage: "coinflip",
  	description: "Coinflip", 

	
  run: async (client, message, args, user, text, prefix) => {

      let flip = ["Tails!", "Heads!"];
      let ht = Math.round(Math.random());
      const embed = new MessageEmbed()
        .setTitle(flip[ht])
        .setColor(color.main)
        .setFooter(`Command requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();
      message.channel.send(embed)
    }
}