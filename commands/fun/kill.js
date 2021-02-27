const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "kill",
	category: "fun", 
	cooldown: 0, 
	usage: "kill <user>",
  	description: "Use this command to kill other users", 

	
  run: async (client, message, args, text, prefix) => {
let user = message.mentions.members.first()
let mentionso = new MessageEmbed()
  .setAuthor("Please mention a valid user!", message.author.displayAvatarURL({ dynamic: true }))
  .setColor(color.main)
if (!user) return message.channel.send(mentionso)
    
    const Responses = ["Ran over", 
                   "Heart Attack", 
                   "Animis", 
                   "fvffddf", 
                   "Cffff", 
                   "Don’ffdfd", 
                   "Itfdfdb",
                   "Itffdbd",
                   "Mofdbdbd",
                   "bfdbdbfd",
                   "fbdbfdb",
                   "Ofbfdbf",
                   "fbdfbd",
                   "Rbfdbfdf",
                   "Sfbdbfd",
                   "fbdbfdb",
                   "Wfbdbfd",
                   "Yfbdbfd",
                   "Yfbdbf – dfbdbfd",
                   " fbdbd"
                  ], Random = Responses[Math.floor(Math.random () * Responses.length)];
    
    
    message.channel.send(`${Random}`)
  }
}
//NOT WORKING