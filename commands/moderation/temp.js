const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "tempmute",
	category: "moderation", 
	cooldown: 5, 
	usage: "tempmute <user>",
  	description: "A timed mute command", 

	
  run: async (client, message, args, user, text, prefix) => {

const ms = require("ms")
let arg = message.content.split(" ")
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You need the manage message permssion to use this command!")
let time  = arg[2]
let sadlife = message.mentions.members.first()


if(!sadlife) return message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: "Please mention a valid user to mute!",
      icon_url: message.author.displayAvatarURL({ dynamic:true })
    }
  }
})

if(!time) return message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: "Please mention a valid amount of time!",
      icon_url: message.author.displayAvatarURL({ dynamic:true })
    }
  }
})

let mutedRole = message.guild.roles.cache.get("805927700769669120");
if(!mutedRole) return message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: "You don't have an assigned muted role",
      icon_url: message.author.displayAvatarURL({ dynamic:true })
    }
  }
})
sadlife.roles.add(mutedRole).then(() => {
message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: `${sadlife.username} was successfully muted for ${time}`,
      icon_url: sadlife.user.displayAvatarURL({ dynamic:true })
    }
  }
})
})
setTimeout(function() {
sadlife.roles.remove(mutedRole).then(() => {
message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: `${sadlife.username} was unmuted`,
      icon_url: sadlife.user.displayAvatarURL({ dynamic:true })
    }
  }
})
})
}, ms(time))
}
	}

