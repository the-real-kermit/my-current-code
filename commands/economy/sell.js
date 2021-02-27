 const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
let db = require("quick.db")

module.exports = {	
	name: "sell",
	category: "economy", 
	cooldown: 7, 
	usage: "sell <item>",
  	description: "Sell one of your items", 

	
  run: async (client, message, args, user, text, prefix) => {

if (args.join(' ').toLocaleLowerCase() == 'nikes') {
            let embed1 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ You don't have Nikes to sell`);

            let nikees = await db.fetch(`nikes_${user.id}`)

            if (nikees < 1) return message.channel.send(embed1)

            db.fetch(`nikes_${user.id}`)
            db.subtract(`nikes_${user.id}`, 1)
            db.subtract(`inv_${user.id}`,1)
            let embed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Sold Fresh Nikes For 600 Coins`);

            db.add(`money_${user.id}`, 600)
            message.channel.send(embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'car') {
            let embed3 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ You don't have a Car to sell`);

            let cars = await db.fetch(`car_${user.id}`)

            if (cars < 1) return message.channel.send(embed3)

            db.fetch(`car_${user.id}`)
            db.subtract(`car_${user.id}`, 1)

            let embed4= new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Sold a Car For 800 Coins`);

            db.add(`money_${user.id}`, 800)
            message.channel.send(embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'mansion') {
            let sembed2 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ You don't have a Mansion to sell`);

            let houses = await db.fetch(`house_${user.id}`)

            if (houses < 1) return message.channel.send(sembed2)

            db.fetch(`house_${user.id}`)
            db.subtract(`house_${user.id}`, 1)

            let sembed3 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Sold a Mansion For 1200 Coins`);

            db.add(`money_${user.id}`, 1200)
            message.channel.send(sembed3)
        } else {
            if (message.content.toLowerCase() === `${prefix}sell`) {
                let embed9 = new MessageEmbed()
                    .setColor("RED")
                    .setDescription(`❌ Enter an item to sell. Type ${prefix}shop to see list of items`)
                return message.channel.send(embed9)
            } else {
              return message.channel.send("**Not A Valid Item!**")
            }
        }
    }
}