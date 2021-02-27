const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "simjoin",
	category: "owner", 
	cooldown: 5, 
	usage: "simjoin",
  	description: "Run this command to simulate a joining member (use when set welcome channel)", 

	
  run: async (client, message, args, user, text, prefix) => {

    client.emit('guildMemberAdd', message.author)
      message.channel.send("It works mother fucker")
    
}}
	