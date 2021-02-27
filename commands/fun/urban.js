const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "urban",
	category: "fun", 
	cooldown: 5, 
	usage: "urban <word>",
  	description: "Connects to the urban dictionary's definition", 

	
  run: async (client, message, args, user, text, prefix) => {


if(!args) {
return message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: "Please supply a word to define!",
      icon_url: message.author.displayAvatarURL({ dynamic:true })
    }
  }
});
    
const fetch = require("node-fetch");
const querystring = require("querystring");

const query = querystring.stringify({ term: args.join(" ") });

const { list } = await 
fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

if(!list) {
return message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: `No results found for **${args.join(' ')}**`,
      icon_url: message.author.displayAvatarURl({ dynamic:true })
    }
  }
})
};

const [ answer ] = list;

const embed = new MessageEmbed()
.setColor(color.main)
.setTitle(answer.word)
.setFooter(`Definition requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
.setTimestamp()
.addFields(
{ name: '**Definition**', value: (answer.definition) },
{ name: '**Example**', value: (answer.example) },
{ name: '**Rating**', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` },
);
message.channel.send(embed);
}
	}
}
// not working