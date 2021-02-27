const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "8ball",
	category: "fun", 
	cooldown: 3, 
	usage: "8ball <content>",
  	description: "Answers your question", 

	
  run: async (client, message, args, user, text, prefix) => {
const Responses = ["As I see it, yes", 
                   "Ask again later", 
                   "Better not tell you now", 
                   "Cannot predict now", 
                   "Concentrate and ask again", 
                   "Don’t count on it", 
                   "It is certain",
                   "It is decidedly so",
                   "Most likely",
                   "My reply is no",
                   "My sources say no",
                   "Outlook not so good",
                   "Outlook good",
                   "Reply hazy, try again",
                   "Signs point to yes",
                   "Very doubtful",
                   "Without a doubt",
                   "Yes",
                   "Yes – definitely",
                   " You may rely on it"
                  ], Random = Responses[Math.floor(Math.random () * Responses.length)];
    const Question = args.join(" ");

    if (!Question) return message.channel.send({
      embed: {
        color: color.main,
        author: {
          name: "I can't supply an answer if you don't ask a question", 
          icon_url: message.author.displayAvatarURL({ dynamic:true })
        } 
      }
    })

    const Embed = new MessageEmbed()
    .setColor(color.main)
    .setTitle("8ball says...")
    .setDescription(`**${Random}**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
    .setTimestamp();

    return message.channel.send(Embed);
	}
}

 //if (!victim) return message.channel.send({
    //   embed: {