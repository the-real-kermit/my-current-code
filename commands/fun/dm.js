const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "dm",
	category: "fun", 
	cooldown: 5, 
	usage: "dm <user> <message>",
  	description: "Get the bot to send a DM to any mentioned user.", 

	
  run: async (client, message, args, user, text, prefix) => {


const whattosend = message.content.slice("".length).trim().split(/ +/);
    
const dmsender = message.author.username

whattosend.shift().toLowerCase().split(" ")[1]

const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])

if(!member) return message.channel.send('Provide a user!')

if(!whattosend[1]) return message.channel.send('What do you want to send to them?')

let dmembed = new MessageEmbed()
.setColor(color.main)
.setTitle(`You've recieved a direct message from ${dmsender}`)
.setDescription(whattosend.slice(1).join(" "))
    
member.send(dmembed)

	}
}
