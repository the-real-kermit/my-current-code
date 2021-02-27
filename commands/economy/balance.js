const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
let db = require("quick.db")

module.exports = {	
	name: "balance",
	category: "economy", 
	cooldown: 7, 
	usage: "balance",
  	description: "Shows your balance", 

	
  run: async (client, message, args, text, prefix) => {
let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r =>
          r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.member;

    let bal = db.fetch(`money_${user.id}`);

    if (bal === null) bal = 0;

    let bank = await db.fetch(`bank_${user.id}`);

    if (bank === null) bank = 0;
let Total = bal + bank
    if (user) {
      let moneyEmbed = new MessageEmbed()
        .setColor(color.main)
        .setDescription(
          `**${user.user.username}'s Balance**\n**Cash:** ${bal}$\n**Bank:** ${bank}\n**Total:** ${Total}`
        );
      message.channel.send(moneyEmbed);
    } else {
      return message.channel.send("**Enter A Valid User!**");
    }
  }
};