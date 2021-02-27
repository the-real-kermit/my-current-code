const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "slowmode",
	category: "moderation", 
	cooldown: 5, 
	usage: "slowmode <amount of time>",
  	description: "Sets the slowmode rate for the channel that the command is used in.", 

	
  run: async (client, message, args, user, text, prefix) => {

if(message.member.hasPermission("MANAGE_CHANNELS")) {
let arg = message.content.split(" ").slice(1)
let cd = arg[0]
if(!cd) {
    return message.channel.send({
      embed: {
        color: color.main,
        author: {
          name: "Please Give an amount of **Seconds** to set slowmode!",
          icon_url: message.author.displayAvatarURL({ dynamic:true })
        }
      }
    })
}
if(isNaN(cd)) {
    return message.channel.send({
      embed: {
        color: color.main,
        author: {
          name: "Please give an amount of seconds to set slowmode!",
          icon_url: message.author.displayAvatarURL({ dynamic:true })
        }
      }
    })
} 
if(cd > 21600) {
    return message.channel.send({
      embed: {
        color: color.main,
        author: {
          name: "You can't set the slowmode higher than 21600 seconds.",
          icon_url: message.author.displayAvatarURL({ dynamic:true })
        }
      }
    })
}
if(cd < 0) {
    return message.channel.send({
      embed: {
        color: color.main,
        author: {
          name: "You can't set the slowmode lower than 0 seconds",
          icon_url: message.author.displayAvatarURL({ dynamic:true })
        }
      }
    })
}
else {
message.channel.setRateLimitPerUser(cd) 
message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: `Successfully set the slowmode to ${cd} seconds in this channel!`,
      icon_url: message.author.displayAvatarURL({ dynamic:true })
    }
  }
})
};
} else {
    return message.channel.send({
      embed: {
        color: color.main,
        author: {
          name: "You don't have the necessary permissions to run this command",
          icon_url: message.author.displayAvatarURL({ dynamic:true })
        }
      }
    })
}

	}
}
//necessary