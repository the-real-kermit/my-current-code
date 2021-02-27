const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const db = require("quick.db")
module.exports = {	
	name: "afk",
	category: "misc", 
	cooldown: 5, 
	usage: "afk <reason>",
  	description: "Sets you afk", 

	
  run: async (client, message, args, user, text, prefix) => {

let isAfk = db.fetch("isAfk_" + message.author.id)
if(isAfk === null || isAfk === false) {
let reason = args.join(" ")
if(!reason) return message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: "Please provide an afk message, example:\n-afk [message]",
      icon_url: message.author.displayAvatarURL({ dynamic:true })
    }
  }
})
db.set("isAfk_" + message.author.id, true)
db.set("reason_" + message.author.id, reason)
message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: "Successfully set your afk.",
      icon_url: message.author.displayAvatarURL({ dynamic:true })
    }
  }
})
} else {
db.set("isAfk_" + message.author.id, false)
message.channel.send({
  embed : {
    color: color.main,
    author: {
      name: "️Successfully removed your afk.",
      icon_url: message.author.displayAvatarURL({ dynamic:true })
    }
  }
})
}
}
}
