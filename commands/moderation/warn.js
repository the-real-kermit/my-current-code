const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "warn",
	category: "moderation", 
	cooldown: 3, 
	usage: "warn <user>",
  	description: "Use this to warn a mentioned user", 

	
  run: async (client, message, args, user, text, prefix) => {
      
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you dont have the proper perms bitch")
   let warnmf = message.mentions.members.first();
   if (!warnmf) return message.reply(`You didn't mention a user!`)
   if (!args.slice(1).join(" ")) return message.reply("You did not specify a reason!")

 
   let reason = args
   reason.shift()
   reason = reason.join(' ')
   warnmf.send(`:warning: You have been warned server.\n Reason: ${reason} \n\n :information_source: This warning will remain 
   on your account for 6 months unless a moderator chooses to revoke it.`) // put your own dm message if you want, and at server type in your server name
   message.channel.send(`${warnmf.username} has been successfully warned for ${reason}.`)
      // THIS IS A LOGger, IF YOU WANT THAT IT SHALL SEND IT TO A CHANNEL (e.g User has warned .......)
         const reportlog = new MessageEmbed()
         .setTitle('Warn has been succesfully executed.') 
      .setColor(color.main)
.setDescription(`**Name:** ${message.author.username}\n\n**Warned User:** ${user}\n\n**Reason:** ${reason}`)
client.channels.cache.get('805325868079513610').send(reportlog) // Paste your channel id of the log channel
message.delete()
message.channel.stopTyping()
}
}

	
//not finished
