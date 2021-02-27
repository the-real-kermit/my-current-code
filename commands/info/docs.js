const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const ownerid = "455898432603684895"


module.exports = {	
	name: "docs",
	category: "owner", 
	cooldown: 5, 
	usage: "docs <feature>",
  	description: "Connected to the discord.js library for useful commands", 

	
  run: async (client, message, args, user, text, prefix) => {

       if (message.author.id == ownerid) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR"))
        return message.channel
          .send("I Dont Have Permissions")
          .then(msg => msg.delete({ timeout: 5000 }));
    }
    
    //The -docs command from cheeku
	}
}