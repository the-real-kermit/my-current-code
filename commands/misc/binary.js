const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const axios = require("axios")

module.exports = {	
	name: "binary",
	category: "misc", 
	cooldown: 5, 
	usage: "binary <text>",
  	description: "Converts text to binary code", 

	
  run: async (client, message, args, user, text, prefix) => {
 const url = `http://some-random-api.ml/binary?text=${args}`;

  let response, data;
  try {
    response = await axios.get(url);
    data = response.data;
  } catch (e) {
    return message.channel.send({
      embed: {
        color: color.main,
        author: {
          name: "An error occured, please try again!",
          icon_url: message.author.displayAvatarURL({ dynamic:true })
        }
      }
    })
  }

  const embed = new MessageEmbed()
    .setTitle("Text to Binary")
    .setDescription("**Binary Code:** \n`" + data.binary + "`")
    .setTimestamp()
    .setFooter("Good Job Coder!")
    .setColor(color.main);

  await message.channel.send(embed);
	}
}