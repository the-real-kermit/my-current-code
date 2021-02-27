const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
let db = require("quick.db")
const ms = require("parse-ms");
module.exports = {	
	name: "shop",
	category: "economy", 
	cooldown: 7, 
	usage: "shop",
  	description: "Displays the shop", 

	
  run: async (client, message, args, user, text, prefix) => {  

let embed = new MessageEmbed()
            .setDescription(`** SHOP: **\n Bronze: \`200$\`\n [${prefix}buy/${prefix}sell Bronze]\n\n Nikes: \`600$\`
[${prefix}buy/${prefix}sell Nikes] \n\nCar: \`800$\` 
[${prefix}buy/${prefix}sell Car]\n\nMansion: \`2000$\`
 [${prefix}buy/${prefix}sell Mansion]
 `)
            .setColor(color.main)
        .setFooter(`Requested By ${message.author.username}`)
        message.channel.send(embed)
      if(args[0] === "2"){
        
        }
    }
}