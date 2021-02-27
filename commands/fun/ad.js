const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const DIG = require("discord-image-generation");
let Discord = require("discord.js")
module.exports = {	
	name: "ad",
	category: "fun", 
	cooldown: 0, 
	usage: "ad <user>",
  	description: "Makes an ad", 

	
  run: async (client, message, args, user, text, prefix) => {


        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
      
        let img = await new DIG.Ad().getImage(avatar)
      
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)
	}
}