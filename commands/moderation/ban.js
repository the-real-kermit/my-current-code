const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "ban",
	category: "moderation", 
	cooldown: 3, 
	usage: "ban <user>",
  	description: "Use this to ban a mentioned user", 

	
  run: async (client, message, args, user, text, prefix) => {
 
    if(message.member.hasPermission("BAN_MEMBERS")) {
      
    let args = message.content.split(" ").slice(1);

    let reason = args[0]
      
    let member = message.mentions.members.first()
    let nouser = new MessageEmbed()
    .setAuthor(`Please mention a valid user to ban!`, message.author.displayAvatarURL({ dynamic:true }))
    .setColor(color.main)
    if(!member) message.channel.send(nouser)
    else{
      member.ban().then(mem => {
        message.channel.send({
       embed: {
         color: color.main,
         author: {
           name:`${mem.user.username} was banned by ${message.author.username}`,
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