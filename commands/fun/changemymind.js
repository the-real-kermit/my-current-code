
const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const Color = "RANDOM", Random = require("srod-v2");
module.exports = {	
	name: "cmm", 
	category: "fun", 
	cooldown: 5, 
	usage: "cmm <text>",
  description: "We can change your mind", 

	
  run: async (client, message, args, user, text, prefix) => {
const Value = args.join(" ");
    if (!Value || Value.length > 25) return message.channel.send({
      embed: {
        color: color.main,
        author: {
          name: "Please supply a message (has to be under 25 characters!)",
          icon_url: message.author.displayAvatarURL({ dynamic:true })
        }
      }
    })

    const Data = await Random.ChangeMyMind({ Message: Value, Color: color.main });

    return message.channel.send(Data);
	}
}

