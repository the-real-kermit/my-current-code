const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "kick",
	category: "moderation", 
	cooldown: 3, 
	usage: "kick <user>",
  	description: "Use this to kick a mentioned user", 

	
  run: async (client, message, args, user, text, prefix) => {
 
    if(message.member.hasPermission("KICK_MEMBERS")) {
    let member = message.mentions.members.first()
    let nouser = new MessageEmbed()
    .setAuthor(`Please mention a valid user to kick!`, message.author.displayAvatarURL({ dynamic:true }))
    .setColor(color.main)
    if(!member) message.channel.send(nouser)
    else{
      member.kick().then(mem => {
        message.channel.send({
       embed: {
         color: color.main,
         author: {
           name:`${mem.user.username} was kicked by ${message.author.username}`,
           icon_url: member.user.displayAvatarURL({ dynamic:true })
         }
         
       }      
     })
      })
    }
  } else {
    let noperms = new MessageEmbed()
    .setAuthor("You don't have the proper permissions to run this command", message.author.displayAvatarURL({ dynamic:true }))
    .setColor(color.main)
    message.channel.send(noperms)
    }
	}
}