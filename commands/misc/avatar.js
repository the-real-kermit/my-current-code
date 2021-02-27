
const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "avatar",
	category: "misc", 
	cooldown: 5, 
	usage: "avatar <user> <-- Optional",
  	description: "Shows your/user's avatar", 

	
  run: async (client, message, args, user, text, prefix) => {
const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Gif = Member.user.displayAvatarURL({ format: "gif" }), Webp = Member.user.displayAvatarURL({ format: "webp" }), Png = Member.user.displayAvatarURL({ format: "png" }), Jpg = Member.user.displayAvatarURL({ format: "jpg" })

    let nomember = new MessageEmbed()
    .setTitle(`${message.author.username}'s avatar:`)
    .setColor(color.main)
    .setDescription(`[Png](${Png}) - [Gif](${Gif}) - [Webp](${Webp}) - [Jpg](${Jpg})`)
    .setImage(message.author.displayAvatarURL({ dynamic:true }))
    .setFooter(`Requested by ${message.author.username}`)
    .setTimestamp()
    if(!Member) message.channel.send(nomember)
    
    const Embed = new MessageEmbed()
    .setTitle(`${Member.user.username}'s avatar:`)
    .setColor(color.main)
    .setDescription(`[Png](${Png}) - [Gif](${Gif}) - [Webp](${Webp}) - [Jpg](${Jpg})`)
    .setImage(Member.user.displayAvatarURL({ dynamic: true }))
    .setFooter(`Requested by ${message.author.username}`)
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
	


