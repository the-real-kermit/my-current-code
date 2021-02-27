const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "purge", 
	category: "moderation", 
	cooldown: 5, 
	usage: "purge <amount>",
  	description: "Clears the messages", 

	
  run: async (client, message, args, user, text, prefix) => {

let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: `Please provide a valid amount to clear!`,
      icon_url: message.author.displayAvatarURL({ dynamic:true }) 
    }
  }
})

  
if(isNaN(clear)) return message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: `Please provide a valid amount to clear!`,
      icon_url: message.author.displayAvatarURL({ dynamic:true }) 
    }
  }
})


  
if(clear > 100) return message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: `I can't clear more than 100 messages at a time!`,
      icon_url: message.author.displayAvatarURL({ dynamic:true }) 
    }
  }
})


  
if(clear < 1) return message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: `I can't clear less than 1 message!`,
      icon_url: message.author.displayAvatarURL({ dynamic:true }) 
    }
  }
})


message.channel.bulkDelete(clear)
message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: `Successfully cleared ${clear} messages!`,
      icon_url: message.author.displayAvatarURL({ dynamic:true }) 
    }
  }
})

.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply({
  embed: {
    color: color.main,
    author: {
      name: `You don't have the proper permissions to run this command!`,
      icon_url: message.author.displayAvatarURL({ dynamic:true }) 
    }
  }
})

} 
}    
    
  }
