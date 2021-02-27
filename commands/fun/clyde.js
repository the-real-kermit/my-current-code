  const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const  Random = require("srod-v2");
module.exports = {	
	name: "clyde",
	category: "fun", 
	cooldown: 5, 
	usage: "clyde <text>",
  	description: "Makes a custom clyde message", 

	
  run: async (client, message, args, user, text, prefix) => {


    const Value = args.join(" ");
    if (!Value || Value.length > 150) return message.channel.send({
      embed: {
        color: color.main,
        author: {
          name: "Please give Clyde text and make sure it's not 150+ characters long!",
          icon_url: message.author.displayAvatarURL({ dynamic:true })
        }
      }
    })

    const Data = await Random.Clyde({ Message: Value, Color: color.main });

    return message.channel.send(Data);
  }
}