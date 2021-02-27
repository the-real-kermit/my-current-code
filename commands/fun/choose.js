const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const Color = "RANDOM", Random = require("srod-v2");

module.exports = {	
	name: "choose",
	category: "fun", 
	cooldown: 5, 
	usage: "choose <text> or <text>",
  	description: "", 

	
  run: async (client, message, args, user, text, prefix) => {

let Choices = args.join(" ");

    if (!Choices || !Choices.toLowerCase().includes(" or ") || Choices.toLowerCase().endsWith(" or")) return message.channel.send({
      embed: {
        color: color.main,
        title: `Incorrect usage:`,
        description: `**Format:** \n- <option 1> \n- <option 2> \n- <option 3> \n and so on... \n **Make sure to divide choices with "or"**`
      }
    })

    Choices = await Choices.toLowerCase().split(" or ");
    Choices = Choices[Math.floor(Math.random() * Choices.length)];

    const Embed = new MessageEmbed()
    .setColor(color.main)
    .setTitle(`I choose...`)
    .setDescription(Choices.charAt(0).toUpperCase() +  Choices.slice(1))

    return message.channel.send(Embed);
  }
}
//("Wrong Usage!\n\n- No Choice\n- No Or\n- No Other Choice");