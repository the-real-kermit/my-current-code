const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "loading",
	category: "owner", 
	cooldown: 5, 
	usage: "loading",
  	description: "testing the message.edit command", 

	
  run: async (client, message, args, user, text, prefix) => {
//
    message.channel.send("█").then(m => {
      setTimeout(() => {
        m.edit("██")
      }, 1000);
    }).then(m => {
      setTimeout(() => {
        m.edit("███")
      }, 1000);
    })
    
	}
}
