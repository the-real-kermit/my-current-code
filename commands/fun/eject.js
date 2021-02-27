const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const Random = require("srod-v2");
let Discord = require("discord.js");

module.exports = {	
	name: "eject",
	category: "fun", 
	cooldown: 5, 
	usage: "eject <user>",
  	description: "Ejects them out of the game", 

	
  run: async (client, message, args, user, text, prefix) => {

const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
   
    let Color = "black|blue|brown|cyan|darkgreen|lime|orange|pink|purple|red|white|yellow".split("|"), Imposter = [true, false];
    Color = Color[Math.floor(Math.random() * Color.length)], Imposter = Imposter[Math.floor(Math.random() * Imposter.length)];

    const Embed = new Discord.MessageEmbed()
    .setColor(color.main)
    .setTitle(`${Member.user.username} Is ${Imposter ? "The Imposter!" : "Not An Imposter!"}`)
    .setImage(encodeURI(`https://vacefron.nl/api/ejected?name=${Member.user.username}&impostor=${Imposter}&crewmate=${Color}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};