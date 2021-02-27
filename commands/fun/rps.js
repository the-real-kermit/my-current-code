const Discord =  require('discord.js')
const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "rps",
	category: "fun", 
	cooldown: 0, 
	usage: "rps",
  	description: "Play rock paper and scissors", 

	
  run: async (client, message, args, user, text, prefix) => {
    
    
    
        let embed = new Discord.MessageEmbed()
            .setTitle("RPS GAME")
            .setColor(color.main)
            .setThumbnail('https://media2.giphy.com/media/elJQRdWlFb8gPN1T9K/source.gif')
            .setDescription(" **Rock Paper Scissors** \n React to play!")
            .addField("React With :", "**Rock** - 🗻 \n **Paper** - 🗞️ \n **Scissor** - ✂")
            .setFooter(`Game Against ${message.author.username}`)
            .setTimestamp()
        let msg = await message.channel.send(embed)
        await msg.react("🗻")
        await msg.react("🗞️")
        await msg.react("✂")

        const filter = (reaction, user) => {
            return ['🗻', '🗞️', '✂'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '🗞️', '✂']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, { max: 1, time: 60000, error: ["time"] }).then(
            async (collected) => {
                const reaction = collected.first()
                let result = new Discord.MessageEmbed()
                    .setTitle("RESULT")
                    .setColor(color.main)
                    .setThumbnail('https://media.discordapp.net/attachments/800705225111502881/804246668626755604/1_8du96SQUQ0NlWmWvVu20Zw.png?width=570&height=427')
                    .addField("Your choice", `${reaction.emoji.name}`, true)
                    .addField("My choice", `${me}`, true)
                    .setFooter(`Game Against ${message.author.username}`)
                    .setTimestamp()
                await msg.edit(result)
                if ((me === "🗻" && reaction.emoji.name === "✂") ||
                    (me === "🗞️" && reaction.emoji.name === "🗻") ||
                    (me === "✂" && reaction.emoji.name === "🗞️")) {
                    message.channel.send({
                        embed: {
                            color: "RED",
                            title: " ",
                            description: '👍 You Loose!! Nice Try... '
                        }
                    });
                } else if (me === reaction.emoji.name) {
                    return message.channel.send({
                        embed: {
                            color: "YELLOW",
                            title: " ",
                            description: '🤝 Okay! Its Tie! '
                        }
                    });
                } else {
                    return message.channel.send({
                        embed: {
                            color: "GREEN",
                            title: " ",
                            description: '👑 You Won!! Well Played..'
                        }
                    });
                }
            })
            .catch(collected => {
                message.channel.send('Times Up!! To Late to React...');
            })
    }

	}
