 const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const DIG = require("discord-image-generation");
let Discord = require("discord.js")
module.exports = {	
	name: "blur",
	category: "fun", 
	cooldown: 5, 
	usage: "blur <user> <-- Optional",
  	description: "Blurs there avatar", 

	
  run: async (client, message, args, user, text, prefix) => {
let avatar = message.author.displayAvatarURL({ dynamic: true, format: 'png' }) 
       
        let img = await new DIG.Blur().getImage(avatar)
  
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)
	}
}


