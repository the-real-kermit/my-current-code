const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "cmc",
	category: "misc", 
	cooldown: 0, 
	usage: "cmc",
  	description: "Creates a channel", 

	
  run: async (client, message, args, user, text, prefix) => {
 let channel = message.guild.channels.cache.find(x => x.name === "magma-convo"); 
    let embed = new MessageEmbed()
       .setAuthor("Magma ChatBot", client.user.displayAvatarURL())
       .setTitle("Creating Channel Error")
       .setDescription("I can't create this channel!\nReason: The channel is already a thing")
    .setColor(color.main)
    if (channel) return message.channel.send(embed)
 
   if(!channel) return message.guild.channels.create("magma-convo")
   
 }
  }
