const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
let db = require("quick.db")
const ms = require("parse-ms");
module.exports = {	
	name: "buy",
	category: "economy", 
	cooldown: 7, 
	usage: "buy",
  	description: "Buy an item", 

	
  run: async (client, message, args, user, text, prefix) => {  




        
        let author = db.fetch(`money_${user.id}`)

        let Embed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`❌ You need 200 coins to purchase Bronze VIP`);


        if (args.join(' ').toLocaleLowerCase() == 'bronze') {
            if (author < 200) return message.channel.send(Embed)

            await db.fetch(`bronze_${user.id}`);
            db.set(`bronze_${user.id}`, true)

            let Embed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased Bronze VIP For 200 Coins`);

            db.subtract(`money_${user.id}`, 200)
            message.channel.send(Embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'nikes') {
            let Embed3 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ You need 600 coins to purchase some Nikes`);

            if (author < 600) return message.channel.send(Embed3)

            await db.fetch(`nikes_${user.id}`)
            db.add(`nikes_${user.id}`, 1)
            db.add(`inv_${user.id}`, 1)

            let Embed4 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased Fresh Nikes For 600 Coins`);

            db.subtract(`money_${user.id}`, 600)
            message.channel.send(Embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'car') {
            let Embed5 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ You need 800 coins to purchase a new car`);

            if (author < 800) return message.channel.send(Embed5)

            await db.fetch(`car_${user.id}`)
            db.add(`car_${user.id}`, 1)

            let Embed6 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased A New Car For 800 Coins`);

            db.subtract(`money_${message.guild.id}_${user.id}`, 800)
            message.channel.send(Embed6)
        } else if (args.join(' ').toLocaleLowerCase() == 'mansion') {
            let Embed7 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ You need 1200 coins to purchase a Mansion`);

            if (author < 1200) return message.channel.send(Embed7)

            await db.fetch(`house_${user.id}`)
            db.add(`house_${user.id}`, 1)

            let Embed8 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased A Mansion For 1200 Coins`);

            db.subtract(`money_${user.id}`, 1200)
            message.channel.send(Embed8)
        } else {
            if (message.content.toLowerCase() === `${prefix}buy`) {
                let embed9 = new MessageEmbed()
                    .setColor("RED")
                    .setDescription(`❌ Enter An Item To Buy!\nType ${prefix}shop To See List Of Items!`)
                return message.channel.send(embed9)
            }
        }
    }
}