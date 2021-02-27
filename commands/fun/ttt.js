const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "ttt",
	category: "fun",
	cooldown: 5,
	usage: "ttt <user> <-- optional",
  	description: "play a friendly game of tictactoe with your choice between another member or the bot",
  
  run: async (client, message, args, user, text, prefix) => {

  const { tictactoe } = require('reconlx')
  const member = message.mentions.members.first() 
  
  let mention = new MessageEmbed()
       .setAuthor("Please mention a valid user to play against!", message.author.displayAvatarURL({ dynamic: true}))
       .setColor(color.main)
  
  if(!member) return message.channel.send(mention)
           

  let game = new tictactoe({
    player_two: member, 
    message: message
  })

  }
}
