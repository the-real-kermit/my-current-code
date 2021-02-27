const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "howgay",
	category: "fun", 
	cooldown: 5, 
	usage: "howgay <user> <--- optional",
  	description: "Find out how gay someone is...", 

	
  run: async (client, message, args, user, text, prefix) => {
//█████████████████████████████████████████████████████████████
//█████████████████████████████████████████████████████████████
//████████████████Not working █████████████████████████████████
//█████████████████████████████████████████████████████████████
//█████████████████████████████████████████████████████████████
        let gayuser = message.mentions.members.first()
        let p = Math.floor(Math.random() * 100)
        if(!gayuser)message.channel.send({
          embed: {
            color: color.main,
            author: {
              name: `You are ${p}% gay`,
              icon_url: message.author.displayAvatarURL({ dynamic:true })
            }
          }
        })
    else {
      let youuser = message.mentions.members.first()
      let m = Math.floor(Math.random() * 100)
      message.channel.send({
        embed: {
          color: color.main,
          author: {
            name: `${youuser.username} is ${m}% gay`,
            icon_url: youuser.displayAvatarURL({ dynamic:true })
          }
        }
      })
    }

	}
}