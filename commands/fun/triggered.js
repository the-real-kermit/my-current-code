const { MessageEmbed, MessageAttachment } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const canvacord = require("canvacord");


module.exports = {	
	name: "trig",
	category: "fun", 
	cooldown: 3, 
	usage: "trig <user>",
  	description: "OMG they're so triggered!", 

	
  run: async (client, message, args, user, text, prefix) => {

let target = message.mentions.members.first() || message.member;
if(!target) message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: "Please mention a valid user!",
      icon_url: message.author.displayAvatarURL({ dynamic:true })
    }
  }
})
let avatar = target.user.displayAvatarURL({dynamic: false, format: "png"})
let image = await canvacord.Canvas.trigger(avatar);
let triggered = new MessageAttachment(image, "triggered.gif")
let trigembed = new MessageEmbed()
.setTitle(`${target.user.username} is sooooo triggered!`)
.setColor(color.main)
.setDescription(triggered)
.setFooter(`Command requested by ${message.author.username}`)
message.channel.send(trigembed);

	}
}
