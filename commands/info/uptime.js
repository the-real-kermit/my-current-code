const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const ownerid = "455898432603684895"


module.exports = {	
	name: "uptime",
	category: "info", 
	cooldown: 5, 
	usage: "uptime",
  	description: "Get an updated report of how long Magma has been online.", 

	
  run: async (client, message, args, user, text, prefix) => {
    
         if (message.author.id == ownerid) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR"))
        return message.channel
          .send("I Dont Have Permissions")
          .then(msg => msg.delete({ timeout: 5000 }));
    }

    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
 let embed = new MessageEmbed()
 .setTitle(`Uptime of ${client.user.username}`)
 .setDescription(`\`${days}d\` \`${hours}h\` \`${minutes}m\` \`${seconds}s\n\``)
 .setColor(color.main)
 .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dyanmic:true }))
 .setTimestamp()
 message.channel.send(embed)
}
}
