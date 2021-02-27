const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "nuke",
	category: "moderation", 
	cooldown: 5, 
	usage: "nuke",
  	description: "Nukes any channel", 

	
  run: async (client, message, args, user, text, prefix) => {

    
      let channel = client.channels.cache.get(message.channel.id)
  let pos = channel.position
  let checknuke = new MessageEmbed()
  .setColor(color.main)
  .setAuthor("Are you sure you want to nuke this channel?", message.author.displayAvatarURL({ dynamic:true }))
  let msg = await message.channel.send(checknuke)
  await msg.react("✅")
  await msg.react("❌")
  

  
  const filter = (reaction, user) => (reaction.emoji.name === "✅" || reaction.emoji.name === "❌") && (user.id === message.author.id)
  
  msg.awaitReactions(filter, {max: 1}).then(collected => {
     
    if(collected.first().emoji.name === "✅") {
     
      let nukegif = new MessageEmbed()
      .setColor(color.main)
      .setTitle("Channel has been successfully nuked!")
      .setImage(`https://cdn.discordapp.com/attachments/783934439851425823/783935258541686784/ezgif.com-gif-maker_1.gif`)
      
      channel.clone().then((newChannel) => {
        newChannel.setPosition(pos).catch(console.log)
        channel.delete()
        newChannel.send(nukegif)
      })
    }
    
    if(collected.first().emoji.name === "❌") {
      
      let nonuke = new MessageEmbed()
      .setColor(color.main)
      .setAuthor("Nuke cancelled", message.author.displayAvatarURL({ dynamic:true }))
      
      message.channel.send(nonuke)
      
      msg.reactions.removeAll()
      
      .then(message => 
 message.delete(checknuke, {timeout: 1000})
 )
    }
  }) 
}
	}
