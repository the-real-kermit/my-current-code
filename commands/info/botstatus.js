const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const ownerid = "455898432603684895"

module.exports = {	
	name: "botstatus",
	category: "owner", 
	cooldown: 5, 
	usage: "botstatus",
  	description: "React to the listed emoji to change Magma's status.", 

	
  run: async (client, message, args, user, text, prefix) => {

    //want to be able to react to an emoji and it changes the bot's status
     
    //let invisible = [':Offline:']
    //let online = [':Online:']
    //let dnd = [':Do_Not_Disturb:']
    
    //message.react(invisible)
    //message.react(online)
    //message.react(dnd)
     
    
    // Status change: 
    //client.user.setPresence({
    //activity: { name: "Type | -help", type: "PLAYING" },
    //status: "dnd"
    
    if (message.author.id == ownerid) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR"))
        return message.channel
          .send("I Dont Have Permissions")
          .then(msg => msg.delete({ timeout: 5000 }));
    }
    
    
    
    
    let statusembed = new MessageEmbed()
       .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
       .setTitle(`Current bot status: ${client.user.presence}`)
       .setDescription("**Status options:** \n🟢 = online \n🔴 = do not disturb \n⚪ = invisible(offline)") 
       .setColor(color.main)
    const msg = await message.channel.send(statusembed).then(sentMessage  => {
sentMessage.react('🟢')
sentMessage.react('🔴')
sentMessage.react('⚪')
})



	}
}