const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "lockdown",
	category: "moderation", 
	cooldown: 5, 
	usage: "lockdown",
  	description: "Prevents any members from messaging in that channel until you unlock it.", 

	
  run: async (client, message, args, user, text, prefix) => {

if(message.member.hasPermission("MANAGE_CHANNELS")) {
message.guild.channels.cache.filter(ch => ch.type === "text").forEach(c => {
c.updateOverwrite(message.guild.roles.everyone, {
SEND_MESSAGES: false
});
});
message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: `Channel has been successfully locked by ${message.author.username}!`,
      icon_url: message.author.displayAvatarURL({ dynamic: true })
    }
  }
})
.catch(err => {
message.channels.send({
  embed: {
    color: color.main,
    author: {
      name: "There was an error when preforming this command, please try again later.",
      icon_url: message.author.displayAvatarURL({ dynamic:true })
    }
  }
})
console.error(err);
});
} else {
message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: "You don't have the nessecary permissions to run this command.",
      icon_url: message.author.displayAvatarURL({ dynamic:true })
    }
  }
})
};

	}
}