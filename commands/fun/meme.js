const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "meme",
	category: "fun", 
	cooldown: 3, 
	usage: "meme",
  	description: "Laugh at some fresh memes straigh off of Reddit.com", 

	
  run: async (client, message, args, user, text, prefix) => {

    const got = require('got');
        const memeEmbed = new MessageEmbed();
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;

            memeEmbed.setTitle(`${memeTitle}`);
            memeEmbed.setImage(memeImage);
            memeEmbed.setColor(color.main);
            memeEmbed.setFooter(
                `👍 ${memeUpvotes} | 👎 ${memeDownvotes} | 💬 ${memeNumComments}`
            );

            message.channel.send(memeEmbed);
        });
    
	}
}
