const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const DIG = require("discord-image-generation")
let Discord = require("discord.js")

module.exports = {	
	name: "bed",
	category: "fun", 
	cooldown: 5, 
	usage: "bed <user> <-- Optional",
  	description: "Custom meme", 

	
  run: async (client, message, args, user, text, prefix) => {
let bruh = message.mentions.users.first() || message.author
    let avatar = bruh.displayAvatarURL({ dynamic: false, format: 'png' });
       
        let img = await new DIG.Bed().getImage(message.author.displayAvatarURL({format: 'png'}), avatar)
       
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)
	}
}


