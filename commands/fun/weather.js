const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "weather",
	category: "fun", 
	cooldown: 5, 
	usage: "weather <city>",
  	description: "Get an updated feed of weather information for the supplied city.", 

	
  run: async (client, message, args, user, text, prefix) => {

    const weather = require("weather-js");

    let city = args.join(" ");
    let degreetype = "F"; 

     weather.find({search: city, degreeType: degreetype}, function(err, result) {
        if (!city) return message.channel.send({
          embed: {
            color: color.main,
            author: {
              name: "Please insert a valid city.",
              icon_url: message.author.displayAvatarURL({ dynamic:true })
            }
          }
        })
        if (err || result === undefined || result.length === 0) return message.channel.send({
          embed: {
            color: color.main,
            author: {
              name: "Unknown city, please try again with a different city.",
              icon_url: message.author.displayAvatarURL({ dynamic:true })
            }
          }
        })

        let current = result[0].current;
        let location = result[0].location;

        const embed = new MessageEmbed()
        
        .setTitle(`Current forecast for ${current.observationpoint}`)
        .setDescription(`**Forecast:** ${current.skytext}`)
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
        .setTimestamp()
        .setColor(color.main)
         

        embed.addField("Temprature:", `${current.feelslike}° Degrees`, true)
        .addField("Degree: ", `${location.degreetype} (fahrenheit)`, true)
        .addField("Winds:", current.winddisplay, true)
        .addField("Humidity:", `${current.humidity}%`, true)
        .addField("Timezone:", `UTC ${location.timezone}`, true)
        
        

        return message.channel.send(embed);
     })
	}
}