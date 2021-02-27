const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const ms = require("ms");

module.exports = {	
	name: "remind",
	category: "misc", 
	cooldown: 5, 
	usage: "remind <reason>",
  	description: "Sets a reminder for you", 

	
  run: async (client, message, args, user, text, prefix) => {
const Array = ["d", "h", "m", "s"];

    if (!args[0] || args[0].length < 2 || !Array.find(e => args[0].endsWith(e))) return message.channel.send({
        embed: {
            "color": color.main,
            "description": "❌ **Please Give Valid Time - 1d , 1h , 1m , 1s**"

        }
    });
    
    const Last = args[0].slice(0, -1);

    if (Last < 1 || isNaN(Last)) return message.channel.send({
        embed: {
            "color": color.main,
            "description": "❌ **Please Give Valid Time - 1d , 1h , 1m , 1s**"

        }
    });

    const Reason = args.slice(1).join(" ") || "None";

    message.channel.send({
        embed: {
            "color": color.main,
            "description": `Ok I Will Remind You After ${args[0]} - Make Sure Your DMs Are On!`

        }
    });

    setTimeout(async () => {
      message.author.send(`Your Reminder :D${Reason !== "None" ? `\n\nReason: ${Reason}` : ""}`).catch(err => message.channel.send(`I Can't Dm ${message.author.username} For Reminder!`));
    }, ms(args[0]));
    }
}
	
