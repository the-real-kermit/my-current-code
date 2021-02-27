const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "embedsay",
	category: "fun", 
	cooldown: 5, 
	usage: "embedsay <text>",
  	description: "Puts your text into a embed", 

	
  run: async (client, message, args, user, text, prefix) => {
let embed24 = new MessageEmbed()
  .setAuthor("Please Provide Text!", message.author.displayAvatarURL({ dynamic: true }))
.setColor(color.main)
    if (!args[0]) return message.channel.send(embed24)
	let embedsay = new MessageEmbed()
       .setTitle(`${message.author.username}`)
    .setDescription(args.join(" ")) 
    .setColor(color.main)
  message.channel.send(embedsay)
  
  }
}

