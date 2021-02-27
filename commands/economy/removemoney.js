const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
let db = require("quick.db")
const ms = require("parse-ms");
module.exports = {	
	name: "take",
	category: "economy", 
	cooldown: 7, 
	usage: "take <user> amount",
  	description: "Removes any amount of money from a user", 

	
  run: async (client, message, args, user, text, prefix) => {  
      if (!message.member.hasPermission("ADMINISTRATOR", "MANAGE_GUILD")) return message.channel.send("❌ You do not have permissions to remove money!");
        if (!args[0]) return message.channel.send("**Please Enter A User!**")

     if (!user) return message.channel.send("**Enter A Valid User!**")

        if (!args[1]) return message.channel.send("**Please Enter A Amount!**")
        if (isNaN(args[1])) return message.channel.send("**Enter Valid Amount!**");
        let bal = await db.fetch(`money_${user.id}`)

        if (args[0] > bal) return message.channel.send("**Cannot Remove That Much Money!**")
        db.subtract(`money_${user.id}`, args[1])
        let bal2 = await db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`✅ Removed ${args[1]} coins\n\nNew Balance: ${bal2}`);
        message.channel.send(moneyEmbed)

    }
}