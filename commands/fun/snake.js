const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "snake",
	category: "fun", 
	cooldown: 5, 
	usage: "snake",
  	description: "Allows you to play snake through reactions.", 

	
  run: async (client, message, args, user, text, prefix) => {

    const SnakeGame = require('snakecord');
  const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: color.main,
    timestamp: false,
    gameOverTitle: "Game Over"
});

return snakeGame.newGame(message);



	}
}