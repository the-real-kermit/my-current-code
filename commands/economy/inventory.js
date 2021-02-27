const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
let db = require("quick.db")
const ms = require("parse-ms");
module.exports = {	
	name: "inv",
	category: "economy", 
	cooldown: 7, 
	usage: "inv",
  	description: "Shows your inventory", 

	
  run: async (client, message, args, user, text, prefix) => {  
 
   let bruh = db.fetch(`inv_${user.id}`)
   message.channel.send(`${bruh}`)

  }
}
