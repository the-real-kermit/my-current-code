const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "ping",
	category: "info", 
	cooldown: 5, 
	usage: "ping",
  	description: "ping", 

	
  run: async (client, message, args, user, text, prefix) => {

message.channel.send("**Pinging...**").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp
            const embed = new MessageEmbed()
                .setTitle(":ping_pong: | Pong!")
                .setColor(color.main)
                .setDescription(`**Latency:** ${ping}\n\n**API:** ${Math.round(client.ws.ping)}`)
            message.channel.send(embed)
            m.delete()
        })
    }
};