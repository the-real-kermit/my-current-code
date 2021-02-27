const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const db = require("quick.db")

module.exports = {	
	name: "testmodlog",
	category: "moderation", 
	cooldown: 0, 
	usage: "testmodlog",
  	description: "i", 

	
  run: async (client, message, args, user, text, prefix) => {
let guild = message.guild
    let modlog = db.fetch(`LOGCHANNEL_${guild}`)
    modlog.send("Test")
      //("A test has been operated and im sending the log to this channel because you set it to this channel")
	}
}