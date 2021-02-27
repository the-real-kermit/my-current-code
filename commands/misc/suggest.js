const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "suggest",
	category: "misc",
	cooldown: 5, 
	usage: "suggest <text>",
  	description: "Turns your suggestion into an embed", 

	
  run: async (client, message, args, user, text, prefix) => {
let embed24 = new MessageEmbed()
  .setAuthor("Please Provide Text to suggest!", message.author.displayAvatarURL({ dynamic: true }))
  .setColor(color.main)
    if (!args[0]) return message.channel.send(embed24)
    
    let emojis = ['⬆️',
                 '⬇️'
                 ]
	
    let emojisuggest = ['⬆️', '⬇️']
    let content = message.content.replace('m-suggest ', '')
    let suggestembed = new MessageEmbed()
       .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic:true }))
       .setTitle(`New Suggestion by: ${message.author.username}`)
       .setDescription(content) 
       .setColor(color.main)
       .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    const msg = await message.channel.send(suggestembed).then(sentMessage  => {
sentMessage.react("⬆️")
sentMessage.react("⬇️")
})

    
    

      
  }
}

//work in progress
