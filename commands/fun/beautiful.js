const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
let Discord = require("discord.js")
const DIG = require("discord-image-generation")

module.exports = {	
	name: "beautiful",
	category: "fun", 
	cooldown: 0, 
	usage: "beautiful",
  	description: "", 

	
  run: async (client, message, args, user, text, prefix) => {

let bruh = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

 let avatar = bruh.user.displayAvatarURL({
      dynamic: false,
      format: "png",
    });

    let img = await new DIG.Beautiful().getImage(avatar);

    let attach = new Discord.MessageAttachment(img, "delete.png");

   
    message.channel.send(attach);
	}
}