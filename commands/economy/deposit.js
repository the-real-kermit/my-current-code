const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
let db = require("quick.db")
const ms = require("parse-ms");
module.exports = {	
	name: "deposit",
	category: "economy", 
	cooldown: 7, 
	usage: "deposit <amount>",
  	description: "Deposits your money in the bank", 

	
  run: async (client, message, args, user, text, prefix) => {  





        let member = db.fetch(`money_${user.id}`)

        if (args[0] == 'all') {
            let money = await db.fetch(`money_${user.id}`)

            let embedbank = new MessageEmbed()
                .setColor("RED")
                .setDescription("❌ You don't have any money to deposit")

            if (!money) return message.channel.send(embedbank)

            db.subtract(`money_${user.id}`, money)
            db.add(`bank_${user.id}`, money)
            let sembed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ You have deposited all your coins into your bank`);
            message.channel.send(sembed)

        } else {

            let embed2 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ Specify an amount to deposit`);

            if (!args[0]) {
                return message.channel.send(embed2)
                    .catch(err => message.channel.send(err.message))
            }
            let embed6 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ Your Amount Is Not A Number!`)

            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            
            }
            let embed3 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ You can't deposit negative money`);

            if (message.content.includes('-')) {
                return message.channel.send(embed3)
            }
            let embed4 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ You don't have that much money`);

            if (member < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ You have deposited ${args[0]} coins into your bank`);

            message.channel.send(embed5)
            db.subtract(`money_${user.id}`, args[0])
            db.add(`bank_${user.id}`, args[0])

        }
    }
}