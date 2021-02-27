const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "unban",
	category: "moderation", 
	cooldown: 15, 
	usage: "unban <user_id>",
  	description: "Allows you to unban members via user id", 

	
  run: async (client, message, args, user, text, prefix) => {
    
    
    
    
    
    //NOT WORKING
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 if(message.member.hasPermission("ADMINISTRATOR")) {
   let args = message.content.split(" ").slice(1);
const id = args[0];
   const reason = args[1]
    let nouser = new MessageEmbed()
    .setAuthor(`Please mention a valid user to unban!`, message.author.displayAvatarURL({ dynamic:true }))
    .setColor(color.main)
    if(!id) message.channel.send(nouser)
   if(!reason) message.channel.send("Please supply a reason")
    else{
       
        let unbanembed = new MessageEmbed()
        .setColor(color.main)
        .setAuthor(`${id.user.username} was unbanned by ${message.author.username}`, id.user.displayAvatarURL({ dynamic:true }))
        .setDescription(`Reason: ${reason}`)
        .setTimestamp()
      
      message.guild.members.unban(id).then(mem => { 
        message.channel.send(unbanembed)
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
//{
//       embed: {
//         color: color.main,
//         description: `Reason: ${args[1]}`,
//         author: {
//           name:`${id.user.username} was unbanned by ${message.author.username}`,
//           icon_url: id.user.displayAvatarURL({ dynamic:true })
//         }
         
//       }      
//     })

