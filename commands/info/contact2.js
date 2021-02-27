const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "contact",
	category: "info", 
	cooldown: 120,
	usage: "contact <issue/report/suggestion/feedback>",
  	description: "Puts you in contact with the developers of Magma", 

	
  run: async (client, message, args, user, text, prefix) => {
let feedbackchannel = client.channels.cache.get("804431553848803338");
let embed = new MessageEmbed()
  .setAuthor("Please provide a message to be sent to the developers!")
   .setColor(color.main)
    if (!args[0]) return message.channel.send(embed)

    let embed2 = new MessageEmbed()   
    .setAuthor("New Response!", client.user.displayAvatarURL())
    .setTitle(`From ${message.author.username}`)
    .setDescription(args.join(" "))
    .setColor(color.main)
    .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
    .setImage(`${message.guild.iconURL()}`)
    .addFields( 
      { name:"Server Name", value: `${message.guild.name}` },
      { name:"Server Count", value: `${message.guild.memberCount}` },
       { name:"Server ID", value: `${message.guild.id}` },
       { name:"Channel ID", value: `${message.channel.id}` }
       )
    feedbackchannel.send(embed2)
    let embed3 = new MessageEmbed()
       .setAuthor("Ok your input was submited!", message.author.displayAvatarURL({ dynamic: true }))
      .setColor(color.main)
    message.channel.send(embed3)
  
	}
}