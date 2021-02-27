const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "say",
	category: "fun", 
	cooldown: 3, 
	usage: "say <Text>",
  	description: "Resends the message", 

	
  run: async (client, message, args, user, text, prefix) => {
	if (message.content === "-say") {
    let errorsay = new MessageEmbed() 
  .setAuthor("Please Provide Text", message.author.displayAvatarURL({ dynamic: true }))
     .setColor(color.main)
    if(!args[0]) return message.channel.send(errorsay)
		 let nicetry = new MessageEmbed()
      .setAuthor("Nice try i'm smarter then that!")
      .setColor(color.main)
    if (args[0].includes("@everyone")) return message.channel.send(nicetry)
  } else {
    message.channel.send(args.join(" ")) 
  }
	}
}