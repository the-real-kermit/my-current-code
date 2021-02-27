const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
let db = require("quick.db")

module.exports = {	
	name: "addmoney",
	category: "economy", 
	cooldown: 7, 
	usage: "addmoney <user>",
  	description: "Adds money to a user", 

	
  run: async (client, message, args, text, prefix) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("❌ You Do Not Have Permissions To Add Money! - [ADMINISTRATOR]");
        if (!args[0]) return message.channel.send("**Please Enter A User!**")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**Enter A Valid User!**")
        if (!args[1]) return message.channel.send("**Please Enter A Amount!**")
        if (isNaN(args[1])) return message.channel.send(`**❌ Your Amount Is Not A Number!**`);
        if (args[0] > 10000) return message.channel.send("**Cannot Add That Much Amount!**")
        db.add(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`✅ Added ${args[1]} coins\n\nNew Balance: ${bal}`);
        message.channel.send(moneyEmbed)

    }
}